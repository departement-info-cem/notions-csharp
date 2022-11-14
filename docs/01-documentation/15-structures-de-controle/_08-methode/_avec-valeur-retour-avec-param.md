```cs
private int NbDigits(int pNombre)
{
    int cptDigits = 0;

    while (pNombre > 0)
    {
       pNombre = pNombre / 10;
       cptDigits++;
    }
    return cptDigits;
}
```
