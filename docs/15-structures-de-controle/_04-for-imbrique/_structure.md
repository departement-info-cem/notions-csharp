```cs
for (initialisation ; condition ; incrémentation ou décrémentation)
{
    instruction; //il n'y a pas toujours des instructions avant la boucle interne
    // highlight-start
    for (initialisation ; condition ; incrémentation ou décrémentation)
    {
        instruction;
    } // fin de la boucle interne
    // highlight-end
    instruction; //il n'y a pas toujours des instructions après la boucle interne

} // fin de la boucle externe
```
