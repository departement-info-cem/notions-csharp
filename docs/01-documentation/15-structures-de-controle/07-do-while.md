---
sidebar_position: 7
---

# do . . . while

import Exemple1 from './_07-do-while/_exemple1.md';
import Exemple2 from './_07-do-while/_exemple2.md';

L'instruction de répétition `do` ... `while` sert à exécuter un bloc d'instructions, un nombre de fois inconnu. Cependant, le bloc d'instructions est toujours exécuté au moins une fois car la condition est placée après le bloc d'instructions.

La boucle `do` ... `while` est souvent utilisée lorsqu'il faut valider des données.

Syntaxe :

```cs
do
{
    instructions;
} while (expression booléenne);  // tant que c'est vrai, recommencer le bloc d'instructions.
```

- Les instructions sont exécutées **une fois avant** que l'expression booléenne soit vérifiée. C’est la principale différence avec la boucle while.
- Si l'expression booléenne est évaluée à `true`, les instructions sont exécutées **à nouveau**.
- À la fin l'exécution du bloc d'instructions, l'expression booléenne est vérifiée. Dès qu'elle est évaluée à `false`, le contrôle passe à l'instruction suivant la boucle. Si la condition n'est jamais évaluée à `false`, c'est une boucle infinie.

| Exemple #1 : Afficher les nombres de 0 à 4. | Résultats |
| ------------------------------------------- | --------- |
| <Exemple1/> | <br/> 0 <br/> 1 <br/> 2 <br/> 3 <br/> 4 <br/> |

| Exemple #2 : Générer au hasard l'âge d'une personne. |
| ------------------------------------------- |
| <Exemple2/> |
