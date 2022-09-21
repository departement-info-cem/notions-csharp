---
sidebar_position: 5
---

# GroupBox / Panel

Les composants GroupBox ou Panel (panneau) sont des conteneurs permettant  de regrouper des contrôles.

Ils sont principalement utilisés pour diviser un formulaire en sections. En mode conception, si le conteneur est déplacé, tous les contrôles qu'il contient sont également déplacés.

Seul le GroupBox peut afficher une légende et seul le Panel peut disposer de barres de défilement.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../_00-shared/_propriete.png) (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixes : `grp` / `pan` Exemples : `grpTarif` / `panSelection` |
| ![propriété](../_00-shared/_propriete.png) Enabled | `bool` | Obtient ou définit une valeur indiquant si le conteneur ainsi que tous les contrôles qu'il contient sont activés ou non. |
| ![propriété](../_00-shared/_propriete.png) Visible | `bool` | Obtient ou définit une valeur indiquant si le conteneur ainsi que tous les contrôles qu'il contient sont visibles ou non. |
| ![propriété](../_00-shared/_propriete.png) Controls | `Collection` | Obtient la collection des contrôles contenus dans le conteneur. Cette propriété est accessible en mode programmation et non en mode création. Il faut transtyper avec le type du contrôle récupéré dans la collection. |
| ![propriété](../_00-shared/_propriete.png) AutoScroll <br/> (Panel seulement) | `bool` | Indique si les barres de défilement s'affichent automatiquement lorsque le contenu dépasse la zone visible. |
| ![propriété](../_00-shared/_propriete.png) Text <br/> (GroupBox seulement) | `string` | Le texte de la légende du conteneur. |
