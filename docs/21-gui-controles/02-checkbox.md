---
sidebar_position: 2
---

# CheckBox

import Checked from './_02-checkbox/_checked.md';

Un contrôle CheckBox est une **case à cocher** permettant à l'utilisateur d'effectuer un choix de type oui/non.

On aura souvent besoin de traiter une case à cocher de deux façons différentes:

- en cherchant à connaître son état à un instant donné. On utilisera alors un if à une branche (`if sans else`) pour interroger sa propriété `Checked`.
- en réagissant immédiatement à une action sur la case. On utilisera alors l'événement `CheckedChanged`.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `chk`, par exemple : `chkDoublePhoto` |
| ![propriété](../_00-shared/_propriete.png) <br/> AutoSize | `bool` | Indique si le contrôle se redimensionne automatiquement pour s'ajuster à son contenu. |
| ![propriété](../_00-shared/_propriete.png) <br/> Checked | `bool` | Obtient ou définit une valeur indiquant si la case est cochée ou non. Exemple : Pour vérifier si une case est cochée, <Checked/> |
| ![propriété](../_00-shared/_propriete.png) <br/> Enabled | `bool` | Obtient ou définit une valeur indiquant si le contrôle est activé ou non. |
| ![propriété](../_00-shared/_propriete.png) <br/> FlatStyle | | Obtient ou définit l'apparence du contrôle lorsque le bouton est cliqué. <br/> - Flat : aucun effet de relief <br/> - Pop-up : aucun effet de relief sauf au moment où la souris survole le bouton <br/> - Standard : effet de relief toujours présent |
| ![propriété](../_00-shared/_propriete.png) <br/> Text | `string` |Obtient ou définit le libellé affiché à côté de la case pour en indiquer le rôle. |
| ![propriété](../_00-shared/_propriete.png) <br/> TextAlign | | Indique la façon dont le texte est aligné dans le contrôle. |
| ![propriété](../_00-shared/_propriete.png) <br/> Visible | `bool` | Obtient ou définit une valeur indiquant si le contrôle est visible ou non. |

| Événement | Description |
| :-------: | ----------- |
| ![événement](../_00-shared/_evenement.png) <br/> CheckedChanged | Se produit chaque fois que la propriété Checked est modifiée. |
