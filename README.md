# Notions C#

![build](https://github.com/departement-info-cem/notions-csharp/actions/workflows/deploy.yml/badge.svg)

Site de référence pour le cours de Programmation 1 (1N6) du CÉGEP Édouard-Montpetit développé par les enseignants du département d'informatique.

Ce site de documentation a été construit avec [Docusaurus 2](https://docusaurus.io/). Référez vous à la documentation officielle pour modifier le site.

### Installation

```
$ npm install
```

### Développement Local

```
$ npm start
```

Cette commande démarre une serveur de développement local sur le port `3000` de votre machine personnelle et ouvre un navigateur avec l'adresse locale du site. Les changements effectués sur la documentation (`/docs`) sont automatiquement appliqués sur le site à la sauvegarde des fichiers. Les changements faits à la configuration (ex: `docusaurus.config.js`) nécessitent un redémarrage du projet.

### Déploiement

Tout le code poussé sur la branche `main` de ce dépôt est automatiquement déployée sur [https://info.cegepmontpetit.ca/notions-csharp/](https://info.cegepmontpetit.ca/notions-csharp/) à l'aide de Github Pages et Github Actions.
