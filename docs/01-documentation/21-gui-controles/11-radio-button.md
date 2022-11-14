---
sidebar_position: 11
---

# RadioButton

import Checked1 from './_11-radio-button/_checked1.md';
import Checked2 from './_11-radio-button/_checked2.md';

Un contrôle RadioButton est un **bouton radio** permettant à l'utilisateur d'effectuer un choix de type oui/non tout comme la case à cocher.

Cependant, un bouton radio fait partie d'un groupe de boutons dans lequel une seule option peut être sélectionnée à la fois. Le choix d'une option du groupe entraîne automatiquement la désactivation des autres options.

Le bouton radio est souvent utilisé de deux façons :

- selon son état à un instant donné : avec un `if. . . else` **imbriqué**  pour obtenir la propriété Checked de chacun des boutons du groupe.
- selon une action sur le bouton radio : avec l'événement CheckedChanged.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `rad` exemple : `radLivraisonNormale` |
| ![propriété](../../_00-shared/_propriete.png) <br/> Enabled | `bool` | Obtient ou définit une valeur indiquant si le contrôle est activé ou non. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Visible | `bool` | Obtient ou définit une valeur indiquant si le contrôle est visible ou non. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Text | `string` | Obtient ou définit le libellé affiché à côté du bouton radio pour en indiquer le rôle. |
| ![propriété](../../_00-shared/_propriete.png) <br/> TextAlign | | Indique la façon dont le texte est aligné dans le contrôle. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Checked | `bool` | Obtient ou définit une valeur indiquant si le bouton radio est sélectionné ou non. Exemples : <br/> Définit l'état d'un bouton. <Checked1/> Obtient l'état du bouton. <Checked2/> |

| Événement | Description |
| :-------: | ----------- |
| ![propriété](../../_00-shared/_evenement.png) <br/> CheckedChanged | Se produit chaque fois que la propriété Checked est modifiée. |
