```cs
// Le switch est équivalent à la structure if imbriqué.

decimal cout =0;

if( choixGrandeur == "Très Petit" || choixGrandeur == "Petit" )
    cout += 1.75;
else if ( choixGrandeur == "Moyen" )
    cout += 2.25;
else if ( choixGrandeur == "Grand" )
    cout += 3.75;
else
    cout += 4.50;
```
