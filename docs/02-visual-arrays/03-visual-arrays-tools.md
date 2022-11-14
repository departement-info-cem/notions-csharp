---
sidebar_position: 3
---

# VisualArraysTools

import RandomChar from './_03-visual-arrays-tools/_random-char.md';
import RandomDecimal from './_03-visual-arrays-tools/_random-decimal.md';
import RandomInt from './_03-visual-arrays-tools/_random-int.md';
import Wait from './_03-visual-arrays-tools/_wait.md';

La classe VisualArraysTools contient des méthodes pour générer aléatoirement des valeurs et pour arrêter l'exécution pendant un temps spécifié.

| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../_00-shared/_methode.png) <br/> RandomBool() | Génère aléatoirement une valeur booléenne, soit `true` ou `false`. 
| ![méthode](../_00-shared/_methode.png) <br/> RandomChar(int pMinChar, pMaxChar) | Génère aléatoirement un caractère entre pMinChar et pMaxChar. pMinChar est **inclus** dans l'intervalle et pMaxChar est **exclu** de l'intervalle. <RandomChar/> |
| ![méthode](../_00-shared/_methode.png) <br/> RandomDecimal(decimal pMin, decimal pMax) | Génère aléatoirement un nombre décimal entre pMin et pMax. pMin est **inclus** dans l'intervalle et pMax est **exclu** de l'intervalle. <RandomDecimal/> |
| ![méthode](../_00-shared/_methode.png) <br/> RandomInt(int pMin, int pMax) | Génère aléatoirement un nombre entier entre pMin et pMax. pMin est **inclus** dans l'intervalle et pMax est **exclu** de l'intervalle. <RandomInt/> |
| ![méthode](../_00-shared/_methode.png) <br/> Wait(int pDelai) | Attend un délai spécifié. <Wait/> |
