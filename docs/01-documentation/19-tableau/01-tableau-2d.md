---
sidebar_position: 2
---

# Tableau à 2D

import Exemple1 from './_02-tableau-2d/_exemple1.md';
import Exemple2 from './_02-tableau-2d/_exemple2.md';

## Déclaration AVEC initialisation

La déclaration d'un tableau à 2 dimensions est codée en ajoutant des parenthèses [ , ] à droite du type de données.

Pour l'initialiser, les valeurs sont codées entre des paires d'accolades.

Syntaxe :

```cs
type de données [ , ]  nomTableau =  {
    { valeur11, valeur12, valeur13, ...}  // rangée 1
    { valeur21, valeur22, valeur23, ...}  // rangée 2
    ...
}
```

- Propriétés 
  - Length : le nombre d'éléments
  - Rank : le nombre de dimensions
- Méthodes
  - GetLength(0) : le nombre de rangées
  - GetLength(1) : le nombre de colonnes

| Exemple #1 : déclaration d'un tableau 2D avec initialisation | Résultats |
| ------------------------------------------------------------ | --------- |
| <Exemple1/> | <br/> <br/> <br/> <br/> 32 <br/> 4 <br/> 8 <br/> 2 <br/> <br/> 71 <br/> 63 <br/>

## Déclaration SANS initialisation

```
Syntaxe :
    type de données [ , ] nomTableau = new decimal [ nb rangées, nb colonnes];
```

Si le tableau n'est pas initialisé, la variable du tableau contient `null`.

- l'opérateur `new` instancie (crée) l'objet tableau
- le type de données des valeurs qui seront assignées au tableau est défini
- la taille du tableau est définie par le nombre de rangées suivi du nombre de colonnes.

Chacun des éléments contient la valeur par défaut du type de données du tableau :

- 0 pour les entiers, 0.0 pour les réels,
- `'\0'` pour un caractère vide et `null` pour une chaine vide.

| Exemple #2 : Déclaration  et instanciation d'un tableau 2D sans initialisation <br/> remplissage du tableau <br/> calcul de la moyenne des éléments du tableau | Résultats |
| ----------------------------------- | --------- |
| <Exemple2/> | <br/> <br/> <br/> <br/> <br/> 10:20:30:40:50:60: <br/> 20:40:60:80:100:120: <br/> 30:60:90:120:150:180: <br/> 40:80:120:160:200:240 <br/> <br/> <br/> <br/> <br/> <br/> <br/> moyenne = 87,5
