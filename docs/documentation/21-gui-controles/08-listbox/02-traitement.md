---
sidebar_position: 2
---

# Traitement

## Parcourir une des collections de la zone de liste

```cs
// Zone de liste lstExemple
 
// Parcourir TOUS les ITEMS.
foreach ( string  itemCourant in lstExemple.Items )
{
 . . .
}

// Parcourir les items SÉLECTIONNÉS.
foreach ( string  itemCourant in lstExemple.SelectedItems )
{
 . . .
}

// Parcourir les INDEX (indices) des items SÉLECTIONNÉS.
foreach ( int  indexCourant in lstExemple.SelectedIndices)
{
 . . .
}
```

## Supprimer les items sélectionnés.

```cs
for (int cptItems = lstExemple.SelectedItems.Count - 1; cptItems >= 0; cptItems --)
{
    lstExemple.Items.RemoveAt(lstExemple.SelectedIndex);
}

// 2e solution : tant qu'il y a des items sélectionnés, supprimer le premier sélectionné
//--------------------------------------------------------------------------------
// while( lstExemple.SelectedIndex != -1 )
// {
//    lstExemple.Items.RemoveAt(lstExemple.SelectedIndex);
// }
```

## Copier les items sélectionnés d'une zone de liste vers une autre liste.

```cs

lstUneAutreListe.Items.Clear();

foreach (string itemCourant in lstUneListe.SelectedItems )
{
   lstUneAutreListe.Items.Add(itemCourant);
}
```

## Afficher les index des items sélectionnés.

```cs
string tousLesIndexSelectionnés = "";

foreach (int indexCourant in lstExemple.SelectedIndices)
{
    tousLesIndexSelectionnés += indexCourant + "\n";
} 
Console.WriteLine(tousLesIndexSelectionnés)
```
