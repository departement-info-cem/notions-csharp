---
sidebar_position: 3
---

# Classe Math

import HeaderExemple from './_03-classe-math/_header-exemple.md';
import ExempleAbs from './_03-classe-math/_exemple-abs.md';
import ExempleCeiling from './_03-classe-math/_exemple-ceiling.md';
import ExempleFloor from './_03-classe-math/_exemple-floor.md';
import ExempleMax from './_03-classe-math/_exemple-max.md';
import ExempleMin from './_03-classe-math/_exemple-min.md';
import ExemplePow from './_03-classe-math/_exemple-pow.md';
import ExempleRound from './_03-classe-math/_exemple-round.md';
import ExempleSign from './_03-classe-math/_exemple-sign.md';
import ExempleTruncate from './_03-classe-math/_exemple-truncate.md';

La classe **Math** fournit des **constantes** et des **méthodes statiques** pour des fonctions trigonométriques, logarithmiques et d'autres fonctions mathématiques courantes.

| Constante | Description |
| :-------: | ----------- |
| E | Représente la base de logarithme naturelle spécifiée par la constante e. |
| PI | Représente le rapport de la circonférence d'un cercle à son diamètre, spécifié par la constante π. |

Voici les principales méthodes que nous aurons à utiliser dans ce cours.

Pour plus d'informations, consultez la [liste complète des méthodes de la classe Math](http://msdn.microsoft.com/fr-fr/library/system.math_members%28v=VS.100%29.aspx).

- Pour certaines méthodes, les paramètres sont de type `double` seulement et la valeur retournée est de type `double`.
- Certaines méthodes possèdent plusieurs signatures: elles peuvent avoir des paramètres de type `double`, `float`, `decimal`, `int`, etc. Et elles peuvent retourner une valeur de type soit `double`, `float`, `decimal`, `int`, etc.

| Méthode | Description | Supposons les déclarations suivantes : <HeaderExemple/> | Résultats |
| :-----: | ----------- | --- | :---: |
| ![méthode](../_00-shared/_methode.png) <br/> Abs | Retourne la valeur absolue du nombre spécifié. | <ExempleAbs/> | 12,45 <br/> <br/> 12,45 |
| ![méthode](../_00-shared/_methode.png) <br/> Ceiling | Retourne le plus petit nombre entiersupérieur ou égal au nombre spécifié. | <ExempleCeiling/> | 10 <br/> <br/> -9 |
| ![méthode](../_00-shared/_methode.png) <br/> Floor | Retourne le plus grand nombre entier inférieur ou égal au nombre spécifié. | <ExempleFloor/> | 12 <br/> <br/> -13 |
| ![méthode](../_00-shared/_methode.png) <br/> Max | Retourne le plus grand de deux nombres spécifiés. | <ExempleMax/> | 98 <br/> <br/> 14,56 |
| ![méthode](../_00-shared/_methode.png) <br/> Min | Retourne le plus petit de deux nombres spécifiés. | <ExempleMin/> | 78 |
| ![méthode](../_00-shared/_methode.png) <br/> Pow | Retourne le résultat du nombre spécifié élevé à la puissance spécifiée. | <ExemplePow/> | 32 |
| ![méthode](../_00-shared/_methode.png) <br/> Round | Retourne le nombre le plus proche de la valeur spécifiée.On peut arrondir au nombre de décimales spécifié. | <ExempleRound/> | 23,55 <br/> <br/> 24 |
| ![méthode](../_00-shared/_methode.png) <br/> Sign | Retourne une valeur indiquant le signe du nombre spécifié: <br/> -1 si le nombre est négatif, <br/> 0 si le nombre est nul, <br/> 1 si le nombre est positif. | <ExempleSign/> | -1 |
| ![méthode](../_00-shared/_methode.png) <br/> Truncate | Retourne la partie entière du nombre spécifié. | <ExempleTruncate/> | 12 <br/> <br/> -12 |
