# QCM Projet d'Accessibilité

## Description

Ce projet a pour objectif de fournir un QCM interactif et accessible pour tester les connaissances en matière d'accessibilité numérique. Le projet utilise Next.js, Tailwind CSS, et se concentre sur la création de composants accessibles pour les utilisateurs avec des handicaps.

Le projet est conçu pour répondre aux normes d'accessibilité, y compris la navigation au clavier, la compatibilité avec les lecteurs d'écran, et la gestion correcte des attributs ARIA.

## Fonctionnalités

- **Accessibilité clavier** : navigation fluide entre les éléments interactifs avec le clavier.
- **Compatibilité avec les lecteurs d'écran** : tous les composants sont compatibles avec les technologies d'assistance.
- **Responsive design** : l'interface s'adapte à toutes les tailles d'écran.
- **Composants réutilisables** : les composants comme `Accordion` sont accessibles et réutilisables.

## Prérequis

Avant de commencer, vous devez avoir installé Node.js et npm sur votre machine. Vous pouvez les installer à partir du site officiel : [Node.js](https://nodejs.org/).

## Installation

1. Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/Haithem-Hammami/QCM.git
Naviguez dans le répertoire du projet :
bash
Copier le code
cd QCM
Installez les dépendances du projet avec npm :
bash
Copier le code
npm install
Démarrer l'application
Pour démarrer le serveur de développement, utilisez la commande suivante :

bash
Copier le code
npm run dev
Cela lancera l'application sur http://localhost:3000. Vous pouvez maintenant tester l'application localement.

Tests d'Accessibilité
Le projet utilise plusieurs outils pour assurer l'accessibilité :

Lighthouse pour des audits d'accessibilité
axe-core intégré avec Cypress pour les tests d'accessibilité
ESLint avec eslint-plugin-jsx-a11y pour vérifier le code
