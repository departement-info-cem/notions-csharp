```cs
string uneChaine = "Bonne journée!";
int  cptLettresN = 0;

for (int index = 0; index < uneChaine.Length - 1; index++)
{
   if (uneChaine[index] == 'n')
         cptLettresN++; 
}
Console.WriteLine("Nombre de n : " + cptLettresN);
```
