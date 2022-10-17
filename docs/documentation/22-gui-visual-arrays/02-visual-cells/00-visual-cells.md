---
slug: ./
---

# VisualCells

import RandomizeValue1 from './_00-visual-cells/_randomize-value-1.md';
import RandomizeValue2 from './_00-visual-cells/_randomize-value-2.md';

```mdx-code-block
import DocCardList from '@theme/DocCardList';
```

Une "Visual Cell" est similaire à une case mémoire. Elle contient une valeur associée à un type de données.
Quatre types de Visual Cell sont disponibles.

- VisualBool `bool` : true ou false
- VisualChar `char` : un caractère
- VisualInt `int` : un entier positif ou négatif
- VisualDecimal `decimal` : un nombre positif ou négatif

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriete](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objetVoir la liste des préfixes dans les [standards](https://sites.google.com/site/notionscsharpcem/prefixesetstandards). |
| ![propriete](../../_00-shared/_propriete.png) <br/> BackColor | | Obtient ou définit la couleur d'arrière plan de la cellule  vsiNombre.BackColor = Color.Blue; |
| ![propriete](../../_00-shared/_propriete.png) <br/> Enabled | `bool` | Obtient ou définit une valeur indiquant si la cellule peut répondre à une action de l'utilisateur. |
| ![propriete](../../_00-shared/_propriete.png) <br/> ReadOnly | `bool` | Indique si la cellule est en lecture seule. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Value | selon le type de données | La valeur actuelle de la cellule |
| ![propriete](../../_00-shared/_propriete.png) <br/> ValueAlign | | Aligne le contenu de la cellule |
| ![propriete](../../_00-shared/_propriete.png) <br/> Visible | `bool` | Détermine si la cellule est visible ou masquée |


| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomizeValue | Assigne une valeur aléatoire à la propriété Value dans l'intervalle Minimum à Maximum inclusivement. <RandomizeValue1/> Ayant le VisualInt nommé vsiNombre, avec les propriétés Minimum = 5 et Maximum = 25  un nombre entre 5 et 25 est généré et est assigné à la propriété Value de vsiNombre |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomizeValue(int pMinimum, int pMaximum) | Non disponible pour un VisualBoolAssigne une valeur aléatoire à la propriété Value dans l'intervalle indiqué en paramètre. Les paramètres pMinimun et pMaximum doiventêtre compris dans l'intervalle des propriétés Minimum et Maximum. vsiNombre. <RandomizeValue2/> Ayant le VisualInt nommé vsiNombre, un nombre entre 2 et 15 inclusivement est généré et assigné à la propriété Value de vsiNombre. |

<DocCardList />
