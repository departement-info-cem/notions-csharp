---
sidebar_position: 1
---

# Sprite

Un Sprite est un objet visuel qui peut se déplacer sur une grille. Il peut avoir des formes et des couleurs différentes, être animé et être associé à une image. Il est positionné sur une grille soit à l'aide d'un index ou d'une adresse. Chaque grille possède une collection de Sprites accessible en mode conception via la propriété Sprites.
 
| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriete](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe: `spr` Exemple: `sprJoueur` |
| ![propriete](../../_00-shared/_propriete.png) <br/> AlignOnGrid | `bool` | Obtient ou définit l'alignement du sprite sur la grille. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Animated | `bool` | Obtient ou définit si le sprite est animé ou non. |
| ![propriete](../../_00-shared/_propriete.png) <br/> DestinationAddress | Address | Obtient ou définit l'adresse de la cellule où se termine le segment sprite. |
| ![propriete](../../_00-shared/_propriete.png) <br/> DestinationIndex | `int` | Obtient ou définit l'index de la cellule où se termine le segment sprite. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Direction | | Obtient ou définit la directiondu déplacement du sprite. La direction est définie avec l'énumération `enuDirection` qui liste les directions. Les 4 directions possibles sont Bottom, Left, Right, Top. |
| ![propriete](../../_00-shared/_propriete.png) <br/> DisplayAddress | `Address` | Obtient ou définit l'adresse du sprite où se trouve le sprite. |
| ![propriete](../../_00-shared/_propriete.png) <br/> DisplayIndex | `int` | Obtient ou définitl'index de la grille où se trouve le sprite. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Duration | `int` | Obtient ou définit la durée pour l'animation du sprite. |
| ![propriete](../../_00-shared/_propriete.png) <br/> FollowGrid | `bool` | Obtient ou définit si le déplacement suit la grille lors d'un déplacement animé. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Image | | Obtient ou définit l'image du sprite. |
| ![propriete](../../_00-shared/_propriete.png) <br/> ImageIndex | `int` | Obtient ou définit l'index de l'image pour dessiner le sprite. |
| ![propriete](../../_00-shared/_propriete.png) <br/> NextStepAddress | Address | Obtient l'adresse du# sprite si on le déplaçait d'un pas dans la direction courante avec `MoveOneStep()`. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Visible | `bool` | Obtient ou définit si le sprite est visible ou masqué. |

| Méthode | Description |
| :-----: | :---------: |
| ![méthode](../../_00-shared/_methode.png) <br/> ChangeDirection | Change la direction du sprite selon l'ordre Left, Top, Right et Bottom. |
| ![méthode](../../_00-shared/_methode.png) <br/> ChangeDirection(bool pRandomDirection) | Change la direction aléatoirement. Si pRandomDirection est true et si pRandomDirection est false, la direction est changée selon l'ordre par défaut. |
| ![méthode](../../_00-shared/_methode.png) <br/> MoveDown() | Déplace le sprite à la rangée suivante sur la même colonne. |
| ![méthode](../../_00-shared/_methode.png) <br/> MoveLeft() | Déplace le sprite à la colonne précédente sur la même rangée. |
| ![méthode](../../_00-shared/_methode.png) <br/> MoveOneStep() | Déplace le sprite d'une cellule dans la direction courante. |
| ![méthode](../../_00-shared/_methode.png) <br/> MoveRight() | Déplace le sprite à la colonne suivante sur la même rangée. |
| ![méthode](../../_00-shared/_methode.png) <br/> MoveTo(int pRow, int pColumn) | Déplace le sprite à une à la rangée pRow et à la colonne pColumn. |
| ![méthode](../../_00-shared/_methode.png) <br/> MoveUp() | Déplace le sprite à la rangée précédente sur la même colonne. |
| ![méthode](../../_00-shared/_methode.png) <br/> RelocateAt(int pSourceRow, int pSourceColumn, int pDestinationRow, int pDestinationColumn) | Positionne un SegmentSprite. |
