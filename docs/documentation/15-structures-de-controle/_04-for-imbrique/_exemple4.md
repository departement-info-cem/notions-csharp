```cs
for (int cptGroupes = 1; cptGroupes <= 3; cptGroupes ++)
{
   Console.WriteLine("Groupe : " + cptGroupes);

   for (int cptLignes = 1; cptLignes <= 4; cptLignes ++)
   {
        for (int cptColonnes = 1; cptColonnes <= 4; cptColonnes ++)
        {
            Console.Write("L" + cptLignes +  "C" + cptColonnes + ": ");  
        }
        Console.WriteLine();
   }
   Console.WriteLine("- - - - - - - - - - - - - - ");
}
```
