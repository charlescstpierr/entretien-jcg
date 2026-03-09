import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().email("Adresse courriel invalide"),
  phone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .max(20, "Numéro de téléphone invalide")
    .regex(
      /^[\d\s()+-]+$/,
      "Le numéro de téléphone ne peut contenir que des chiffres, espaces, parenthèses, + et -"
    ),
  serviceType: z.enum(
    [
      "entretien-de-pelouse",
      "amenagement-paysager",
      "deneigement",
      "autre",
    ],
    { error: "Veuillez sélectionner un service" }
  ),
  clientType: z.enum(["residential", "commercial"], {
    error: "Veuillez sélectionner un type de client",
  }),
  address: z
    .string()
    .min(5, "L'adresse doit contenir au moins 5 caractères")
    .max(200, "L'adresse ne peut pas dépasser 200 caractères"),
  message: z
    .string()
    .max(2000, "Le message ne peut pas dépasser 2000 caractères")
    .optional()
    .default(""),
});

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().email("Adresse courriel invalide"),
  phone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .max(20, "Numéro de téléphone invalide")
    .regex(
      /^[\d\s()+-]+$/,
      "Le numéro de téléphone ne peut contenir que des chiffres, espaces, parenthèses, + et -"
    ),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
