// app/formulaires/etat-civil/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const etatCivilSchema = z.object({
  nomComplet: z.string().min(1, "Le nom complet est obligatoire."),
  email: z.string().email("Email invalide.").min(1, "L'email est obligatoire."),
  telephone: z.string().min(1, "Le téléphone est obligatoire."),
  typeActe: z.string().min(1, "Choisissez un type d'acte."),
  personneConcernee: z
    .string()
    .min(1, "Indiquez la personne concernée par l'acte."),
  details: z.string().min(10, "Merci de préciser un minimum de détails."),
});

type EtatCivilFormData = z.infer<typeof etatCivilSchema>;

export default function EtatCivilPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EtatCivilFormData>({
    resolver: zodResolver(etatCivilSchema),
    defaultValues: {
      nomComplet: "",
      email: "",
      telephone: "",
      typeActe: "",
      personneConcernee: "",
      details: "",
    },
  });

  const onSubmit = async (data: EtatCivilFormData) => {
    console.log("Demande état civil (prototype) :", data);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/5 via-white to-gabon-blue/5">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-4">
          <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
            Actes d&apos;état civil
          </h1>
          <p className="section-subtitle">
            Demande de transcription ou de déclaration (naissance, mariage, décès).
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-8">
        {isSubmitted && (
          <div className="mb-4 rounded-xl border border-gabon-green/60 bg-gabon-green/10 px-3 py-2 text-[11px] text-gabon-green md:text-xs">
            Votre demande (prototype) a été envoyée.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="section-card">
          <h2 className="section-header">1. Vos informations</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="nomComplet" className="text-xs font-semibold text-slate-700">
                Nom complet
              </label>
              <input
                id="nomComplet"
                type="text"
                placeholder="Nom & Prénom(s)"
                className="input-field"
                {...register("nomComplet")}
              />
              {errors.nomComplet && <p className="error-text">{errors.nomComplet.message}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="nom@example.com"
                className="input-field"
                {...register("email")}
              />
              {errors.email && <p className="error-text">{errors.email.message}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="telephone" className="text-xs font-semibold text-slate-700">
                Téléphone
              </label>
              <input
                id="telephone"
                type="tel"
                placeholder="+250 / +241 ..."
                className="input-field"
                {...register("telephone")}
              />
              {errors.telephone && <p className="error-text">{errors.telephone.message}</p>}
            </div>
          </div>

          <h2 className="mt-6 section-header">2. Détails de l'acte demandé</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="typeActe" className="text-xs font-semibold text-slate-700">
                Type d'acte
              </label>
              <select id="typeActe" className="select-field" {...register("typeActe")}>
                <option value="">Choisir</option>
                <option>Naissance</option>
                <option>Mariage</option>
                <option>Décès</option>
                <option>Autre</option>
              </select>
              {errors.typeActe && <p className="error-text">{errors.typeActe.message}</p>}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="personneConcernee"
                className="text-xs font-semibold text-slate-700"
              >
                Personne concernée par l'acte
              </label>
              <input
                id="personneConcernee"
                type="text"
                placeholder="Nom & Prénom(s) de la personne"
                className="input-field"
                {...register("personneConcernee")}
              />
              {errors.personneConcernee && (
                <p className="error-text">{errors.personneConcernee.message}</p>
              )}
            </div>
          </div>

          <div className="mt-4 space-y-1">
            <label htmlFor="details" className="text-xs font-semibold text-slate-700">
              Détails complémentaires
            </label>
            <textarea
              id="details"
              rows={4}
              placeholder="Date de l'évènement, lieu, références d'actes existants, etc."
              className="textarea-field"
              {...register("details")}
            />
            {errors.details && <p className="error-text">{errors.details.message}</p>}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? "Envoi..." : "Envoyer la demande (prototype)"}
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setIsSubmitted(false);
              }}
              className="btn-secondary"
            >
              Effacer le formulaire
            </button>
          </div>

          <p className="mt-2 text-[11px] text-slate-500 md:text-xs">
            Dans la version finale, ce formulaire permettra de préparer vos démarches
            d'état civil auprès de l'ambassade.
          </p>
        </form>
      </div>
    </main>
  );
}
