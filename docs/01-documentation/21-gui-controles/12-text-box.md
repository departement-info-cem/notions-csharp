---
sidebar_position: 12
---

# TextBox

Un contrôle TextBox est une zone de saisie rectangulaire dans laquelle l'utilisateur peut ajouter ou modifier du texte.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `txt`  Exemple : `txtMessage` |
| ![propriété](../../_00-shared/_propriete.png) <br/> Enabled | `bool` | Indique si le contrôle est activé ou non. |
| ![propriété](../../_00-shared/_propriete.png) <br/> MaxLength | `int` | Indique le nombre maximal de caractères que l'utilisateur peut saisir ou coller dans le contrôle. |
| ![propriété](../../_00-shared/_propriete.png) <br/> PasswordChar | `char` | Indique le caractère à afficher lors de la saisie du mot de passe. |
| ![propriété](../../_00-shared/_propriete.png) <br/> ReadOnly | `bool` | Indique si le texte dans le contrôle peut être ou non modifié par l'utilisateur. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Text | `string` | Indique le texte contenu dans le contrôle. |
| ![propriété](../../_00-shared/_propriete.png) <br/> TextAlign | | Détermine la position du texte dans le contrôle: Left, Right, Center. |
| ![propriété](../../_00-shared/_propriete.png) <br/> UserSystemPasswordChar | `bool` | Indique si le texte dans le contrôle apparaît en tant que caractère de mot de passe. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Visible | `bool` | Détermine si le contrôle est visible ou masqué. |

| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../../_00-shared/_methode.png) <br/> Clear() | Efface le texte contenu dans la propriété Text du contrôle. |
| ![méthode](../../_00-shared/_methode.png) <br/> Select() | Active le contrôle. Le focus est placé sur le contrôle. |
