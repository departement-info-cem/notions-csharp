```cs
DisqueCompact objNouveauDisque = new DisqueCompact(SorteDeDisque.Normal);

foreach (int dureePisteCourante in objNouveauDisque.Pistes)
{
    Console.WriteLine(DisqueCompact.FormatMMSS(dureePisteCourante));
}
```
