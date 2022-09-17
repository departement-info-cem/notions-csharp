```cs
// Le switch est équivalent un if imbriqué.

if( cote == 'A' )
{
   Console.WriteLine("Excellent!");
}
else if ( cote == 'B' )
{
   Console.WriteLine("C'est bien!");
}
else if ( cote == 'C' || cote == 'D' )
{
   Console.WriteLine("Passable...");
}
else if ( cote =='E' )
{
   Console.WriteLine("Échec!");
}
```
