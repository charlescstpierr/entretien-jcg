import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation";

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);

  if (!entry || now > entry.resetAt) {
    RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
};

const SERVICE_LABELS: Record<string, string> = {
  "entretien-de-pelouse": "Entretien de pelouse",
  "amenagement-paysager": "Aménagement paysager",
  deneigement: "Déneigement",
  autre: "Autre",
};

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Trop de soumissions. Veuillez réessayer dans une heure.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = quoteFormSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json({ error: "Données invalides", errors }, { status: 400 });
    }

    const data = result.data;
    const serviceLabel =
      SERVICE_LABELS[data.serviceType] || data.serviceType;
    const clientLabel =
      data.clientType === "residential" ? "Résidentiel" : "Commercial";

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Entretien JCG <noreply@entretienjcg.ca>",
        to: "entretienjcg@gmail.com",
        subject: `Nouvelle soumission - ${serviceLabel} (${clientLabel})`,
        html: `
          <h2>Nouvelle demande de soumission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nom</td><td style="padding:8px;border:1px solid #ddd">${data.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Courriel</td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Téléphone</td><td style="padding:8px;border:1px solid #ddd">${data.phone}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${serviceLabel}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Type de client</td><td style="padding:8px;border:1px solid #ddd">${clientLabel}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Adresse</td><td style="padding:8px;border:1px solid #ddd">${data.address}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${data.message || "—"}</td></tr>
          </table>
        `,
      });
    }

    // Send SMS via Twilio
    if (
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_PHONE_NUMBER &&
      process.env.OWNER_PHONE
    ) {
      const twilio = await import("twilio");
      const client = twilio.default(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      await client.messages.create({
        body: `Nouvelle soumission JCG\n${data.name}\n${data.phone}\n${serviceLabel} (${clientLabel})\n${data.address}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.OWNER_PHONE,
      });
    }

    return NextResponse.json({
      success: true,
      message:
        "Votre demande de soumission a été envoyée avec succès. Nous vous contacterons dans les 24 heures.",
    });
  } catch (error) {
    console.error("Erreur soumission:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
