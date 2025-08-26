---
sidebar_position: 8
---

# Constante

Une constante est une valeur immuable qui est connue au moment de la compilation et qui ne change pas pendant l'exécution du programme.

Lorsque le compilateur rencontre une constante dans du code source C# (par exemple, MAX_ETUDIANTS), il substitue la valeur littérale dans le code qu'il produit.

Une constante permet d'associer un nom convivial à une valeur fréquemment utilisée dans le code et de centraliser une valeur de manière à la modifier une seule fois si un changement se produit.

## Déclaration de constante

La déclaration d'une constante ressemble à celle d'une variable: c'est-à-dire un ***nom*** appelé ***identificateur*** et un [type de données](https://sites.google.com/site/notionscsharpcem/type).

Cependant, elle est précédée du mot-clé `const`.

### Exemples

```cs
// Déclaration de constantes
const   string   MESSAGE_DEPART = "Bienvenue dans le cours.";
const   decimal  TAUX_TPS = 0.07m;
const   int      MAX_ETUDIANTS = 50;
const   char     CODE_ARRET = 'Z';

// Utilisation de constantes
 Console.WriteLine( MESSAGE_DEPART );

 if (nombreEtudiant < MAX_ETUDIANTS) ...

```

## Standards d’écriture pour un identificateur de constante

- Choix de nom significatif
  - Exemples : TAUX_TAXE, MAX_TEMPERATURE
- Toutes les lettres sont en majuscules et les mots sont séparés par le symbole souligné  _   (souligné - underscore ).
