---
sidebar_position: 1
---

# Tableau à 1D

import Exemple1 from './_01-tableau-1d/_exemple1.md';
import Exemple2 from './_01-tableau-1d/_exemple2.md';
import Sort from './_01-tableau-1d/_sort.md';
import Reverse from './_01-tableau-1d/_reverse.md';
import IndexOf from './_01-tableau-1d/_indexof.md';
import Clear from './_01-tableau-1d/_clear.md';
import Copy from './_01-tableau-1d/_copy.md';

## Déclaration AVEC initialisation

La déclaration d'un tableau à une dimension est codée en ajoutant des parenthèses [ ] à droite du type de données. Il est possible d'initialiser le tableau avec des valeurs entre des accolades. La taille du tableau, soit sa propriété `Length`, est alors égale au nombre de valeurs fournies et reste fixe.

| Exemple #1 : Déclaration de tableaux avec initialisation | Résultats |
| -------------------------------------------------------- | --------- |
| <Exemple1/> | 8 <br/> <br/> 6 <br/> <br/> 5 <br/> <br/> 4 |

## Déclaration SANS initialisation

La déclaration d'un tableau et l'instanciation d'un tableau utilise l'opérateur `new`. Le type des valeurs contenues dans le tableau ainsi que leur nombre, doit être précisé. La propriété Length du tableau contient la taille du tableau.

Chacun des éléments contient une valeur par défaut : 0 pour les entiers, 0.0 pour les réels, `'\0'` pour un caractère vide et `null` pour une chaine vide.

| Exemple #2 : Déclaration et instanciation d'un tableau et remplissage avec des nombres pairs | Résultats |
| -------------------------------------------------------------------------------------------- | --------- |
| <Exemple2/> | 0: 0 <br/> 1: 2 <br/> 2: 4 <br/> 3: 17 <br/> 4: 8 <br/> 5: 10 <br/> 6: 12 <br/> 7: 14 <br/> 8: 16 <br/> 9: 18 |

## La classe Array

Cette classe offre des méthodes pour la manipulation de tableaux à une dimension. En voici quelques-unes.

| Méthode | Valeur <br/> de <br/> retour | Description |
| :-----: | :--------------------------: | ----------- |
| ![méthode](../_00-shared/_methode.png) Array.Sort(...) | `void` | Trie en ordre croissant les éléments du tableau fourni. <br/> Par exemple : <Sort/> |
| ![méthode](../_00-shared/_methode.png) Array.Reverse(...) | `void` | Inverse les éléments du tableau fourni. Le premier devient le dernier, le deuxième devient l'avant-dernier, etc. <br/> Par exemple : <Reverse/> |
| ![méthode](../_00-shared/_methode.png) Array.IndexOf(...) | `int` | Recherche la valeur spécifiée et retourne l'index de la première occurence de cette valeur dans le tableau. Retourne **-1** si la valeur n'est pas trouvée. <br/> Par exemple : <IndexOf/> |
| ![méthode](../_00-shared/_methode.png) Array.Clear(...) | `void` | Affecte à une plage d'éléments la valeur 0 pour un tableau d'entiers, à partir d'un index spécifié, pour un nombre d'éléments donné. <br/> Par exemple : <Clear/> |
| ![méthode](../_00-shared/_methode.png) Array.Copy(...) | `void` | Copie, un certain nombre d'éléments d'un tableau vers un autre tableau, en commençant par le premier élément. <br/> Par exemple : <Copy/> |
