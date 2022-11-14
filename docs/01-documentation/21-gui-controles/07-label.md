---
sidebar_position: 7
---

# Label

Un contrôle Label est une **étiquette**  permettant d'afficher du texte non modifiable par l'utilisateur.
Le texte peut toutefois être modifié par programmation.

```cs
lblResultat.Text = "Réussi";
```

Une étiquette n'a ni bordure ni couleur de fond.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `lbl`  Exemple : `lblMessage` |
| ![propriété](../../_00-shared/_propriete.png) <br/> BackColor | | Obtient ou définit une valeur indiquant la couleur d'arrière-plan. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Enabled | `bool` | Obtient ou définit une valeur indiquant si le contrôle est activé ou non. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Visible | `bool` | Obtient ou définit une valeur indiquant si le contrôle est visible ou non. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Text | `string` | Obtient ou définit le texte contenu dans le contrôle. |
| ![propriété](../../_00-shared/_propriete.png) <br/> TextAlign | | Détermine la position du texte dans le contrôle : Left, Right, Center. |
