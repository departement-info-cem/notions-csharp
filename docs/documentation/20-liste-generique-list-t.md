---
sidebar_position: 20
---

# Liste générique

import Add from './_20-liste-generique-list-t/_add.md';
import Clear from './_20-liste-generique-list-t/_clear.md';
import Contains from './_20-liste-generique-list-t/_contains.md';
import CopyTo from './_20-liste-generique-list-t/_copyto.md';
import IndexOf from './_20-liste-generique-list-t/_indexof.md';
import Insert from './_20-liste-generique-list-t/_insert.md';
import LastIndexOf from './_20-liste-generique-list-t/_lastindexof.md';
import Remove from './_20-liste-generique-list-t/_remove.md';
import RemoveAt from './_20-liste-generique-list-t/_removeat.md';
import Sort from './_20-liste-generique-list-t/_sort.md';

Une liste générique List &ltT&gt est une liste dynamique fortement typée d'objets accessibles par un index. Elle fournit des méthodes de recherche, de tri et de manipulation de listes. La taille de la liste augmente dynamiquement selon les besoins.

## Déclaration de liste générique

```cs
List<type> nomCollection = new List<type>();
```

| Constructeur | Description |
| :----------: | ----------- |
| ![méthode](../_00-shared/_methode.png) List&lt&gt() | Initialise une nouvelle instance de la classe List&ltT&gt qui est vide et a la capacité initiale par défaut. |
| ![méthode](../_00-shared/_methode.png) List&lt&gt(Int32) | Initialise une nouvelle instance de la classe List&ltT&gt qui est vide et a la capacité initiale spécifiée. |

| Propriété | Type <br/> de <br/> retour | Description |
| :-------: | :------------------------: | ----------- |
| ![propriété](../_00-shared/_propriete.png) Capacity | `int` | Obtient ou définit le nombre total des éléments que la structure de données interne peut contenir sans redimensionnement. |
| ![propriété](../_00-shared/_propriete.png) Count | `int` | Obtient le nombre total des éléments réellement contenus dans List&ltT&gt. |
| ![propriété](../_00-shared/_propriete.png) Item | | Obtient ou définit l'élément situé à l'index spécifié. `int premierNombre = colNombres[0];` |

Voici quelques méthodes. Consulter la [liste complète](http://msdn.microsoft.com/fr-fr/library/6sh2ey19%28v=VS.95%29.aspx) sur MSDN.

| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../_00-shared/_methode.png) Add | Ajoute un objet à la fin de la liste. <Add/> |
| ![méthode](../_00-shared/_methode.png) Clear | Supprime tous les éléments de la liste. <Clear/> |
| ![méthode](../_00-shared/_methode.png) Contains | Détermine si un élément est dans la liste. <Contains/> |
| ![méthode](../_00-shared/_methode.png) IndexOf | Recherche l'élément spécifié et retourne l'index base 0 de la 1ère occurrence de l'élément. <IndexOf/> |
| ![méthode](../_00-shared/_methode.png) Insert | Insère l'élément spécifié dans la liste à l'index spécifié. <Insert/>
| ![méthode](../_00-shared/_methode.png) LastIndexOf | Recherche l'élément spécifié et retourne l'index base 0 de la dernière occurrence de l'élément. <IndexOf/> |
| ![méthode](../_00-shared/_methode.png) Remove | Supprime la première occurence d'un objet spécifique de la liste. <Remove/>
| ![méthode](../_00-shared/_methode.png) RemoveAt | Supprime l'élément à l'index spécifié. <RemoveAt/> |
| ![méthode](../_00-shared/_methode.png) Sort | Trie les éléments. <Sort/> |
| ![méthode](../_00-shared/_methode.png) CopyTo | Copie les éléments de la liste vers un tableau. <CopyTo/> |
