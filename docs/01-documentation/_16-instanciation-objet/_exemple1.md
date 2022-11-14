```cs
DisqueCompact objDisque = new DisqueCompact();

Console.WriteLine("Nombre de pistes: " + objDisque.Pistes.Count.ToString());
Console.WriteLine("Durée totale: " + objDisque.Duree.ToString() + "secondes");
Console.WriteLine("Durée (MM:SS): " + DisqueCompact.FormatMMSS(objDisque.Duree));
Console.WriteLine("Genre: " + objDisque.Genre.ToString());
```
