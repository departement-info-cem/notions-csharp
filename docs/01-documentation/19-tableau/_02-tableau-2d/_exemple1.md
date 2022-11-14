```cs
// 4 étudiants et 8 Tps chacun ( 4 rangées X 8 colonnes )
int [ , ] tabNotes =  {
    { 75, 80, 56, 89, 71, 78, 56, 90  },
    { 98, 84, 85, 78, 90, 78, 86, 100 },
    { 65, 88, 76, 56, 89, 85, 66, 63  },
    { 87, 55, 99, 45, 82, 80, 79, 100 }
};
Console.WriteLine(tabNotes.Length);
Console.WriteLine(tabNotes.GetLength(0));
Console.WriteLine(tabNotes.GetLength(1));
Console.WriteLine(tabNotes.Rank);

Console.WriteLine(tabNotes[ 0, 4 ]);
Console.WriteLine(tabNotes[ 2, 7 ]);
```
