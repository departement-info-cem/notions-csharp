---
sidebar_position: 17
---

# Type par énumération

import Exemple1 from './_17-type-enumeration/_exemple1.md';
import Exemple2 from './_17-type-enumeration/_exemple2.md';
import Exemple3 from './_17-type-enumeration/_exemple3.md';

Le type `enum` appelé type par énumération est une structure qui facilite la lecture et la maintenance du code.

- Une énumération est une liste de ***constantes*** sémantiquement liées, appelées ***énumérateurs***.
- Les constantes ne peuvent pas être changées à l’exécution.
- Par défaut, le compilateur numérote séquentiellement les constantes à partir de 0.
- Des valeurs explicites peuvent être définies à certains ou à tous les énumérateurs.

## Exemples de déclaration

```cs
public enum enuQualite {Excellente, Bonne, Moyenne, Faible };
public enum enuBreuvage {Coke, SevenUp, JusDePommes, TheGlace };
public enum enuJourSemaine {Dimanche, Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi} ;
public enum enuJourSemaine {Lundi = 1, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche} ;
public enum enuSorteDeDisque  {Normal, Test1, Test2,  Test3 };
public enum enuAddressMode {Normal, Reverse, ReverseRow, ReverseColumn, StairsTopLeft, StairsTopRight, StairsBottomLeft, StairsBottomRight};
```

## Exemples d'utilisation

- Les énumérateurs sont souvent utilisés dans un switch.
- L'extrait de code `sw` `tab` `tab` génère les cas automatiquement : 
  - tapez le nom de la variable `pJour` et `enter`
  - les cas sont générés.

| Exemple #1 : utilisation du type enuJourSemaine |
| --------------------------------------------------- |
| <Exemple1/> |

| Exemple #2 : utilisation du type enuBreuvage |
| -------------------------------------------- |
| <Exemple2/> |

| Exemple #3 : utilisation du type enuQualité |
| ------------------------------------------- |
| <Exemple3/> |
