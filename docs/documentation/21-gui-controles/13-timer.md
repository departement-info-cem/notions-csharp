---
sidebar_position: 13
---

# Timer

import Start from './_13-timer/_start.md';
import Stop from './_13-timer/_stop.md';

Un composant Timer permet d'implémenter une minuterie déclenchant un événement selon un intervalle de temps défini par l'utilisateur.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `tmr` Exemple : `tmrHorloge`
| ![propriété](../_00-shared/_propriete.png) <br/> Enabled | `bool` | Obtient ou définit l'état de la minuterie, soit active ou non. `true` si la minuterie est active ; sinon, `false`. L'état par défaut est `false`. |
| ![propriété](../_00-shared/_propriete.png) <br/> Interval | `int` | Obtient ou définit la fréquence de temps en millisecondes du déclenchement de l'événement Tick |

| Événement | Description |
| :-------: | ----------- |
| ![propriété](../_00-shared/_evenement.png) <br/> Tick | Se produit lorsque l'intervalle de temps spécifié s'est écoulé. |

| Méthodes | Description |
| :------: | ----------- |
| ![méthode](../_00-shared/_methode.png) <br/> Start | Démarre la minuterie. Exemple : <Start/> |
| ![méthode](../_00-shared/_methode.png) <br/> Stop | Arrête la minuterie. Exemple : <Stop/> |
