```cs
// La personne doit être un enfant demoins de 12 ans OU un ainé âgé de 65 ans et plus.
int age;
do
{
  age = m_objRandom.Next(1, 100);  // générer un nombre au hasard entre 1 et 99 inclus.
 
} while ( age >= 12 && age < 65);  // tant que c'est vrai, exécuter les instructions dans la boucle.

```
