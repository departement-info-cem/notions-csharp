---
sidebar_position: 10
---

# NumericUpDown

Un contrôle NumericUpDown est un **champ numérique** dans lequel des flèches permettent d'augmenter ou diminuer la valeur affichée.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `num` Exemple: `numCoutProduit` |
| ![propriété](../_00-shared/_propriete.png) <br/> Enabled | `bool` | Obtient ou définit une valeur indiquant si le contrôle est activé ou non. |
| ![propriété](../_00-shared/_propriete.png) <br/> Visible | `bool` | Obtient ou définit une valeur indiquant si le contrôle est visible ou non |
| ![propriété](../_00-shared/_propriete.png) <br/> DecimalPlaces | `int` | Indique le nombre de décimales à afficher. |
| ![propriété](../_00-shared/_propriete.png) <br/> Increment | `decimal` | Indique l'incrémentation ou la décrémentation à chaque clic sur le bouton. |
| ![propriété](../_00-shared/_propriete.png) <br/> Maximum | `decimal` | Indique la valeur maximale possible pour ce contrôle.|
| ![propriété](../_00-shared/_propriete.png) <br/> Minimum | `decimal` | Indique la valeur minimale possible pour ce contrôle. |
| ![propriété](../_00-shared/_propriete.png) <br/> ReadOnly | `bool` | Indique si la zone d'édition est en lecture seule. Si `true` alors l'incrément doit être 0. |
| ![propriété](../_00-shared/_propriete.png) <br/> TextAlign | | Détermine la position du texte dans la zone d'édition. Les nombres doivent être alignés à droite. |
| ![propriété](../_00-shared/_propriete.png) <br/> Value | `decimal` | Indique la valeur actuelle placée dans le contrôle. |

| Événement | Description |
| :-------: | ----------- |
| ![propriété](../_00-shared/_evenement.png) <br/> ValueChanged | Se produit lorsque la valeur du contrôle change. |
