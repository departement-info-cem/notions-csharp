---
sidebar_position: 14
---

# Chaîne / string

import ExempleLength from './_14-chaine-string/_length-exemple.md';
import ExempleSubstring from './_14-chaine-string/_substring-exemple.md';
import ExempleIndexOf from './_14-chaine-string/_indexof-exemple.md';
import ExempleLastIndexOf from './_14-chaine-string/_lastindexof-exemple.md';
import ExempleToLower from './_14-chaine-string/_tolower-exemple.md';
import ExempleToUpper from './_14-chaine-string/_toupper-exemple.md';
import ExempleTrim from './_14-chaine-string/_trim-exemple.md';
import ExempleTrimEnd from './_14-chaine-string/_trimend-exemple.md';
import ExempleInsert from './_14-chaine-string/_insert-exemple.md';
import ExemplePadRight from './_14-chaine-string/_padright-exemple.md';
import ExempleContains from './_14-chaine-string/_contains-exemple.md';
import ExempleSplit from './_14-chaine-string/_split-exemple.md';
import Exemple1 from './_14-chaine-string/_exemple1.md';

Une chaîne est une collection séquentielle de 0 ou plusieurs caractères Unicode.

### Déclaration

Le mot-clé `string` identifie le type de données chaîne. La chaîne est déclarée entre guillemets.
Un objet de type chaîne est créé.  Une chaîne est immuable : le contenu de l'objet ne peut être modifié.


Exemple : `string uneChaine = "Bonjour toi!";`

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| B | o | n | j | o | u | r |  | t | o | i | ! |

### Accès aux caractères de la chaîne

Un **index** de base 0 définit la position d'un caractère dans la chaîne.

Exemple :  char premiereLettre = uneChaine[0];

| Propriété | Type | Description | Exemple | Résultat |
| :-------: | ---- | ----------- | ------- | :------: |
| ![propriété](../_00-shared/_propriete.png) <br/> Length | `int` | Obtient la longueur de la chaine. | <ExempleLength/> | 12 |

| Méthode | Valeur <br/> de <br/> retour | Description | Exemple | Résultat |
| :-----: | :--------------------------: | ----------- | ------- | :------: |
| ![méthode](../_00-shared/_methode.png) <br/> Substring | `string` | Crée une sous-chaine. | <ExempleSubstring/> | `"r toi!"` <br/> <br/> <br/> `"njour"` |
| ![méthode](../_00-shared/_methode.png) <br/> IndexOf | `int` | Obtient l'index d'une sous-chaine. <br/> Si la sous-chaine n'existe pas, alors la méthode retournera **-1**. | <ExempleIndexOf/> | `4` <br/> <br/> <br/> `-1` |
| ![méthode](../_00-shared/_methode.png) <br/> LastIndexOf | `int` | Obtient l'index de la dernière sous-chaine. <br/> Si la sous-chaine n'existe pas, alors la méthode retournera **-1**. | <ExempleLastIndexOf/> | `9` <br/> <br/> <br/> `-1` |
| ![méthode](../_00-shared/_methode.png) <br/> ToLower | `string` | Crée une nouvelle chaine en minuscules. | <ExempleToLower/> | `"bonjour toi!"`
![méthode](../_00-shared/_methode.png) <br/> ToUpper | `string` | Crée une nouvelle chaine en majuscules. | <ExempleToUpper/> | `"BONJOUR TOI"` |
| ![méthode](../_00-shared/_methode.png) <br/> Trim | string | Enlève les espaces placés au début et à la fin de la chaine. | <ExempleTrim/> | "Allo toi!" |
| ![méthode](../_00-shared/_methode.png) <br/> TrimEnd | `string` | Supprime de la chaine toutes les occurrences d'un caractère ou d'une sous-chaine située à la fin. | <ExempleTrimEnd/> | `"Allo toi"` |
| ![méthode](../_00-shared/_methode.png) <br/> Insert | `string` | Insère une chaine dans une autre chaine. | <ExempleInsert/> | `"Bonjour à toi!"` |
| ![méthode](../_00-shared/_methode.png) <br/> PadRight | `string` | Aligne les caractères de la  chaine à gauche et remplit à droite en ajoutant un caractère pour une longueur totale spécifiée. | <ExemplePadRight/> | `"Allo toi!!!!"` |
| ![méthode](../_00-shared/_methode.png) <br/> Contains | `bool` | Indique si oui ou non une sous-chaine est contenue dans la chaine. | <ExempleContains/> | Oui |
| ![méthode](../_00-shared/_methode.png) <br/> Split | `string []` | Retourne un tableau qui contient les sous-chaines délimitées par le caractère spécifié. | <ExempleSplit/> | Rosalie <br/> Clara <br/> Jeanne <br/> Louise |

## Exemple #1

Parcourir une chaîne à l'aide d'un for afin de compter le nombre d'occurrences de la lettre 'n' dans la chaîne

| | Résultats |
| - | ------- |
| <Exemple1/> | Nombre de n : 3 |
