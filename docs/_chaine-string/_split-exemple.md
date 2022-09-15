```cs
string uneChaine = "Rosalie:Clara:Jeanne:Louise";
string[] tabNoms = uneChaine.Split(':');
for (int index = 0; index < tabNoms.Length; index++)
{
   Console.WriteLine(tabNoms[index]);
}
```
