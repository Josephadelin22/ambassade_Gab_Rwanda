// app/formulaires/passeport/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const passeportSchema = z.object({
  nomComplet: z.string().min(1, "Le nom complet est obligatoire."),
  email: z.string().email("Email invalide.").min(1, "L'email est obligatoire."),
  telephone: z.string().min(1, "Le téléphone est obligatoire."),
  typeDemande: z
    .string()
    .min(1, "Choisissez un type de demande (renouvellement, perte, etc.)."),
  numeroPasseport: z.string().optional(),
  motif: z.string().min(1, "Le motif est obligatoire."),
});

type PasseportFormData = z.infer<typeof passeportSchema>;

export default function PasseportPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PasseportFormData>({
    resolver: zodResolver(passeportSchema),
    defaultValues: {
      nomComplet: "",
      email: "",
      telephone: "",
      typeDemande: "",
      numeroPasseport: "",
      motif: "",
    },
  });

  const onSubmit = async (data: PasseportFormData) => {
    console.log("Demande passeport (prototype) :", data);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/5 via-white to-gabon-blue/5">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
              Passeports & documents de voyage
            </h1>
            <p className="section-subtitle">
              Pré-demande en ligne pour faciliter le traitement en présentiel.
            </p>
          </div>
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

          <h2 className="mt-6 section-header">2. Détails de la demande</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="typeDemande" className="text-xs font-semibold text-slate-700">
                Type de demande
              </label>
              <select
                id="typeDemande"
                className="select-field"
                {...register("typeDemande")}
              >
                <option value="">Choisir</option>
                <option>Renouvellement</option>
                <option>Première demande</option>
                <option>Déclaration de perte</option>
                <option>Autre</option>
              </select>
              {errors.typeDemande && (
                <p className="error-text">{errors.typeDemande.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="numeroPasseport"
                className="text-xs font-semibold text-slate-700"
              >
                Numéro de passeport (si existant)
              </label>
              <input
                id="numeroPasseport"
                type="text"
                placeholder="PP1234567"
                className="input-field"
                {...register("numeroPasseport")}
              />
            </div>
          </div>

          <div className="mt-4 space-y-1">
            <label htmlFor="motif" className="text-xs font-semibold text-slate-700">
              Motif / détails de la demande
            </label>
            <textarea
              id="motif"
              rows={4}
              placeholder="Expliquez brièvement votre demande (urgence, échéances de voyage, etc.)"
              className="textarea-field"
              {...register("motif")}
            />
            {errors.motif && <p className="error-text">{errors.motif.message}</p>}
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
            Ce formulaire sert de pré-demande pour préparer votre passage au consulat.
          </p>
        </form>
      </div>
    </main>
  );
}
