---
slug: ./
---

# Identificateur

Un **identificateur** sert à nommer des éléments du langage tels des variables, des constantes, des méthodes.

Des standards d'écriture pour les noms des identificateurs sont définis afin de faciliter la lecture du code et sa maintenance.

## Standards communs à tous les éléments

- Choix d'un nom significatif
- Premier caractère doit être une lettre ou un caractère _ (souligné - underscore)
- Caractère espace est interdit
- Casse (minuscule et majuscule) est prise en compte
    Exemple : **`Taux`** et  **`taux`** sont 2 identificateurs différents
- [Mots réservés](https://sites.google.com/site/notionscsharpcem/identificateur/mots-reserves) ne peuvent être utilisés.

## Variable

Première lettre en minuscule et première lettre des autres mots en majuscule
Exemples: `nomFamille`, `prixUnitaire`, `noteFinSession`, `cptParties`, `accPrix`

## Constante

Toutes les lettres en majuscules et les mots sont séparés par le symbole **`_`** (souligné - underscore)
Exemples: `TAUX_TAXE`, `MAX_TEMPERATURE`

## Méthode

- Première lettre de chaque mot en majuscule
- Méthode sans valeur de retour : un verbe à l'infinitif suivi d'un qualificatif
Exemples: `CalculerTotaux()`, `AfficherStatistiques()`
- Méthode avec une valeur de retour : un nom décrivant la valeur retournée
Exemples: `EstPrésent`, `NbAbsences`

## Contrôle graphique (GUI)

Première lettre du nom en minuscule et première lettre des autres mots en majuscule
préfixe selon les [préfixes standards](https://sites.google.com/site/notionscsharpcem/prefixesetstandards) du cours.
Exemples: `txtPrenom`, `numCoutTotal`, `lblPrenom`, `btnCalculer`
