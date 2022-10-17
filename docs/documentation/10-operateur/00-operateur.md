---
slug: ./
---

# Opérateur

```mdx-code-block
import DocCardList from '@theme/DocCardList';
```

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


| **Catégorie** | **Opérateur** | `int nombre1 = 10;` <br/> `int nombre2 = 3;` | **Résultats** |
| ------------- | ------------- |  -------------------------------- | ------------- |
| Arithmétique <br/> - multiplicative | * : Multiplication <br/> / : Division <br/> % : Modulo : (reste de la division ) | `nombre1  * nombre2` <br/> `nombre1  / nombre2` <br/> `nombre1  % nombre2` | `30` <br/> `3` <br/> `1` |
| Arithmétique <br/> - additive | + : Addition <br/> + : Concaténation de chaîne <br/> - : Soustraction | `nombre1  + nombre2` <br/> `"cours" + " 116"` <br/> `nombre1  - nombre2` | `13` <br/> `"cours 116"` <br/> `7` |
| Relationnel | < : Plus petit <br/> > : Plus grand <br/> <= : Plus petit ou égal <br/> >= : Plus grand ou égal | `nombre1  > nombre2` <br/> `nombre1  < nombre2` <br/> `nombre1 <= 10` <br/> `nombre2 >= 2` | `true` <br/> `false` <br/> `true` <br/> `true` |
| Égalité | == : Égal <br/> != : Non égal (différent) | `nombre1  == nombre2` <br/> `nombre1  != nombre2` | `false` <br/> `true` |
| Assignation | = : Place une valeur dans une variable  ou <br/> dans une propriété | `nombre1  = (nombre1  + nombre2)*2` |  `nombre1` contient `26` |
| Logique | && : Et <br/> \|\| : Ou | `nombre1  >= 2 && nombre2 != 4` <br/> <code>nombre1  == 5 \|\| nombre2 >= 3</code> | `true` <br/> `true` |
| Unaire | - : Moins <br/> ++ : Incrément <br/> -- : Décrément <br/> ! : Non logique | ` - nombre1` <br/> `nombre1++` <br/> `nombre2--` <br/> `!(nombre1  > nombre2)` | `-10` <br/> `11` <br/> `2` <br/> `false` |
| Primaire | . : Accès à un membre <br/> [ ] : Indexation <br/> `new` : Création d'objet | `numPrix.Value` `txtNom.Text` <br/> `tabNombres[2]` <br/> `new Random()` | |

<DocCardList />
