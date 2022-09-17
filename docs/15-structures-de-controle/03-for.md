---
sidebar_position: 3
---

# for

import Exemple1 from './_03-for/_exemple1.md';
import Exemple2 from './_03-for/_exemple2.md';
import Exemple3 from './_03-for/_exemple3.md';
import Exemple4 from './_03-for/_exemple4.md';
import Exemple5 from './_03-for/_exemple5.md';

L'instruction `for`, aussi appelée **boucle compteur**, sert à exécuter un bloc d'instructions, un **nombre déterminé** de fois.

La variable utilisée pour le nombre de fois est appelée un compteur et est de type `int`. 

## Syntaxe
   
```cs
for ( initialisation ; condition ; incrémentation ou décrémentation)
{
    instructions;
}
```

- initialisation : assigne une valeur à la variable compteur
- condition :  vérification de la condition : **tant qu'elle est vraie**, la boucle continue
- instructions : exécution si la condition est vraie
- incrémentation/décrémentation :  augmentation ou diminution de la variable compteur AVANT de vérifier à nouveau la condition.

| Exemple #1 : Écrire 5 fois le mot "allo" sur des lignes différentes. | Résultats |
| -------------------------------------------------------------------- | --------- |
| <Exemple1/> | allo <br/> allo <br/> allo <br/> allo <br/> allo |

| Exemple #2 : Écrire 5 fois "bonjour" sur des lignes différentes en partant de 0. | Résultats |
| -------------------------------------------------------------------- | --------- |
| <Exemple2/> | 0) bonjour <br/> 1) bonjour <br/> 2) bonjour <br/> 3) bonjour <br/> 4) bonjour |

| Exemple #3 : Écrire 5 fois "bye" sur des lignes différentes en partant de 4. | Résultats |
| ---------------------------------------------------------------------------- | --------- |
| <Exemple3/> | 4 bye <br/> 3 bye <br/> 2 bye <br/> 1 bye <br/> 0 bye |

| Exemple #4 : Écrire les nombres de 0 à 10 par saut de 2, sur des lignes différentes. | Résultats |
| -------------------------------------------------------------------- | --------- |
| <Exemple4/> | Début <br/> :0: <br/> :2: <br/> :4: <br/> :6: <br/> :8: <br/> :10: <br/> Fin |
 	 
| Exemple #5 : Parcourir une grille d'entiers pour y assigner des nombres à partir de 0. |
| -------------------------------------------------------------------- |
| <Exemple5/> |
