# PlannTrip

Le PlannTrip est une application web conçue pour simplifier l’organisation de voyages en groupe.
Elle offre un système d’authentification permettant aux utilisateurs de créer un compte, gérer leur profil et collaborer avec leurs amis sur des voyages partagés.
Grâce à une interface moderne et intuitive, les utilisateurs peuvent créer des itinéraires, inviter des participants, planifier des activités et centraliser toutes les informations utiles d’un voyage au même endroit.

## 🧰 Features

- 🔐 Création de compte et authentification JWT

- 👤 Gestion du profil utilisateur (nom, avatar, e-mail, mot de passe)

- 📍 Création de voyages avec titre, dates et destination

- 🧑‍🤝‍🧑 Invitation de participants par e-mail

- 📨 Système de confirmation ou refus de participation

- 📅 Ajout d’activités avec date, heure et description

- 🔗 Ajout de liens utiles (hébergements, transports, événements, etc.)

- 👁️ Gestion des accès selon le rôle (créateur de voyage ou participant)

- 🧠 Collaboration en temps réel (en cours de développement)

- 🐳 Déploiement simplifié avec Docker et Docker Compose

<br>

## 🧑‍💻 Technologies

### Backend :

- NestJS 11

- TypeScript

- Prisma ORM

- PostgreSQL

- class-validator

- class-transformer (version la plus récente)

- Passport + JWT

- Bcrypt

- Helmet

### **DevOps**
- Docker  
- Docker Compose  

## ⚙️ Installation & Setup

### 🧩 Option 1 — Installation locale (sans Docker)

```bash
$ npm install
```

### Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### 🐳 Option 2 — Exécution avec Docker

```bash
# Construire et lancer les conteneurs
$ docker-compose up --build

# Arrêter les conteneurs
$ docker-compose down
```


