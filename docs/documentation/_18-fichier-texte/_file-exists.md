```cs
if( ! File.Exists("nombres.txt"))
{
    Console.Writeline("Ce fichier n'existe pas!");
    return;  // Sortir : impossible de continuer le traitement.
}
```
