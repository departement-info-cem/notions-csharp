# Opérateur

Un opérateur est un symbole représentant une opération à effectuer sur des données.

Plusieurs problèmes nécessitent des calculs mathématiques ou l'évaluation d'expressions booléennes.
Les ***opérateurs*** sont alors utilisés.

## Exemples

- Conversion de kilos en livres : ***l'opérateur arithmétique*** de multiplication

```cs
livres = kilos * 2.204;
```

- Augmentation d'un index  de 1 : l'opérateur unaire d'incrémentation

```cs
index++;
```

- Vérification si le prix d'un item est supérieur ou égal à 100 : ***opérateur relationnel***

```cs
if (prix >= 100)
```

Un opérateur peut :

- Mettre en relation des littéraux, des variables ou des méthodes
- Assigner une valeur ou une expression à une variable.

Voici les principaux opérateurs classés par catégorie qui seront utilisés dans le cours 116.
Pour plus d'informations, consultez la [liste complète des opérateurs en C#](http://msdn.microsoft.com/fr-fr/library/6a71f45d.aspx)


| **Catégorie** | **Opérateur** | - | `int nombre1 = 10, nombre2 = 3;` | **Résultats** |
| ------------- | ------------- | - | -------------------------------- | ------------- |
| Arithmétique - multiplicative | * Multiplication / Division % Modulo (reste de la division ) | `nombre1  * nombre2` `nombre1  / nombre2` `nombre1  % nombre2` | `30` `3` `1` |
| Arithmétique - additive          | +  Addition  +  Concaténation de chaîne- Soustraction        | `nombre1  + nombre2`  | `"cours" + " 116"`
`nombre1  - nombre2` | `13`
`"cours 116"` `7` |
| Relationnel | < Plus petit > Plus grand <= Plus petit ou égal >= Plus grand ou égal | `nombre1  > nombre2` `nombre1  < nombre2` `nombre1 <= 10` `nombre2 >= 2`  |  `true` `false` `true` `true` |
| Égalité | == Égal != Non égal (différent) | `nombre1  == nombre2` `nombre1  != nombre2` | `false` `true` |
| Assignation | = Place une valeur dans une variable  ou dans une propriété | `nombre1  = (nombre1  + nombre2)*2` |  `nombre1` contient `26` |
| Logique | && Et || Ou | `nombre1  >= 2 && nombre2 != 4` `nombre1  == 5 || nombre2 >= 3` | `true` `true` |
| Unaire | - Moins++ Incrément-- Décrément ! Non logique | `-nombre1` `nombre1++` `nombre2--` `!(nombre1  > nombre2)` |  `-10` `11` `2` `false` |
| Primaire | . Accès à un membre[ ] Indexation `new` Création d'objet | `numPrix.Value` `txtNom.TexttabNombres[2]` `new Random()` | |
 
