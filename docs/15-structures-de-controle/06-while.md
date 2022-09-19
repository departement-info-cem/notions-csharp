---
sidebar_position: 6
---

# while

import Exemple1 from './_06-while/_exemple1.md';
import Exemple2 from './_06-while/_exemple2.md';
import Exemple3 from './_06-while/_exemple3.md';
import Exemple3Comparaison from './_06-while/_exemple3-comparaison.md';

L'instruction de répétition `while` sert à exécuter un bloc d'instructions, un nombre de fois **non connu**.

Syntaxe :

```cs
//tant que l'expression est vraie, exécuter le bloc d'instructions. 
while (expression booléenne) 
{
    instructions;
}
```

| Exemple #1 : Extraire les chiffres d'un nombre. | Résultats |
| ----------------------------------------------- | --------- |
| <Exemple1/> | 5 <br/> 4 <br/> 3 <br/> 2 <br/> 8 <br/> 7 |

Lors de la lecture dans un fichier texte, le nombre de lignes à lire n'est pas connu.
La boucle `while` doit être utilisée.

| Exemple #2 : Lire un fichier de données texte. |
| ----------------------------------------------- |
| <Exemple2/> |

La boucle `for` est un **cas particulier** de la boucle `while`.
Lorsqu'un compteur contrôle le nombre de répétitions, la boucle `for` est utilisée.

| Exemple #3 : Afficher 5 fois le mot allo. | Comparer le while et le for |
| ----------------------------------------------- | --------- |
| <Exemple3/> | <Exemple3Comparaison/> |
