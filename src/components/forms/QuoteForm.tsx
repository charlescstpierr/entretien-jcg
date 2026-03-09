"use client";

import { useState } from "react";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validation";
import { FormSuccess } from "./FormSuccess";

export const QuoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      serviceType: formData.get("serviceType") as string,
      clientType: formData.get("clientType") as string,
      address: formData.get("address") as string,
      message: formData.get("message") as string,
    };

    const result = quoteFormSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof QuoteFormData, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof QuoteFormData;
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/soumission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || "Une erreur est survenue.");
        return;
      }
      setSuccess(true);
    } catch {
      setServerError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <FormSuccess
        message="Nous vous contacterons dans les 24 heures pour votre soumission."
        onReset={() => setSuccess(false)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {serverError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" role="alert">
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-medium text-slate-700 mb-1">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="quote-name"
            name="name"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 transition-colors"
            placeholder="Jean Tremblay"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="quote-email" className="block text-sm font-medium text-slate-700 mb-1">
            Courriel <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="quote-email"
            name="email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 transition-colors"
            placeholder="jean@exemple.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-medium text-slate-700 mb-1">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="quote-phone"
            name="phone"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 transition-colors"
            placeholder="(418) 234-5678"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="quote-service" className="block text-sm font-medium text-slate-700 mb-1">
            Service désiré <span className="text-red-500">*</span>
          </label>
          <select
            id="quote-service"
            name="serviceType"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 transition-colors"
          >
            <option value="">Sélectionnez un service</option>
            <option value="entretien-de-pelouse">Entretien de pelouse</option>
            <option value="amenagement-paysager">Aménagement paysager</option>
            <option value="deneigement">Déneigement</option>
            <option value="autre">Autre</option>
          </select>
          {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Type de client <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="clientType"
              value="residential"
              defaultChecked
              className="w-4 h-4 text-emerald-primary focus:ring-emerald-primary"
            />
            <span className="text-slate-700">Résidentiel</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="clientType"
              value="commercial"
              className="w-4 h-4 text-emerald-primary focus:ring-emerald-primary"
            />
            <span className="text-slate-700">Commercial</span>
          </label>
        </div>
        {errors.clientType && <p className="mt-1 text-sm text-red-600">{errors.clientType}</p>}
      </div>

      <div>
        <label htmlFor="quote-address" className="block text-sm font-medium text-slate-700 mb-1">
          Adresse <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="quote-address"
          name="address"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 transition-colors"
          placeholder="123 rue Principale, Lévis"
        />
        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
      </div>

      <div>
        <label htmlFor="quote-message" className="block text-sm font-medium text-slate-700 mb-1">
          Message (optionnel)
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 transition-colors resize-y"
          placeholder="Décrivez votre projet ou vos besoins..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-cta hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Envoi en cours..." : "Demander une soumission gratuite"}
      </button>
    </form>
  );
};
