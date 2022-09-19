```cs
string laChaine = "Bonne journée";

int cptDeN = 0;
foreach (char caractereCourant in laChaine )
{
   if( caractereCourant == 'n')
   {
      cptDeN ++;
   }
}
Console.WriteLine("Nombre de n : " + cptDeN);
```
