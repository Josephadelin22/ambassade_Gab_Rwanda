// app/urgences/avertisseur/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const avertisseurSchema = z.object({
  nomComplet: z.string().min(1, "Le nom est obligatoire."),
  telephone: z.string().min(1, "Le téléphone est obligatoire."),
  email: z.string().email("Email invalide.").optional(),
  typeUrgence: z.string().min(1, "Choisissez un type d'urgence."),
  localisation: z.string().min(1, "Indiquez une localisation ou un repère."),
  description: z.string().min(10, "Merci de décrire brièvement la situation."),
});

type AvertisseurFormData = z.infer<typeof avertisseurSchema>;

export default function AvertisseurPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AvertisseurFormData>({
    resolver: zodResolver(avertisseurSchema),
    defaultValues: {
      nomComplet: "",
      telephone: "",
      email: "",
      typeUrgence: "",
      localisation: "",
      description: "",
    },
  });

  const onSubmit = async (data: AvertisseurFormData) => {
    console.log("Signalement d'urgence (prototype) :", data);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/10 via-white to-gabon-blue/10">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-4">
          <h1 className="text-xl font-bold text-red-700 md:text-2xl">
            Avertisseur – Signalement d&apos;urgence
          </h1>
          <p className="section-subtitle">
            Ce dispositif permet de signaler une situation grave à l&apos;ambassade afin de
            demander une assistance consulaire.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-8">
        {isSubmitted && (
          <div className="mb-4 rounded-xl border border-red-400 bg-red-50 px-3 py-2 text-[11px] text-red-700 md:text-xs">
            Votre signalement a été envoyé (prototype). Dans la version finale, l&apos;équipe
            consulaire recevra immédiatement ce message.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="section-card">
          <h2 className="section-header">1. Vos coordonnées</h2>
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

            <div className="space-y-1 md:col-span-2">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                Email (optionnel)
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
          </div>

          <h2 className="mt-6 section-header">2. Détails de l&apos;urgence</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="typeUrgence" className="text-xs font-semibold text-slate-700">
                Type d&apos;urgence
              </label>
              <select
                id="typeUrgence"
                className="select-field"
                {...register("typeUrgence")}
              >
                <option value="">Choisir</option>
                <option>Accident / situation médicale grave</option>
                <option>Arrestation / garde à vue</option>
                <option>Disparition d'un proche</option>
                <option>Violence / menace grave</option>
                <option>Autre urgence</option>
              </select>
              {errors.typeUrgence && (
                <p className="error-text">{errors.typeUrgence.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="localisation" className="text-xs font-semibold text-slate-700">
                Localisation
              </label>
              <input
                id="localisation"
                type="text"
                placeholder="Quartier, ville, repère important..."
                className="input-field"
                {...register("localisation")}
              />
              {errors.localisation && (
                <p className="error-text">{errors.localisation.message}</p>
              )}
            </div>
          </div>

          <div className="mt-4 space-y-1">
            <label htmlFor="description" className="text-xs font-semibold text-slate-700">
              Description de la situation
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Décrivez brièvement la situation et ce dont vous avez besoin."
              className="textarea-field"
              {...register("description")}
            />
            {errors.description && (
              <p className="error-text">{errors.description.message}</p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? "Envoi..." : "Envoyer l&apos;alerte (prototype)"}
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
            Ce dispositif ne remplace pas les numéros d'urgence locaux. En cas de danger
            immédiat, contactez d'abord les services de secours sur place.
          </p>
        </form>
      </div>
    </main>
  );
}
