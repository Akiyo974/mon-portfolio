# Mon Portfolio

Bienvenue sur mon portfolio personnel. Ce projet a été conçu pour présenter mes compétences en développement web et pour exposer les projets sur lesquels j'ai travaillé.

## 🚀 Technologies Utilisées

- **React** : Bibliothèque JavaScript utilisée pour créer l'interface utilisateur de manière dynamique.
- **Vite** : Utilisé pour le bundling rapide et efficace.
- **CSS (Tailwind CSS)** : Pour le stylage de l'application de manière réactive et modulable.
- **EmailJS** : Pour l'envoi de messages via le formulaire de contact.
- **Images** : Diverses illustrations et ressources graphiques (`planete.png`, `satellite.png`, etc.).

## 🌟 Fonctionnalités

- **Présentation de projets** : Découvrez mes projets récents, mis en avant à travers la section `FeaturedProjects`.
- **Navigation fluide** : Utilisation de `FloatingNav` pour faciliter la navigation entre les différentes sections.
- **Section de contact** : Possibilité de me contacter via un formulaire intégré (`ContactSection`). Les messages sont envoyés directement par e-mail en utilisant **EmailJS**.
- **Animation des technologies** : Animation d'une liste de technologies que j'utilise grâce au composant `InfiniteMovingTechnologies`.
- **Objet volant animé** : Ajout d'un satellite animé avec des effets de rebond lent dans la section de contact.

## 📂 Structure du Projet

- `dist/` : Contient les fichiers de distribution de l'application, notamment les fichiers CSS et JavaScript minifiés.
- `public/` : Ressources publiques accessibles directement (ex: `vite.svg`).
- `src/` : 
  - `App.css` et `App.jsx` : Fichiers principaux de l'application.
  - `main.jsx` et `index.css` : Point d'entrée de l'application.
  - `assets/` : Images utilisées dans le projet (`AkiMusic.png`, `AkiProject.png`, etc.).
  - `components/` : Composants React réutilisables :
    - **`Header.jsx`** : Composant pour l'en-tête du site.
    - **`Hero.jsx`** : Section d'accueil qui introduit le site.
    - **`ContactSection.jsx`** : Section permettant de me contacter, incluant un formulaire pour envoyer des e-mails via **EmailJS**.
    - **`FloatingNav.jsx`** : Barre de navigation flottante pour une meilleure expérience utilisateur.
    - **`AllProjectsPage.jsx`** : Affiche la liste complète de tous les projets réalisés.
    - **`FeaturedProjects.jsx`** : Composant qui met en avant une sélection de projets spécifiques.
    - **`InfiniteMovingTechnologies.jsx`** : Animation continue des logos des technologies que j'utilise.

## ⚙️ Installation

Pour installer et exécuter ce projet en local, suivez les étapes ci-dessous :

```bash
# Cloner le projet
git clone <lien_du_projet>

# Aller dans le dossier du projet
cd my-portfolio

# Installer les dépendances
npm install

# Lancer le projet en mode développement
npm run dev
