

# 🇬🇦🇷🇼 Portail Officiel

## Haut-Commissariat / Ambassade de la République Gabonaise en République du Rwanda

**Prototype fonctionnel – Phase de démonstration**



## 1. Présentation générale

Ce projet est un **prototype de portail officiel** destiné à représenter numériquement l’Ambassade (Haut-Commissariat) de la République Gabonaise en République du Rwanda.

Il vise à :

* Centraliser les **informations institutionnelles**
* Faciliter l’accès aux **services consulaires**
* Offrir un espace clair pour la **diaspora gabonaise**
* Valoriser les **opportunités d’investissement**
* Améliorer la **communication officielle** entre l’administration et les usagers

> ⚠️ Ce site est actuellement un **prototype de démonstration**, présenté avec succès.
> Les décisions relatives à la mise en production, à l’hébergement officiel et à la gouvernance du contenu sont en attente.



## 2. Objectifs du prototype

### Objectifs fonctionnels

* Présenter l’institution et ses représentants
* Structurer les services consulaires existants
* Centraliser les contacts, horaires et localisation
* Réduire les déplacements inutiles
* Servir de base pour une future plateforme officielle

### Objectifs stratégiques

* Moderniser l’image numérique de la représentation diplomatique
* Améliorer l’accessibilité de l’information
* Préparer la transition vers une **digitalisation progressive** des services



## 3. Périmètre actuel du projet

### Inclus dans le prototype

* Page d’accueil institutionnelle
* Présentation du Haut-Commissariat
* Présentation du Haut-Commissaire et du Consul honoraire
* Section Diaspora
* Section Investisseurs
* Section Le Gabon / Rwanda
* Section Actualités (contenu de démonstration)
* Section Contact complète
* Carte Google Maps intégrée
* Multilingue (Français / Anglais)
* Navigation fonctionnelle sans erreur 404
* Pages services déjà structurées

### Hors périmètre (à venir)

* Base de données officielle
* Authentification utilisateurs
* Back-office administrateur
* Paiements en ligne
* Prise de rendez-vous automatisée
* Notifications SMS / Email
* Signature et dépôt de documents en ligne



## 4. Architecture technique

### Stack technologique

* **Framework** : Next.js (App Router)
* **Langage** : TypeScript
* **UI / Design** : Tailwind CSS
* **Cartographie** : Google Maps Embed
* **Routing** : basé sur l’arborescence `app/`
* **State local** : React Hooks (`useState`, `useEffect`)
* **Aucune base de données** (prototype statique/dynamique)



## 5. Arborescence principale

```
app/
├── page.tsx                  # Accueil
├── layout.tsx                # Layout global
├── globals.css
├── services/
│   ├── page.tsx              # Accueil des services
│   ├── passeports/
│   │   └── page.tsx
│   ├── etat-civil/
│   │   └── page.tsx
│   ├── legalisations/
│   │   └── page.tsx
│   └── attestations/
│       └── page.tsx
├── immatriculation/
│   └── page.tsx
├── etudiants/
│   └── page.tsx
├── investisseurs/
│   └── page.tsx
├── urgences/
│   └── page.tsx
├── equipe/
│   ├── page.tsx
│   ├── ambassadeur/
│   │   └── page.tsx
│   └── consul/
│       └── page.tsx
└── api/
    └── (routes de démonstration)
```



## 6. Services consulaires intégrés (prototype)

Les services suivants sont **visibles et structurés** :

* Authentification & légalisation de documents
* Actes d’état civil

  * Naissance
  * Mariage (transcription)
  * Décès
* Passeports & laissez-passer
* Attestations

  * Nationalité
  * Célibat
  * Vie / existence
* Enregistrement et carte consulaire
* Visas (présentation informative – prototype)

Chaque service est relié à sa page dédiée.



## 7. Informations pratiques intégrées

### Adresse

**KG 617 St N°6, Kigali – Rwanda**

### Horaires

* Lundi à vendredi
* 09h00 – 16h00

### Contacts

* Téléphone : +250 796 699 240
* Email : [ambagabonrwanda@gmail.com](mailto:ambagabonrwanda@gmail.com)

### Localisation

* Google Maps intégré directement au site



## 8. Multilingue

Le site est entièrement **bilingue** :

* 🇫🇷 Français (par défaut)
* 🇬🇧 Anglais

Le changement de langue est instantané (sans rechargement).



## 9. Design & UX

* Design institutionnel moderne
* Couleurs inspirées de l’identité gabonaise
* Mise en page claire et hiérarchisée
* Responsive (desktop / mobile)
* Hero section immersive avec carrousel
* Navigation fluide et sans erreurs



## 10. État du projet

### ✔ Présentation

* Présentation du prototype : **effectuée**
* Retour global : **positif**
* Compréhension fonctionnelle : **validée**

### ⏳ En attente

* Décision officielle de poursuite
* Validation institutionnelle
* Budget et calendrier
* Accès aux contenus officiels définitifs



## 11. Prochaines étapes possibles (si validation)

1. Mise en place d’un back-office
2. Centralisation réelle des demandes
3. Digitalisation progressive des services
4. Sécurité, conformité et hébergement officiel
5. Formation du personnel administratif
6. Lancement public officiel



## 12. Mention

> **Prototype réalisé à des fins de démonstration et de réflexion stratégique.**
> Toute mise en production nécessitera une validation institutionnelle formelle.



## 13. Crédit

Prototype conçu et développé par
**INOV E-TECH**

## 14. Comment lancer le projet (en local)

Cette section explique comment installer et exécuter le prototype en environnement local à des fins de démonstration ou de développement.

### 14.1 Prérequis

Avant de lancer le projet, assurez-vous d’avoir les éléments suivants installés :

* **Node.js** ≥ 18
* **npm** ou **yarn**
* Un navigateur moderne (Chrome, Firefox, Edge)
* Un environnement de développement (VS Code recommandé)

Vérification :

```bash
node -v
npm -v
```



### 14.2 Installation du projet

1. Cloner le dépôt :

```bash
git clone https://github.com/nom-du-repo/ambassade-gabon-rwanda.git
cd ambassade-gabon-rwanda
```

2. Installer les dépendances :

```bash
npm install
```

ou

```bash
yarn install
```



### 14.3 Lancement du serveur de développement

Démarrer le projet en mode développement :

```bash
npm run dev
```

ou

```bash
yarn dev
```

Par défaut, l’application est accessible à l’adresse :

```
http://localhost:3000
```



### 14.4 Structure de navigation

* La **page d’accueil** est accessible via `/`
* Les pages services sont accessibles via :

  * `/services`
  * `/services/passeports`
  * `/services/etat-civil`
  * `/services/legalisations`
  * `/services/attestations`
* Les autres pages :

  * `/immatriculation`
  * `/investisseurs`
  * `/urgences`
  * `/equipe`
  * `/contact` (section intégrée à l’accueil)

Toutes les routes sont basées sur l’arborescence du dossier `app/`.



### 14.5 Configuration spécifique

Aucune configuration externe n’est requise pour le prototype.

* ❌ Pas de base de données
* ❌ Pas de variables secrètes
* ❌ Pas d’API externe critique (hors Google Maps embed)

Le projet est volontairement **simple à lancer**, afin de faciliter :

* les démonstrations
* les tests institutionnels
* les présentations officielles

---

### 14.6 Build de production (optionnel)

Pour générer une version optimisée :

```bash
npm run build
npm run start
```

Cela simule un environnement de production local.



### 14.7 Remarques importantes

* Le projet est un **prototype fonctionnel**
* Aucune donnée réelle n’est stockée
* Les formulaires sont non persistants
* Toute mise en production nécessitera :

  * une base de données
  * un hébergement officiel
  * une politique de sécurité et de confidentialité



