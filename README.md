

# 🟦 Portail de la Nouvelle Ambassade du Gabon

**Next.js • TypeScript • Tailwind CSS • shadcn/ui • Prisma • PostgreSQL**

Ce projet vise à construire un portail moderne, sécurisé et performant pour la **Nouvelle Ambassade du Gabon**, comprenant :

* Immatriculation des ressortissants
* Portail Étudiants
* Système d’Alerte
* Espace Investisseurs
* Galerie d’accueil
* Mini Dashboard Administratif



# 🚀 1. Technologies utilisées

| Technologie                 | Rôle                             |
| --------------------------- | -------------------------------- |
| **Next.js 15 (App Router)** | Framework principal              |
| **TypeScript**              | Typage strict et sûr             |
| **Tailwind CSS**            | Stylisation rapide et moderne    |
| **shadcn/ui**               | Composants UI professionnels     |
| **Prisma ORM**              | Gestion de la base de données    |
| **PostgreSQL**              | Base de données principale       |
| **React Hook Form + Zod**   | Formulaires validés et sécurisés |



# 📁 2. Arborescence du projet

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



# ⚙️ 3. Installation & démarrage

### 1. Cloner le projet

```bash
git clone https://github.com/nom-utilisateur/projet-ambassade-gabon.git
cd projet-ambassade-gabon
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d’environnement

Créer un fichier `.env` :

```
DATABASE_URL="postgresql://user:password@localhost:5432/ambassade"
NEXT_PUBLIC_APP_NAME="Ambassade du Gabon"
```

### 4. Initialiser Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Lancer le projet

```bash
npm run dev
```



# 🧩 4. Modules du portail

### ✔ Immatriculation

Dépôt de dossier, pièces jointes, validation consulaire.

### ✔ Portail Étudiants

Suivi, documents académiques, demandes diverses.

### ✔ Système d’Alerte

Alertes sécuritaires, messages urgents, géolocalisation.

### ✔ Espace Investisseurs

Dossiers de projet, opportunités, contacts officiels.

### ✔ Page d’accueil

Présentation institutionnelle + petite galerie d’images.

### ✔ Mini Dashboard Admin

Gestion interne des dossiers, alertes, documents et contenus.



# 🟦 5. Gestion des Administrateurs & Organisation du Projet

## 🎯 Objectif

Permettre à l’équipe diplomatique (non technique) de gérer le portail **sans écrire une seule ligne de code**, grâce à un **Espace Admin dédié**.



## 🟩 5.1 Interface Admin

Les administrateurs auront un espace dédié :

```
/admin
```

Il contient :

* Tableau de bord
* Gestion des immatriculations
* Gestion des étudiants
* Gestion des alertes
* Gestion des dossiers investisseurs
* Gestion de la galerie
* Gestion des documents PDF
* Gestion des actualités
* Paramètres de contact et informations publiques

Chaque section inclut :

* Tableau des données
* Bouton “Ajouter”
* Bouton “Modifier”
* Bouton “Supprimer”
* Formulaires simples et intuitifs
* Zéro manipulation technique

Les admins interagissent uniquement avec l’interface :
**clique → remplir → enregistrer**.



## 🟩 5.2 Rôles types (organisation diplomatique)

### 👨‍💼 Admin Consulaire

* Valide immatriculations
* Gère dossiers étudiants

### 📰 Admin Communication

* Publie actualités
* Met à jour documents et galerie

### 🧑‍✈️ Admin Sécurité

* Gère alertes, urgences, SOS

### 👨‍💼 Admin Investisseurs

* Consulte dossiers
* Coordonne les réponses

### 👑 Super Admin (Ambassadeur)

* Accès total
* Modifie toutes les sections



## 🟩 5.3 Comment le développeur interagit avec l’équipe

### Le développeur est responsable de :

* La maintenance technique
* Les mises à jour
* Les correctifs
* La sécurité
* Les nouvelles fonctionnalités
* Le déploiement et l’hébergement

### L’équipe admin est responsable de :

* Le contenu
* La validation des dossiers
* Les alertes
* La communication publique

Aucune manipulation git, npm, terminal ou code.



## 🟩 5.4 Support & Communication

Une organisation professionnelle recommandée :

### Canal de support

WhatsApp, Telegram ou Slack :
**“Support Portail Ambassade”**

### Outil de suivi

Notion ou Trello :

* À faire
* En cours
* Fait
* Bug détecté
* Nouvelle fonctionnalité

### Formation de l’équipe

1. Démonstration vidéo (5–10 min)
2. Documentation PDF (capturé d'écran + explications simples)
3. Assistance mensuelle ou trimestrielle



# 🛠 6. Scripts utiles

```bash
npm run dev
npm run build
npm run start
npm run db:studio
```


# 🔒 7. Sécurité & bonnes pratiques

* Validation stricte des formulaires (Zod)
* API sécurisées
* Gestion des rôles admin
* Système de permissions
* Logging étendu
* Protection contre injections / XSS / CSRF



# 📌 8. Roadmap

### Phase 1 — Base du projet

✔ Initialisation Next.js
✔ Tailwind CSS
✔ shadcn/ui
✔ Prisma
⬜ Page d’accueil

### Phase 2 — Modules Utilisateurs

⬜ Immatriculation
⬜ Étudiants
⬜ Investisseurs
⬜ Alertes

### Phase 3 — Espace Admin

⬜ Dashboard
⬜ Rôles et permissions
⬜ Gestion du contenu



# 👤 Auteur

Développé par ** BOUSSAMBA QUENUM Joseph** — Portail officiel de l’Ambassade du Gabon (Version 2025).



