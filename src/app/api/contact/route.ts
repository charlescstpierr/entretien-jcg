import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json({ error: "Données invalides", errors }, { status: 400 });
    }

    const data = result.data;

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Entretien JCG <noreply@entretienjcg.ca>",
        to: "entretienjcg@gmail.com",
        subject: `Nouveau message de contact - ${data.name}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nom</td><td style="padding:8px;border:1px solid #ddd">${data.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Courriel</td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Téléphone</td><td style="padding:8px;border:1px solid #ddd">${data.phone}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${data.message}</td></tr>
          </table>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message:
        "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
    });
  } catch (error) {
    console.error("Erreur contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
