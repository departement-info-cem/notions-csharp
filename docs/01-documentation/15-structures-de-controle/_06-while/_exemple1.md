```cs
int unNombre = 782345;
int unChiffre = 0;

while (unNombre > 0)
{
    unChiffre = unNombre % 10;
    unNombre = unNombre / 10;
    Console.WriteLine(unChiffre);
}
```
