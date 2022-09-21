---
sidebar_position: 4
---

# Form

Un composant Form est un conteneur appelé **formulaire** pouvant contenir d'autres contrôles.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `Frm` Exemple : `FrmPrincipal` |
| ![propriété](../_00-shared/_propriete.png) <br/> FormBorderStyle | | Indique l'apparence et le comportement de la bordure et de la barre de titre du formulaire. |
| ![propriété](../_00-shared/_propriete.png) <br/> MaximizeBox | `bool` | Indique si un formulaire dispose d'un bouton d'agrandissement dans le coin supérieur droit. |
| ![propriété](../_00-shared/_propriete.png) <br/> StartPosition | | Détermine la position du formulaire lorsqu'il s'affiche pour la première fois. |
| ![propriété](../_00-shared/_propriete.png) <br/> Text | `string` | Indique le texte apparaissant dans la barre de titre. Exemple : "Transport de colis". |
| ![propriété](../_00-shared/_propriete.png) <br/> AcceptButton | `Button` | Indique le bouton associé à l'appui de la touche "Entrée". Exemple: Association du  btnCalculer à la touche "Entrée". |
| ![propriété](../_00-shared/_propriete.png) <br/> CancelButton | `Button` | Indique le bouton associé à l'appui sur la touche "Échap". Exemple : Association du btnQuitter à la touche "Échap". |

| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../_00-shared/_methode.png) <br/> Close() | Ferme le formulaire et termine l'application. Pour effectuer des traitements juste avant la fermeture, l'événement FormClosing est utilisé. |

| Événement | Description |
| :-------: | ----------- |
| ![événement](../_00-shared/_evenement.png) <br/> FormClosing | Se produit lorsque le formulaire est fermé. Toutes les ressources associées au formulaire sont libérées. Les instructions contenues dans le gestionnaire d'événement seront exécutées avant la fermeture du formulaire, par exemple, sauvegarder les données dans un fichier. |
