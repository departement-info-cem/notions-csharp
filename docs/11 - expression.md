---
sidebar_position: 11
---

# Expression

Une **expression** est une séquence d'opérateurs et d'opérandes.

## Expression arithmétique

Une expression arithmétique est une séquence d'opérateurs arithmétiques, de variables ou de nombres qui a pour résultat une valeur numérique.

```cs
int pointsEquipe = 0;
int cptPartiesGagnées = 4 ;
int cptPartiesPerdues = 2;

pointsEquipe = (cptPartiesGagnées * 5) + (cptPartiesPerdues * 3);
// 26        = (      4           * 5) + (     2            * 3)
// L'évaluation de l'expression arithmétique est placée dans la variable pointsEquipe est 26.
```

## Expression booléenne

Une expression booléenne est une séquence d'opérateurs relationnels ou logiques, de variables et/ou de littéraux qui donne pour résultat une valeur booléenne `true` ou `false`. Elle est souvent utilisée dans les [structures de sélection](https://sites.google.com/site/notionscsharpcem/structure/if).

```cs
int  noteExamenIntra = 56;
int  noteExamenFinal = 74;
bool estAccepté = true;
//           ---------------  expression booléenne  --------------
estAccepté = ( noteExamenIntra >= 50 ) && ( noteExamenFinal >= 60 );
// true    =                   true    &&                  true
// L'évaluation de l'expression booléenne (true) est placée dans la variable estAccepté.
```
