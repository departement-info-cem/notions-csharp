```cs
decimal cout = 0;
string  choixGrandeur = "";
...
switch (choixGrandeur)
{
   case "Très Petit" :
   case "Petit" :
       cout += 1.75;
       break;
   case "Moyen"  :
       cout += 2.25;
       break;
   case "Grand"  :
       cout += 3.75;
       break;
   default :
       cout += 4.50;
       break;              
}//fin du switch
```
