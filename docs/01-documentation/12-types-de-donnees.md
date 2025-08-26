---
sidebar_position: 12
---

# Types de données

## Les types valeur

Les types de données par valeur contiennent :

- Les types numériques : intégraux, à virgule flottante et décimal
- Le type bool. 

Un suffixe est utilisé pour indiquer au compilateur le type d'une valeur numérique.

Les types valeur ne peuvent contenir la valeur `null`.

| Type | Suffixe | Signé? | Nombre <br/> bits | Nombre <br/> octets | Domaine des valeurs | Valeur par <br/> défaut |
| :--: | :-----: | :----: | :---------: | :-----------: | ------------------- | :---------------: |
| `byte` | | Non | 8 | 1 | entier de 0 à 255 | 0 |
| `short` | | Oui | 16 | 2 | entier de -32 768 à 32 767 | 0 |
| int | 0x <br/> en préfixe <br/> pour <br/> l'hexadécimal | Oui | 32 | 4 | entier de -2 147 483 648 à 2 147 483 647 <br/> - La plus grande valeur : int.MaxValue <br/> - La plus petite valeur : int.MinValue <br/> - Exemples : -1245 (0x12AB) | 0 |
| `long` | l ou L | Oui | 64 | 8 | entier de -9223372036854775808 à 9223372036854775807 <br/> Exemple : 3457845L | 0L |
| `float` | f ou F | Oui | 32 | 4 | virgule flottante <br/> Approximativement -3,4 × 1038à +3,4 × 1038 avec une précision de 7 chiffres significatifs <br/> Exemple : 456.34F | 0.0F |
 `double` | | Oui | 64 | 8 | virgule flottante <br/> Approximativement +-5.0 × 10−324 à +-1.7 × 10308 avec une précision de 15 ou 16 chiffres significatifs | 0.0 |
| `decimal` | m ou M | Oui | 128 | 16 | une plus grande précision et une plage de valeurs réduite comparativement aux types de virgule flottante <br/> Approprié pour les calculs financiers et monétaires <br/> Approximativement (-7.9 x 1028 à 7.9 x 1028) / (100 à 28) +=1.0 x 10-28 à +=7.9 x 1028 avec une précision de 28 or 29 chiffres significatifs <br/> Exemple : 2345.56m | 0.0M ou 0.0m |
| `char` | | N/A | 16 | 2 | caractère Unicode** (entre apostrophes ' ') <br/> Les constantes de type char peuvent être représentées sous la forme de littéraux de caractères 'X' '6' <br/> - D'une séquence d'échappement hexadécimal '\u0058' <br/> - ou de caractères Unicode '\u0058' <br/> Il est possible de convertir un code de caractère Unicode de type intégral en un caractère : <br/> - `char lettre = (char)88;` <br/> <b>Séquence d'échappement </b> <br/> Une séquence d'échappement est une combinaison de caractères composées d'une barre oblique inverse (\) suivie d'une lettre ou d'une combinaison de chiffres. Elles sont utilisés pour fournir une représentation des caractères non imprimables. <br/> Exemples : <br/> - '\n' saut à la prochaine ligne <br/> - '\t'  saut au prochain tabulateur <br/> Pour la liste des séquences d'échappement, consultez [http://msdn.microsoft.com/fr-fr/library/h21280bw.aspx](http://msdn.microsoft.com/fr-fr/library/h21280bw.aspx) | '\0' <br/> indicateur <br/> null <br/> non visible |
| `bool` | | N/A | 1 | | `true` ou `false` | `false` |

Pour plus d'informations, consultez [Types valeur (référence C#) de Microsoft](http://msdn.microsoft.com/fr-fr/library/s1ax56ch.aspx).

## Les types référence

Les types de données référence stockent des références aux données réelles. Seul le type **`string`** est couvert.
Le type **`string`** représente une séquence de zéros ou plusieurs caractères Unicode.
La valeur par défaut d'une chaîne de caractères est **`null`**.

Le type string représente une chaîne de caractères qui est écrite entre guillemets.  La casse (majuscule ou minuscule) est prise en compte.

- Exemple : **`"Notions C Sharp"`**

### Le codage Unicode

Les caractères peuvent être représentés à l'aide de différents modèles de caractères ou pages de codes.
- Le codage Unicode UTF-16 représente les caractères sous forme de séquences d'entiers 16 bits
- Le codage Unicode UTF-8 représente les mêmes caractères sous forme d’entiers de 8 bits.
Le *Common Language Runtime* utilise le codage Unicode UTF-16 (Unicode Transformation Format) pour représenter les caractères.
