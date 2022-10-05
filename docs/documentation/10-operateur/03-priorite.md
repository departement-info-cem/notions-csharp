---
sidebar_position: 3
---

# Priorité

Lorsqu'une [Expression](https://sites.google.com/site/notionscsharpcem/expression) comporte plusieurs opérateurs, les règles de priorité des opérateurs détermine l'ordre des opérations à effectuer.
Lorsqu'un expression est évaluée, plusieurs balayages de gauche à droite sont effectuées selon la priorité des opérateurs. Cependant, des parenthèses permettent d'outrepasser ces règles de priorité.

Voici un exemple simple de calcul illustrant l'importance des parenthèses dans une expression.

```cs
int note1 = 60, note2 = 80;
int moyenneErronée  = note 1 + note2 / 2;     // 1er balayage : la division est effectuée
                                              // 2e balayage  : l'addition est effectuée
                                              // 3e balayage  : l'assignation et moyenneErronée = 100

int moyenneCorrecte = (note 1 + note2) / 2;   // 1er balayage : l'addition dans les parenthèses
                                              // 2e balayage  : la division
                                              // 3e balayage  : l'assignation et moyenneCorrecte = 70
```

## Règles d’évaluation des opérateurs

L’ordre d’évaluation des expressions est effectué selon les parenthèses et les opérateurs.

1. Les parenthèses 
    - Les expressions entre parenthèses sont évaluées en premier
    - Les parenthèses imbriquées sont évaluées de l’intérieur vers l’extérieur
2. La  priorité des opérateurs
    - Les opérateurs sont évalués selon la priorité
    - Les opérateurs de même priorité sont évalués de gauche à droite
    - Les opérateurs logiques && ou ||, la seconde opérande est évaluée seulement si nécessaire
        - Pour le `&&`, si la première opérande est fausse, l'évaluation de la condition se termine
        - Pour le `||`, si la première opérande est vraie, l'évaluation de la condition se termine

Le tableau ci-dessous contient les opérateurs susceptibles d’être utilisés dans le cours.
Pour plus d'informations, consultez la [liste complète de la priorité des opérateurs](http://msdn.microsoft.com/fr-fr/library/ms173145%28v=vs.120%29.aspxaspx).

| Priorité | Catégorie | Les opérateurs |
| :------: | --------- | -------------- |
| 1 <br/> (plus haute) | Unaire | `!` : (non logique), `nombre++`, `nombre--`, `-nombre` |
| 2 |Arithmétique-multiplicative | `*`, `/`, `%` : (modulo) |
| 3 | Arithmétique-additive | `+`, `-` : somme et différence pour les types numériques <br/> `+` : concaténation lorsqu'un ou 2 opérandes sont de type string |
| 4 | Relationnel | `<`, `>`, `<=`, `>=` |
| 5 | Égalité | `==`, `!=` |
| 6 | Logique | `&&` (ET) le ET est prioritaire au OU <br/> \|\| (OU) |
| 7 | Assignation | `=`, `+=`, `-=`, `*=`, `/=`, `%=` |
