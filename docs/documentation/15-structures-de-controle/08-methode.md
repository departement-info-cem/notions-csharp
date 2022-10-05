---
sidebar_position: 8
---

# Méthode

import SansValeurRetourSansParam from './_08-methode/_sans-valeur-retour-sans-param.md';
import SansValeurRetourSansParamAppel from './_08-methode/_sans-valeur-retour-sans-param-appel.md';
import SansValeurRetourAvecParam from './_08-methode/_sans-valeur-retour-avec-param.md';
import SansValeurRetourAvecParamAppel from './_08-methode/_sans-valeur-retour-avec-param-appel.md';
import AvecValeurRetourAvecParam from './_08-methode/_avec-valeur-retour-avec-param.md';
import AvecValeurRetourAvecParamAppel from './_08-methode/_avec-valeur-retour-avec-param-appel.md';


Une méthode est un groupe d’instructions qui porte un nom et que l’on peut appeler à plusieurs endroits.

Lors de l'appel d'une méthode, le contrôle de l'exécution est transféré vers le code de cette méthode.

Une fois les instructions de la méthode exécutées, le contrôle revient à l'instruction qui suit l'appel de la méthode.

Il existe des méthodes fournies dans le framework .Net telles Close(), Clear(),  Substring(2, 5), etc.

Lorsqu'un programmeur veut créer des méthodes, il **déclare** la méthode et peut ensuite l'**appeler**.

## Sortes de méthode

Il y a différentes sortes de méthode :

- SANS valeur de retour SANS paramètres
- SANS valeur de retour et AVEC paramètres
- AVEC valeur de retour SANS paramètres         
- AVEC valeur de retour et AVEC paramètres

## Standard pour les noms de méthodes

Une méthode SANS valeur de retour est nommée avec un **verbe d’action** à **l’infinitif** suivi d’un nom qualifiant l’action du verbe.

Une méthode AVEC valeur de retour est nommée par un nom qui décrit la valeur retournée.

## Signature d'une méthode

La signature de la méthode décrit une méthode et ses paramètres.

Exemple : `private void AfficherSequenceNombres(int pNombreDebut)`

| Partie de la méthode | Description |
| -------------------- | ----------- |
| `private` | accessibilité |
| `void` ou `type` | `void` si la méthode ne retourne pas de valeur <br/> `type` de données si la méthode retourne une valeur |
| `nom` | selon les standards |
| `paramètres` | données fournies à la méthode pour lui indiquer comment accomplir son travail entre parenthèses pour chaque paramètre : son type de données et son nom qui débute par p |

## Déclaration d'une méthode

Syntaxe :

```cs
///
///  commentaires XML
///
accès void ou type de données nom de la méthode suivi des paramètres entre parenthèses)
{
    bloc d'instructions;
}
```

- La déclaration d'une méthode est placée avant ou après un gestionnaire d'événement.
- L'appel se trouve à l'intérieur d'un gestionnaire d'événement ou à l'intérieur d'une autre méthode.
- Les commentaires XML sont générés en plaçant le curseur sur la ligne en haut de l'accès de la méthode
et en tapant ///.


## Méthode SANS valeur de retour et SANS paramètre

Une méthode sans valeur de retour et sans paramètre contient les instructions à exécuter.

| Déclaration de méthode | Appel de méthode | Résultats |
| ---------------------- | ---------------- | --------- |
| <SansValeurRetourSansParam/> | <SansValeurRetourSansParamAppel/> | A:B:C:D:E: <br/> A:B:C:D:E: <br/> |

## Méthode SANS valeur de retour et AVEC paramètre(s)

Une méthode sans valeur de retour et avec paramètre(s) contient des informations pour
indiquer COMMENT elle doit accomplir ce qu'elle doit faire.

Lors de la déclaration : 

- Les paramètres sont appelés les ***paramètres formels***.
- Pour chaque paramètre, il faut préciser un type de données et un nom.
- ***Standard*** : le préfixe `p` est placé au début de l'identificateur.

Lors de l'appel de la méthode :

- Les paramètres sont appelés les ***paramètres effectifs***.
- Il doivent correspondre en ordre, en nombre et en type de données aux paramètres formels.

| Déclaration de méthode | Appels de méthode | Résultats |
| ---------------------- | ----------------- | --------- |
| <SansValeurRetourAvecParam/> | <SansValeurRetourAvecParamAppel/> | A:B:C:D:E: <br/> C:D:E:F: <br/> B:C:D:E:F:G:H: |

## Méthode AVEC valeur de retour et AVEC paramètre (s)

Une méthode peut retourner une valeur.

Lors de la déclaration :

- Le **type de donnés** de la valeur retournée remplace le mot réservé `void`.
- La méthode doit contenir **obligatoirement** une instruction `return` suivie de la valeur à retourner.
- La valeur retournée doit être de même type que le type défini dans la déclaration. Cependant, les conversions implicites et explicites sont possibles.

| Déclaration de méthode | Appels de méthode | Résultats |
| ---------------------- | ----------------- | --------- |
| <AvecValeurRetourAvecParam/> | <AvecValeurRetourAvecParamAppel/> | 5 <br/> <br/> 0 <br/> <br/> 3 |

## Surcharge de méthodes

Lorsque des méthodes portent le même nom mais sont déclarées avec des paramètres différents soit en nombre et/ou en type de données, il y a surchage de méthodes.

Exemple : 2 surchages pour la méthode **AfficherLigne**.

- `private void AfficherLigne()`
- `private void AfficherLigne(char pLettreDebut, int pCptFois)`
