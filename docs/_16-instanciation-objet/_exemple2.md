```cs
DisqueCompact objDisque = new DisqueCompact(SorteDeDisque.Test3);

for (int index = 0; index < objDisque.Pistes.Count; index++)
{
    int dureePiste = objDisque.Pistes[index];
    Console.WriteLine("Piste " + (index + 1) + "-" + DisqueCompact.FormatMMSS(dureePiste));
}
```
