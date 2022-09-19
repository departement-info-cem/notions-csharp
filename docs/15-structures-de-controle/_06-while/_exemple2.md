```cs
StreamReader objVentesALire =  new StreamReader("ventes.txt");

while ( !objVentesALire.EndOfStream ) //Tant que ce n’est pas la fin du fichier.
{
    string ligneLue = objVentesALire.ReadLine();            
    . . .
    . . .
}
objVentesALire.Close();
```
