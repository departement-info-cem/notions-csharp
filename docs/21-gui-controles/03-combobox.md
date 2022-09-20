---
sidebar_position: 3
---

# ComboBox

Un contrôle ComboBox est l'association d'un contrôle ListBox et d'un contrôle TextBox. Il est possible de choisir un élément dans la liste ou saisir du texte. La propriété DropDownStyle définit le mode de fonctionnement du contrôle.

Exemple :  Liste avec la propriété DropDownStyle définie à DropDownList.

![combobox](./_03-combobox/combobox.png)

La zone de liste déroulante est souvent utilisée avec :

- un `switch...case` selon la propriété `SelectedIndex`
- l'événement `SelectedIndexChanged` au changement de choix dans la liste.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../_00-shared/_propriete.png) (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `cbo`, par exemple : `cboSortesEcran` |
| ![propriété](../_00-shared/_propriete.png) Enabled | `bool` | Obtient ou définit true ou false si le contrôle est activé ou non. |
| ![propriété](../_00-shared/_propriete.png) Visible | `bool` | Obtient ou définit true ou false si le contrôle est visible ou masqué. |
| ![propriété](../_00-shared/_propriete.png) Text | `string` | Obtient le texte qui est sélectionné dans la liste. |
| ![propriété](../_00-shared/_propriete.png) DropDownStyle | | Contrôle l'apparence et la fonctionnalité du contrôle. <br/> - Simple : la liste est affichée en permanence <br/> - DropDown : la liste est affichée à un clic sur la flèche noire <br/> - DropDownList : il est impossible de saisir du texte dans la liste |
| ![propriété](../_00-shared/_propriete.png) Items | `(Collection)` | Les éléments contenus dans la zone de liste déroulante. |
| ![propriété](../_00-shared/_propriete.png) SelectedIndex | `int` | Obtient ou définit l'index spécifiant l'élément actuellement sélectionné. Les items sont numérotés à partir de 0. Si l'index est **-1**, alors aucun item n'est sélectionné. Exemples : <br/> Pour sélectionner l'item à l'index 3 : `cboProduits.SelectedIndex = 3;` <br/> Pour enlever la sélection : `cboProduits.SelectedIndex = -1;` |

| Événement | Description |
| :-------: | ----------- |
| ![événement](../_00-shared/_evenement.png) SelectedIndexChanged | Se produit chaque fois que la propriété SelectedIndex est modifiée. |
