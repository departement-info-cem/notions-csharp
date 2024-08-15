---
sidebar_position: 5
---

# foreach

import Exemple1 from './_05-foreach/_exemple1.md';
import Exemple2 from './_05-foreach/_exemple2.md';
import Exemple3 from './_05-foreach/_exemple3.md';

L'instruction `foreach` est une structure de contrôle permettant de parcourir **automatiquement** une collection sans utiliser un compteur.
Le bloc d'instructions est exécuté pour chacun des items de la collection : du premier au dernier item.

Syntaxe :

```cs
foreach( type item in Collection)
{
    instructions;
}
```

- type : le type de l'élément contenu dans la collection
- item : identificateur de variable locale utilisé comme nom associé à l'item courant
- `in` : opérateur d'accès à chacun des items de la collection
- Collection : nom de la collection à parcourir
- instructions : les instructions contenues dans la boucle peuvent modifier le contenu d'un item de la collection, mais il **ne** faut **pas** ajouter et supprimer d'items.

| Exemple #1 : Compter le nombre de 'n' contenu dans une chaine. | Résultats |
| -------------------------------------------------------------- | --------- |
| <Exemple1/> | <br/> <br/> <br/> <br/> <br/> <br/> <br/> Nombre de n : 3 |

| Exemple #2 : Afficher les chaines contenues dans un tableau. | Résultats |
| -------------------------------------------------------------- | --------- |
| <Exemple2/> |  Bonjour <br/> Allo <br/> Bonsoir <br/> A demain |

| Exemple #3 : Afficher la durée de chacune des pistes d'un disque compact. | Résultats |
| -------------------------------------------------------------- | --------- |
| <Exemple3/> | 5:59 <br/> 5:01 <br/> 6:14 <br/> 7:52 <br/> 8:10 |

Pour d'autres exemples, consultez le [Traitement des collections d'une zone de liste (ListBox)](https://info.cegepmontpetit.ca/notions-csharp/documentation/gui-controles/listbox/traitement) et [l'utilisation de menus](https://info.cegepmontpetit.ca/notions-csharp/documentation/gui-controles/menu).
