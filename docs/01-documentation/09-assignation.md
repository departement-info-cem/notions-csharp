---
sidebar_position: 9
---

# Assignation

**L'assignation** ou l'**affectation** est le mécanisme qui place une valeur dans un emplacement mémoire.

Une fois la variable déclarée,  l'instruction d'assignation stocke une valeur à l'emplacement mémoire de la variable.
L'expression à droite du signe = est évaluée et le résultat est placé dans la variable à gauche du signe =é

L'instruction d'assignation peut être codée selon une des formes suivantes :

- variable = littéral;
- variable = expression mathématique;
- variable = expression booléenne;
- variable = variable;

```cs
// déclaration de variables
int   cptFruits = 0;
int   nbPersonnes = 8;                     
string chaine = "";
int nombre1 = 5;
int nombre2 = 0;

// assignation avec un littéral
 bool   estValide = true;

// assignation avec une expression mathématique
cptFruits = (nbPersonnes + 4) / 2;    // la valeur 6 est assignée à la variable cptFruits

// assignation avec une expression booléenne
 estValide = nombre1 >= 0 && nombre1 < 10; // la valeur true est assignée à la variable estValide

// assignation d'une variable à une autre variable
nombre2 = nombre1;
```

Les propriétés des contrôles sont utilisés comme des variables.

:::note remarque

Pour un contrôle de type VisualInt nommé vsiPoints,

    la propriété Value du contrôle reçoit la valeur 50
        vsiPoints.Value = 50;

    la propriété Value du contrôle est augmentée de 100
        vsiPoints.Value +=100;
            
    la propriété Value du contrôle vsiPoints reçoit la propriété Value du contrôle vsiNbEssais
        vsiPoints.Value = vsiNbEssais.Value;

:::
