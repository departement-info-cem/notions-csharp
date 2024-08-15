---
sidebar_position: 3
---

# VisualCharArray

Un contrôle de type VisualCharArray est une **grille** dont chaque cellule est un caractère.

Pour les propriétés, les méthodes et le struct communs aux différents types de "VisualArrays", voir [BaseGrid](https://info.cegepmontpetit.ca/notions-csharp/visual-arrays/base-grid)

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriete](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe: `vca` Exemple: `vcaLettres` |
| ![propriete](../../_00-shared/_propriete.png) <br/> DefaultValue | `char` | Obtient ou définit la valeur par défaut des cellules. La valeur par défaut est ' '. |
| ![propriete](../../_00-shared/_propriete.png) <br/> SelectedValue | `char` | Obtient la valeur de la cellule sélectionnée. |
| ![propriete](../../_00-shared/_propriete.png) <br/> SpecialValue | `char` | Obtient ou définit la valeur spéciale à afficher différemment des autres valeurs. |
| ![propriete](../../_00-shared/_propriete.png) <br/> SpecialValueAppearance | | Détermine différents aspects de l'apparence de la valeur spéciale de la grille. |
| ![propriete](../../_00-shared/_propriete.png) <br/> View | | Obtient ou définit le style de visualisation pour les valeurs contenues dans les cellules : <br/> - Char : affiche le caractère <br/> - Code : affiche le code Unicode qui est un nombre entier. |

| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../../_00-shared/_methode.png) <br/> MixUp() | Mélange aléatoirement les cellules en les permutant plusieurs fois, soit le nombre de cellules * 2. |
| ![méthode](../../_00-shared/_methode.png) <br/> MixUp(int pSwapCount) | Mélange aléatoirement les cellules en les permutant le nombre de fois spécifié en paramètre. |
| ![méthode](../../_00-shared/_methode.png) <br/> Swap(int pIndex1, int pIndex2) | Échange les 2 cellules dont les index sont spécifiés. |

## Exemples

Ayant une grille de caractères vcaLettres à une rangée et 10 colonnes.

### Exemple 1 : annuler la sélection d'une cellule

```cs
// Si la propriété SelectedIndex est -1, il n'y a aucune cellule sélectionnée.
vcaLettres.SelectedIndex = -1;
```

### Exemple 2 : placer les  caractères A, B, C, etc.  dans les cellules

```cs
char caractere = 'A';
for (int index = 0; index < vcaLettres.Length; index++)
{
    vcaLettres[index] = caractere;
    caractere++; // Passer au caractère suivant.
}
```


### Exemple 3 : copier le caractère sélectionné dans toutes les autres cellules

```cs
 // Condition de garde : une cellule doit être sélectionnée.
if (vcaLettres.SelectedIndex == -1)
{
    return;
}

char caractereSelectionne = vcaLettres.SelectedValue;
for (int index = 0; index < vcaLettres.Length; index++)
{
    vcaLettres[index] = caractereSelectionne;
}
```
