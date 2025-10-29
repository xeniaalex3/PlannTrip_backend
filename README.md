# PlannTrip

Le plannTrip est une application web destinée à faciliter l'organisation de voyages en groupe. Dotée d'une interface intuitive et moderne, elle permet aux utilisateurs de créer des plans de voyage personnalisés, de choisir des destinations, de fixer des dates et d'inviter des amis par e-mail à collaborer à l'organisation.

## 🧰 Features

- 📍 Création de voyages avec titre, dates et destinations  
- 🧑‍🤝‍🧑 Invitation de participants par e-mail  
- 📅 Ajout d'activités avec date et heure  
- 🔗 Liens utiles (hébergement, transport, événements)  
- ✅ Confirmation de la participation des invités  
- 🧠 Collaboration en temps réel  
- 🐳 Déploiement simplifié avec **Docker** et **Docker Compose**

<br>

## 🧑‍💻 Technologies

### Backend :

- Nest.js 11
- TypeScript
- Prisma ORM
- PostreSQL
- class-validator
- class-transform

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


