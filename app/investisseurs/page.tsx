// app/formulaires/investisseurs/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const investSchema = z.object({
  nomComplet: z.string().min(1, "Votre nom complet est obligatoire."),
  email: z.string().email("Email invalide.").min(1, "L'email est obligatoire."),
  telephone: z.string().min(1, "Le téléphone est obligatoire."),
  paysOrigine: z.string().min(1, "Ce champ est obligatoire."),
  secteur: z.string().min(1, "Choisissez un secteur d'activité."),
  titreProjet: z.string().min(1, "Le titre du projet est obligatoire."),
  localisationProjet: z
    .string()
    .min(1, "Indiquez la localisation prévue du projet."),
  budget: z.string().min(1, "Le budget estimé est obligatoire."),
  description: z
    .string()
    .min(20, "La description doit contenir au moins 20 caractères."),
  lienDossier: z.string().optional(),
});

type InvestFormData = z.infer<typeof investSchema>;

export default function InvestisseursPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InvestFormData>({
    resolver: zodResolver(investSchema),
    defaultValues: {
      nomComplet: "",
      email: "",
      telephone: "",
      paysOrigine: "",
      secteur: "",
      titreProjet: "",
      localisationProjet: "",
      budget: "",
      description: "",
      lienDossier: "",
    },
  });

  const onSubmit = async (data: InvestFormData) => {
    console.log("Projet investisseur (prototype) :", data);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/5 via-white to-gabon-blue/5">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
              Dépôt de projet – Espace investisseurs
            </h1>
            <p className="section-subtitle">
              Présentez un projet économique destiné au Gabon ou au Rwanda (prototype).
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-gabon-yellow/20 px-3 py-1 text-[11px] font-semibold text-gabon-blue">
            Opportunités · Projets · Investissements
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-8">
        {isSubmitted && (
          <div className="mb-4 rounded-xl border border-gabon-green/60 bg-gabon-green/10 px-3 py-2 text-[11px] text-gabon-green md:text-xs">
            Votre projet a été envoyé (prototype). Dans la version finale, il serait
            transmis au service économique.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="section-card">
          <h2 className="section-header">1. Vos informations</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {/* Nom */}
            <div className="space-y-1">
              <label htmlFor="nomComplet" className="text-xs font-semibold text-slate-700">
                Nom complet
              </label>
              <input
                id="nomComplet"
                type="text"
                placeholder="NGOBA Isaac"
                className="input-field"
                {...register("nomComplet")}
              />
              {errors.nomComplet && <p className="error-text">{errors.nomComplet.message}</p>}
            </div>

            {/* Email */}
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

            {/* Téléphone */}
            <div className="space-y-1">
              <label htmlFor="telephone" className="text-xs font-semibold text-slate-700">
                Téléphone
              </label>
              <input
                id="telephone"
                type="tel"
                placeholder="+241 / +250 ..."
                className="input-field"
                {...register("telephone")}
              />
              {errors.telephone && <p className="error-text">{errors.telephone.message}</p>}
            </div>

            {/* Pays d'origine */}
            <div className="space-y-1">
              <label htmlFor="paysOrigine" className="text-xs font-semibold text-slate-700">
                Pays d'origine
              </label>
              <input
                id="paysOrigine"
                type="text"
                placeholder="Gabon / Rwanda / Autre"
                className="input-field"
                {...register("paysOrigine")}
              />
              {errors.paysOrigine && <p className="error-text">{errors.paysOrigine.message}</p>}
            </div>
          </div>

          <h2 className="mt-6 section-header">2. Votre projet</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {/* Secteur */}
            <div className="space-y-1">
              <label htmlFor="secteur" className="text-xs font-semibold text-slate-700">
                Secteur d'activité
              </label>
              <select id="secteur" className="select-field" {...register("secteur")}>
                <option value="">Choisir</option>
                <option>Agriculture</option>
                <option>Énergie</option>
                <option>Technologie</option>
                <option>Transport & logistique</option>
                <option>Immobilier</option>
                <option>Santé</option>
                <option>Commerce</option>
                <option>Autre</option>
              </select>
              {errors.secteur && <p className="error-text">{errors.secteur.message}</p>}
            </div>

            {/* Titre projet */}
            <div className="space-y-1">
              <label htmlFor="titreProjet" className="text-xs font-semibold text-slate-700">
                Titre du projet
              </label>
              <input
                id="titreProjet"
                type="text"
                placeholder="Projet agro-industriel..."
                className="input-field"
                {...register("titreProjet")}
              />
              {errors.titreProjet && <p className="error-text">{errors.titreProjet.message}</p>}
            </div>

            {/* Localisation */}
            <div className="space-y-1">
              <label
                htmlFor="localisationProjet"
                className="text-xs font-semibold text-slate-700"
              >
                Localisation du projet
              </label>
              <input
                id="localisationProjet"
                type="text"
                placeholder="Libreville / Kigali / Autre région"
                className="input-field"
                {...register("localisationProjet")}
              />
              {errors.localisationProjet && (
                <p className="error-text">{errors.localisationProjet.message}</p>
              )}
            </div>

            {/* Budget */}
            <div className="space-y-1">
              <label htmlFor="budget" className="text-xs font-semibold text-slate-700">
                Budget estimé
              </label>
              <input
                id="budget"
                type="text"
                placeholder="Ex : 50 000 000 FCFA"
                className="input-field"
                {...register("budget")}
              />
              {errors.budget && <p className="error-text">{errors.budget.message}</p>}
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 space-y-1">
            <label htmlFor="description" className="text-xs font-semibold text-slate-700">
              Description du projet
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Expliquez votre projet, ses objectifs, son impact économique..."
              className="textarea-field"
              {...register("description")}
            />
            {errors.description && (
              <p className="error-text">{errors.description.message}</p>
            )}
          </div>

          {/* Lien */}
          <div className="mt-4 space-y-1">
            <label htmlFor="lienDossier" className="text-xs font-semibold text-slate-700">
              Lien vers un dossier / présentation (optionnel)
            </label>
            <input
              id="lienDossier"
              type="text"
              placeholder="Lien Google Drive, PDF, site web..."
              className="input-field"
              {...register("lienDossier")}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? "Envoi..." : "Envoyer le projet (prototype)"}
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
            Dans la version finale, ce formulaire sera connecté au service économique de
            l'ambassade pour analyse.
          </p>
        </form>
      </div>
    </main>
  );
}
