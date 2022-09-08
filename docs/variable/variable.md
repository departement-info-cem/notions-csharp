---
sidebar_position: 1
---

# Variable

```mdx-code-block
import DocCardList from '@theme/DocCardList';
```

Une variable est un emplacement mémoire (une adresse) qui contient une valeur qui peut changer pendant l'exécution d'un programme. Une variable est associé à un type de données.

## Déclaration de variable

Une variable est déclarée en spécifiant un [type de données](https://sites.google.com/site/notionscsharpcem/type) et un [identificateur](https://sites.google.com/site/notionscsharpcem/identificateur).
Il est possible d'initialiser (assigner) une valeur à une variable lors de sa déclaration.

### Exemples

```cs
// Déclaration sans initialisation
double   celcius, fahrenheit;
char     codeCategorie;
string   messageErreur;

// Déclaration et initialisation
int      cptColonnes = 0;
double   noteExamen = 90.5;
char     uneLettre  = 'A';
decimal  montantDeBase = 50.0m;
```

Pour les standards d'écriture pour les variables, voir la page [Identificateur](https://sites.google.com/site/notionscsharpcem/identificateur).

<DocCardList />
