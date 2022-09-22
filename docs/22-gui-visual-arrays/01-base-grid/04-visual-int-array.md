---
sidebar_position: 4
---

# VisualIntArray

Un contrôle de type VisualIntArray est une **grille** dont les cellules contiennent des nombres entiers.

Voir les propriétés, méthodes et struct communs aux différents types de "VisualArrays" : [BaseGrid](https://sites.google.com/site/notionscsharpcem/gui---visualarrays/basevisualarray)

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriete](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe: `via` Exemple: `viaNombres` |
| ![propriete](../../_00-shared/_propriete.png) <br/> DefaultValue | `int` | Obtient ou définit la valeur par défaut des cellules. La valeur par défaut est 0. |
| ![propriete](../../_00-shared/_propriete.png) <br/> SpecialValue | `int` | Obtient ou définit la valeur spéciale à afficher différemment des autres valeurs. |
| ![propriete](../../_00-shared/_propriete.png) <br/> SpecialValueAppearance |  | Détermine les différents aspects de l'apparence de la valeur spéciale. |
| ![propriete](../../_00-shared/_propriete.png) <br/> View | | Obtient ou définit le style de visualisation des cellules: <br/> - Number : les nombres <br/> - Graph : les nombres sous la forme d'un graphique en barres <br/> - Digit : un nombre selon la représentation binaire du nombre à partir de 7 segments <br/> - ImageList : selon l'index des images dans une ImageList. La propriété EnabledAppearance.  ImageList permet de définir la liste d'images. Si lacellule contient la valeur 2, alors l'imageà l'index 2de la liste est affichée. <br/> - GraphNumber : le nombre et son graphique en barres. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Maximum | int | Obtient ou définit la valeur maximale de toutes les cellules. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Minimum | int | Obtient ou définit la valeur minimale de toutes les cellules. |


| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../../_00-shared/_methode.png) <br/> MixUp() | Mélange aléatoirement les cellules en les permutant plusieurs fois, soit le nombre de cellules * 2. |
| ![méthode](../../_00-shared/_methode.png) <br/> MixUp(int pSwapCount) | Mélange aléatoirement les cellules en les permutant le nombre de fois spécifié. |
| ![méthode](../../_00-shared/_methode.png) <br/> Swap(int pIndex1, int pIndex2) | Échange les 2 cellules aux index spécifiés. |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomAddress() | Génère aléatoirement une adresse. |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomDirection() | Génère aléatoirement une direction. |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomDirection(enuDirection  pCurrentDirection) | Génère aléatoirement une direction différente de celle spécifiée. |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomIndex() | Génère aléatoirement un nombre entier entre 0 et le nombre de colonnes -1 de la grille. |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomValue() | Génère aléatoirement un nombre entier entre les limites minimale et maximale de la grille. |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomValue(int pMin, in pMax) | Génère aléatoirement un nombre entier entre le minimum et le maximum spécifiés. |

| Événement | Description |
| :-------: | ----------- |
| ![evenement](../../_00-shared/_evenement.png) <br/> SelectedIndexChanged | Se produit lorsque la valeur de la propriété SelectedIndex est modifiée. |

Exemple : Ayant une grille d'entiers viaNombres à 4 rangées et 7 colonnes, on veut remplir la grille de nombres généré au hasard.

![visual int array](_04-visual-int-array/visual-int-array.png)

```cs
for (int rangée = 0; rangée < viaNombres.RowCount; rangée++)
{
    for (int colonne = 0; colonne < viaNombres.ColumnCount; colonne++)
    {
        viaNombres[rangée , colonne] = viaNombres.RandomValue();
    }
}
```
