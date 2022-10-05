# ListBox

import Items from './_00-listbox/_items.md';
import ItemsCount from './_00-listbox/_items-count.md';
import SelectionMode from './_00-listbox/_selection-mode.md';
import SelectedIndex1 from './_00-listbox/_selected-index-1.md';
import SelectedIndex2 from './_00-listbox/_selected-index-2.md';
import SelectedIndex3 from './_00-listbox/_selected-index-3.md';
import SelectedItem from './_00-listbox/_selected-item.md';
import Sorted from './_00-listbox/_sorted.md';
import Text from './_00-listbox/_text.md';
import SetSelected from './_00-listbox/_set-selected.md';
import ItemsAdd from './_00-listbox/_items-add.md';
import ItemsClear from './_00-listbox/_items-clear.md';
import ItemsContains from './_00-listbox/_items-contains.md';
import ItemsInsert from './_00-listbox/_items-insert.md';
import ItemsRemove from './_00-listbox/_items-remove.md';
import ItemsRemoveAt from './_00-listbox/_items-remove-at.md';

```mdx-code-block
import DocCardList from '@theme/DocCardList';
```

Un contrôle ListBox offre une liste de choix parmi laquelle il est possible de sélectionner un ou plusieurs choix. Il gère automatiquement l'affichage avec ou sans barre de défilement. Les éléments affichés dans la liste peuvent être saisis au moment de la conception dans la fenêtre des propriétés ou modifiés par programmation. Les éléments de la liste sont gérés sous forme de collection via la propriété Items et sont généralement des chaînes de caractères. Le premier élément de la liste est à l'index 0.

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé pour identifier l’objet. Préfixe : `lst` Exemple : `lstExemple` |
| ![propriété](../../_00-shared/_propriete.png) <br/> Enabled | `bool` | Obtient ou définit une valeur indiquant si le contrôle est activé ou non. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Visible | `bool` | Obtient ou définit une valeur indiquant si le contrôle est visible ou masqué. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Anchor | | Définit les bords du conteneur auquel le contrôle est lié. Lorsqu'un contrôle est ancré à un bord, la distance entre le bord le plus proche du contrôle et le bord spécifié reste constante. Pour ancrer une liste, il faut définir les 3 propriétés suivantes : <br/> - FormBorderStyle : Sizable <br/> MaximumSize : la hauteur et la largeur maximales <br/> MinimumSize : la hauteur et la largeur minimales |
| ![propriété](../../_00-shared/_propriete.png) <br/> ScrollAlwaysVisible | `bool` | Par défaut, les barres de défilement sont visibles seulement si c'est nécessaire. |
| ![propriété](../../_00-shared/_propriete.png) <br/> Items | `Collection` | Contient les éléments de la zone de liste. Les items de la liste sont des objets. Pour obtenir une variable de type chaine, il faut convertir l'objet. <Items/> Pour plus d'informations, consultez [les collections associées à une zone de liste](https://sites.google.com/site/notionscsharpcem/guicontroles/listbox/collectionslistbox). |
| ![propriété](../../_00-shared/_propriete.png) <br/> Items.Count | `int` | Indique le nombre d'éléments de la collection Items. <ItemsCount/> La variable nombreItems contient 0, s'il n'y a pas d'items dans la collection. |
| ![propriété](../../_00-shared/_propriete.png) <br/> SelectionMode | | Indique le mode de sélection des éléments de la liste. <br/> - None : aucune sélection possible <br/> - `One`   : un seul item peut être sélectionné ou désélectionné par un clic de souris <br/> - `MultiSimple` (ctrl ) et `MultiExtended` (shift, ctrl) : plusieurs items peuvent être sélectionnés. <br/> L'énumération SelectionMode offre les choix de mode de sélection. <SelectionMode/> 
| ![propriété](../../_00-shared/_propriete.png) <br/> SelectedIndex | `int` | Obtient ou définit l'index de l'item sélectionné dans la liste. <br/> - Pour obtenir l'index de l'élément sélectionné : <SelectedIndex1/> Si aucun élément n'est sélectionné, alors indexSélectionné est égal à -1. <br/> - Pour sélectionner le 5e item de la liste : <SelectedIndex2/> Pour dé-sélectionner les items sélectionnés : <SelectedIndex3/> |
| ![propriété](../../_00-shared/_propriete.png) <br/> SelectedItem | | Obtient ou définit la référence vers l'objet sélectionné dans la liste. <SelectedItem/> |
| ![propriété](../../_00-shared/_propriete.png) <br/> Sorted | `bool` | Obtient ou définit la valeur indiquant si les éléments dans la liste sont en ordre alphabétique. <Sorted/> |
| ![propriété](../../_00-shared/_propriete.png) <br/> Text | `string` | Obtient la chaîne de caractères de l'item sélectionné. <Text/>

| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../../_00-shared/_methode.png) <br/> SetSelected(int index, bool value) | Sélectionne ou efface la sélection pour l'item dont l'index est spécifié. <SetSelected/> |
| ![méthode](../../_00-shared/_methode.png) <br/> Items.Add(object item) | Ajoute des éléments à la collection Items.  Ils sont ajoutés à la fin de la liste sauf si la propriété Sorted est à true. <ItemsAdd/> |
| ![méthode](../../_00-shared/_methode.png) <br/> Items.Clear() | Supprime les éléments de la collection Items. Le nombre d'éléments (propriété Count) devient 0. <ItemsClear/> |
| ![méthode](../../_00-shared/_methode.png) <br/> bool Items.Contains(object value) | Détermine si l'élément spécifié réside dans la collection. Retourne true si l'élément est présent, sinon false.<ItemsContains/> |
| ![méthode](../../_00-shared/_methode.png) <br/> Items.Insert(int index, object item) | Insère un élément dans la liste à l'index spécifié. <ItemsInsert/> |
| ![méthode](../../_00-shared/_methode.png) <br/> Items.Remove(object value) | Supprime l'objet spécifié de la collection Items. <ItemsRemove/> |
| ![méthode](../../_00-shared/_methode.png) <br/> Items.RemoveAt(int index) | Supprime l'élément à l'index spécifié de la collection Items. <ItemsRemoveAt/> |

<DocCardList />
