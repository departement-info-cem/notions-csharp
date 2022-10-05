---
sidebar_position: 2
---

# switch. . .case

import Structure from './_02-switch-case/_structure.md';
import Exemple1Switch from './_02-switch-case/_exemple1-switch.md';
import Exemple1If from './_02-switch-case/_exemple1-if.md';
import Exemple2Switch from './_02-switch-case/_exemple2-switch.md';
import Exemple2If from './_02-switch-case/_exemple2-if.md';
import Exemple3Switch from './_02-switch-case/_exemple3-switch.md';
import Exemple3If from './_02-switch-case/_exemple3-if.md';

L'instruction `switch` . . .`case` est une **sélection à n branches**.

Elle est utilisée dans le cas où l'on doit vérifier si une variable ou une expression est égale à des valeurs déterminées.
Les instructions à effectuer sont indiquées pour chacune des valeurs (`case`) de la variable ou de l'expression.

Le switch est un raccourci d'écriture d'un `if` imbriqué dont les conditions sont des comparaisons d'égalité sur la même variable ou expression. 

## Syntaxe de la structure switch


| Structure | Explications |
| --------- | ------------ |
| <Structure/> | Les `[ ]` indiquent que cette section est facultative. <br/> <br/> `expression` : sélecteur qui peut être de type entier ou de type chaîne <br/> <br/>`instruction(s)`: les instructions à exécuter lorsque le contrôle est transféré au `case` ou à `default`. <br/> <br/> `break` : instruction de saut qui transfère le contrôle à la fin du switch. |

## Fonctionnement

- Il peut y avoir un nombre quelconque d’étiquettes `case`.
- Les étiquettes `case` ne peuvent pas avoir la même valeur.
- L’instruction de saut `break` est nécessaire après chaque bloc.
- Les étiquettes `case` sont exécutées dans l’ordre. Placer le cas qui se produit le plus souvent au début.
- S’il n’y a pas d’étiquette `default`, le contrôle est transféré à l’extérieur du `switch`.
- Il est possible d’empiler les étiquettes `case`. Voir les cas "Très Petit" et "Petit" dans l'exemple #1 ci-dessous.          

## Exemple #1

La comparaison est effectuée avec la variable choixGrandeur de type `string`.

| Version `switch` | Version `if` |
| ---------------- | ------------ |
| <Exemple1Switch/> | <Exemple1If/> |

## Exemple #2

La comparaison est effectuée avec la variable choix de type int.

| Version `switch` | Version `if` |
| ---------------- | ------------ |
| <Exemple2Switch/> | <Exemple2If/> |

## Exemple #3

La comparaison est effectuée avec la variable cote de type char.

| Version `switch` | Version `if` |
| ---------------- | ------------ |
| <Exemple3Switch/> | <Exemple3If/> |
