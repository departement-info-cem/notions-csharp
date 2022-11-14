```cs
int[] tabNombres = new int [10];

// --- Remplir les cases aux index pairs avec des nombres pairs.
for (int index = 0; index < tabNombres.Length; index +=2)
{
  tabNombres[index] = index;
}

tabNombres[3] = 17;

// --- Afficher les cases du tableau.
for (int index = 0; index < tabNombres.Length; index ++)
{
  Console.WriteLine(index + ": " + tabNombres[index]);
}
```
