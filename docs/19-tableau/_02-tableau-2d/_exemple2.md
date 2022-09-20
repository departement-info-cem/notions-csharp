```cs
decimal[ , ] tabVentes = new decimal [4, 6]; //4 rangées et 6 colonnes

//---- Remplir le tableau des ventes --------------------------------
for (int rangee= 0; rangee < tabVentes.GetLength(0); rangee ++)
{
   for (int colonne = 0; colonne < tabVentes.GetLength(1); colonne++)
   {
       tabVentes[rangee, colonne] = (colonne + 1) * (rangee + 1 ) * 10;
       Console.Write(tabVentes[rangee, colonne] + ":");
   }
   Console.WriteLine();
}
//--- Calculer la moyenne des ventes -------------------------------
decimal accVentes = 0;
foreach (decimal uneVente in tabVentes)
{
   accVentes += uneVente;
}
decimal moyenne = accVentes / tabVentes.Length;
Console.WriteLine("moyenne = " + moyenne);
```
