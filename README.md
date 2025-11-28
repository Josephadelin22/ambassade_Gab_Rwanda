


# 🟦 Portail de la Nouvelle Ambassade du Gabon

**Next.js • TypeScript • Tailwind CSS • shadcn/ui • Prisma • PostgreSQL**

Ce projet a pour objectif de construire un portail moderne, sécurisé et performant pour la **Nouvelle Ambassade du Gabon**, comprenant plusieurs modules essentiels :

* Immatriculation des ressortissants
* Portail Étudiants
* Système d’Alerte
* Espace Investisseurs
* Page d’accueil avec galerie d’images
* Mini espace Administratif



## 🚀 1. Technologies utilisées

| Technologie                 | Rôle                               |
| --------------------------- | ---------------------------------- |
| **Next.js 15 (App Router)** | Framework principal du projet      |
| **TypeScript**              | Typage strict pour un code robuste |
| **Tailwind CSS**            | Stylisation moderne et rapide      |
| **shadcn/ui**               | Composants UI réutilisables        |
| **Prisma ORM**              | Gestion de la base de données      |
| **PostgreSQL**              | Base de données principale         |
| **React Hook Form + Zod**   | Formulaires typés et sécurisés     |



## 📁 2. Arborescence générale

```
/app
  /api
    /immatriculation
    /etudiants
    /investisseurs
    /alertes
  /admin
  /immatriculation
  /etudiants
  /investisseurs
  /alertes
  layout.tsx
  page.tsx

/components
  /ui
  /forms
  /sections

/lib
  prisma.ts
  validators.ts

/prisma
  schema.prisma

/public
  /images
  /gallery

/styles
  globals.css

README.md
```



## ⚙️ 3. Installation et démarrage

### 1. Cloner le projet

```bash
git clone https://github.com/nom-utilisateur/projet-ambassade-gabon.git
cd projet-ambassade-gabon
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Créer le fichier `.env`

```
DATABASE_URL="postgresql://user:password@localhost:5432/ambassade"
NEXT_PUBLIC_APP_NAME="Ambassade du Gabon"
```

### 4. Initialiser Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Lancer en développement

```bash
npm run dev
```

---

## 🧩 4. Modules du portail

### ✔ Immatriculation

Formulaire complet, données personnelles, pièces jointes.

### ✔ Portail Étudiants

Informations académiques, suivi, documents.

### ✔ Système d'Alerte

Signalement rapide, géolocalisation, messages urgents.

### ✔ Espace Investisseurs

Projets, documents, envois de dossiers.

### ✔ Page d’accueil

Présentation, sections dynamiques, galerie d’images.

### ✔ Mini espace Admin

Gestion des immatriculations, étudiants, alertes et investisseurs.



## 🛠 5. Scripts utiles

```bash
npm run dev         # mode développement
npm run build       # build production
npm run start       # démarrage production
npm run db:studio   # interface Prisma
```



## 🔒 6. Sécurité & bonnes pratiques

* Validation Zod sur tous les formulaires
* API sécurisées
* Logging d’erreurs
* Préparation pour authentification admin
* Upload sécurisé (plus tard)



## 📌 7. Roadmap

### Phase 1 — Base du projet

✔ Initialisation Next.js
✔ Tailwind + shadcn/ui
✔ Setup Prisma
⬜ Page d’accueil

### Phase 2 — Modules utilisateurs

⬜ Immatriculation
⬜ Étudiants
⬜ Investisseurs
⬜ Alertes

### Phase 3 — Admin

⬜ Dashboard
⬜ Validation des dossiers
⬜ Filtres et recherche

---

## 👤 Auteur

Développé par BOUSSAMBA QUENUM Joseph — Portail officiel de l’Ambassade du Gabon (Version 2025).
