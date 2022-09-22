---
sidebar_position: 1
---

# BaseGrid

import ColumnHeader from './_00-base-grid/_column-header.md';
import RowHeader from './_00-base-grid/_row-header.md';
import RandomAddress from './_00-base-grid/_random-address.md';
import CellMouseDown from './_00-base-grid/_cell-mouse-down.md';
import Address from './_00-base-grid/_address.md';
import AddressExemple1 from './_00-base-grid/_address-exemple-1.md';
import AddressExemple2 from './_00-base-grid/_address-exemple-2.md';
import AddressExemple3 from './_00-base-grid/_address-exemple-3.md';

Un contrôle de type BaseGrid est une **grille** composée de cellules sans contenu.
 
Chaque cellule de la grille peut être accédée par un index indiquant sa position au sein de l'ensemble. Pour accéder à une cellule de la grille, un index est utilisé pour une grille à une dimension tandis qu'un index rangée et un index colonne sont utilisés pour une grille à 2 dimensions.

| Propriété | Type | Description |
| :-------: | :--: | ---------- |
| ![propriete](../../_00-shared/_propriete.png) <br/> (Name) | | Indique le nom utilisé dans le code pour identifier l’objet. Préfixe : `bva` Exemple : `bvaJeu` |
| ![propriete](../../_00-shared/_propriete.png) <br/> AddressMode | | Mode d'adressage des cellules : la façon dont les cellules sont numérotées. <br/> - Normal : par rangée de gauche à droite en partant du coin supérieur gauche <br/> - Column : par colonne à partir du coin supérieur gauche <br/> - ColumnReverse : par colonne à partir du coin inférieur droit <br/> - Reverse : par rangée à partir du coin inférieur droit <br/> - ReverseRow : par rangée à partir du coin inférieur gauche <br/> - ReverseColumn : par rangée à partir du coin supérieur droit <br/> - StairsTopLeft : en escalier en partant du coin supérieur gauche <br/> - StairsTopRight : en escalier en partant du coin supérieur droit <br/> - StairsBottomLeft : en escalier en partant du coin inférieur gauche <br/> - StairsBottomRight :  en escalier en partant du coin inférieur droit |
| ![propriete](../../_00-shared/_propriete.png) <br/> AddressView | | Détermine l'affichage des adresses des cellules en mode conception : <br/> - None : les adresses ne sont pas affichées <br/> - Mode 1D : affiche l'index de la cellule <br/> - Mode 2D : affiche l'adresse de la cellule, soit le numéro de la rangée et le numéro de la colonne |
| ![propriete](../../_00-shared/_propriete.png) <br/> BackgroundImage | | Indique l'image d'arrière-plan utilisée pour le contrôle. |
| ![propriete](../../_00-shared/_propriete.png) <br/> ColumnCount | `int` | Obtient ou définit le nombre de colonnes. |
| ![propriete](../../_00-shared/_propriete.png) <br/> ColumnHeader | | Détermine l'aspect de l'entête des colonnes. | Pour afficher l'entête des colonnes, la propriété Visible est définie à `true`. <ColumnHeader/> |
| ![propriete](../../_00-shared/_propriete.png) <br/> ColumnHeaderArray | `string` | Tableau à une dimension pour l'affichage en-têtes de colonnes |
| ![propriete](../../_00-shared/_propriete.png) <br/> Delay | `int` | Obtient ou définit le délai d'attente en millisecondes. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Enabled | `bool` | Obtient ou définit une valeur true ou false qui indique si le contrôle est activé ou non. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Length | `int` | Obtient le nombre de cellules. |
| ![propriete](../../_00-shared/_propriete.png) <br/> RowCount | `int` | Obtient ou définit le nombre de rangées. |
| ![propriete](../../_00-shared/_propriete.png) <br/> RowHeader | | Détermine l'aspect de l'entête des rangées. Pour afficher l'entête des rangées, la propriété Visible est définie à true. <RowHeader/> |
| ![propriete](../../_00-shared/_propriete.png) <br/> RowHeaderArray | `string` | Tableau à une dimension pour l'affichage en-têtes de rangées |
| ![propriete](../../_00-shared/_propriete.png) <br/> SelectedIndex | `int` | Obtient ou définit l'index de la cellule sélectionnée en tenant compte du mode d'adressage. S'il n'y a pas de cellule sélectionnée, alors l'index est **-1**. |
| ![propriete](../../_00-shared/_propriete.png) <br/> SelectionMode | | Obtient ou définit le mode de sélection des cellules. <br/> - None : aucune sélection <br/> - One : sélection d'une seule cellule <br/> - MultiSimple (ctrl ) et MultiExtended (shift, ctrl): sélection de plusieurs cellules à la fois. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Sprites | `Collection` | Représente la collection de sprites appartenant à la grille. Les sprites peuvent avoir des formes et des couleurs différentes, être animés, affichés à un index ou à une adresse donnée. |
| ![propriete](../../_00-shared/_propriete.png) <br/> Visible | `bool` | Obtient ou définit une valeur true ou false indiquant si le contrôle est visible ou non. |

| Méthode | Description |
| :-----: | ----------- |
| ![méthode](../../_00-shared/_methode.png) <br/> Clear() | Ré-initialise toutes les cellules à la valeur par défaut. |
| ![méthode](../../_00-shared/_methode.png) <br/> Clear(int pRow, int pColumn) | Ré-initialise à la valeur par défaut, la cellule dont l'index est spécifié. |
| ![méthode](../../_00-shared/_methode.png) <br/> Clear(int pRow, int pColumn) | Ré-initialise à la valeur par défaut, la cellule dont la rangée et la colonne sont spécifiées. |
| ![méthode](../../_00-shared/_methode.png) <br/> ClearValues() | Ré-initialise chaque cellule à la valeur par défaut. |
| ![méthode](../../_00-shared/_methode.png) <br/> ContainsValue(int pValue) | Détermine si pValue se retrouve dans l'une des cellules de la grille. `true` si pValue est présente, `false` sinon. |
| ![méthode](../../_00-shared/_methode.png) <br/> DisableCell(int pIndex) | Rend inactive la cellule à l'index spécifié. |
| ![méthode](../../_00-shared/_methode.png) <br/> DisableCell(int pRow, int pColumn) | Rend inactive la cellule à la rangée et à la colonne spécifiées. |
| ![méthode](../../_00-shared/_methode.png) <br/> DisableSelectedCell() | Rend inactive la cellule sélectionnée. |
| ![méthode](../../_00-shared/_methode.png) <br/> EnableCell(int pIndex) | Rend active la cellule à l'index spécifié. |
| ![méthode](../../_00-shared/_methode.png) <br/> EnableCell(int pRow, int pColumn) | Rend active la cellule à la rangée et à la colonne spécifiées. |
| ![méthode](../../_00-shared/_methode.png) <br/> GetCellEnabled(int pIndex) | Obtient l'état de la cellule à l'index spécifié : true si elle est active, false sinon. |
| ![méthode](../../_00-shared/_methode.png) <br/> GetCellEnabled(int pRow, int pColumn) | Obtient l'état de la cellule à la rangée et la colonne spécifiées. `true` si elle est active, `false` sinon. |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomAddress() | Génère une adresse aléatoire. <RandomAddress/> |
| ![méthode](../../_00-shared/_methode.png) <br/> RandomIndex() | Génère un nombre entier au hasard situé entre 0 et le nombre de cellules **-1** de la grille. |
| ![méthode](../../_00-shared/_methode.png) <br/> SetCellEnabled(int pIndex, bool pEnabled) | Assigne un état à la cellule à l'index spécifié. Cellule active si pEnabled est à true, sinon inactive. |
| ![méthode](../../_00-shared/_methode.png) <br/> SetCellEnabled(int pRow, int pColumn, bool pEnabled) | Assigne un état à la cellule dont la rangée et la colonne spécifiées. Cellule active si pEnabled est à true, sinon false. |
| ![méthode](../../_00-shared/_methode.png) <br/> Wait() | Attend un laps de temps selon la propriété Delay. |
| ![méthode](../../_00-shared/_methode.png) <br/> Wait(int pDelai) | Attend un laps de temps en millisecondes spécifié. |

| Événement | Description |
| :-------: | ----------- |
| ![evenement](../../_00-shared/_evenement.png) <br/> CellDragDrop | Se produit lorsqu'une cellule est glissée-déposée dans une autre cellule. |
| ![evenement](../../_00-shared/_evenement.png) <br/> CellMouseDown | Se produit lorsque l'utilisateur appuie sur un bouton de la souris lorsque le pointeur se trouve sur une cellule. (`MouseDown`) Le paramètre ( `... VisualArrays.CellMouseEventArgs e)` du gestionnaire d'événement `CellMouseDown` permet d'obtenir, entre autres, l'index de la cellule cliquée. Suite à un clic dans une cellule, le contenu de la cellule cliquée est récupéré : <CellMouseDown/> |
| ![evenement](../../_00-shared/_evenement.png) <br/> KeyDown | Se produit lorsqu'une touche est enfoncée une première fois. Le paramètre `( ... VisualArrays.KeyEventArgs e)` du gestionnaire d'événement `KeyDown` permet d'obtenir, entre autres, le code de clavier. L'énumération Keys offre la liste des touches qui peuvent être enfoncées. Exemple : `Keys.Down` indique la touche flèche bas |
| ![evenement](../../_00-shared/_evenement.png) <br/> SelectedIndexChanged | Se produit lorsque la propriété SelectedIndex est modifiée. |

| struct | Description |
| :----: | ----------- |
| ![struct](../../_00-shared/_struct.png) <br/> Address | Représente l'adresse d'une cellule sous la forme rangée et colonne. <br/> **Déclaration** d'une variable de type Address <Address/> Utilisation de la variable <br/> Exemple 1 : <AddressExemple1/> Exemple 2 : <AddressExemple2/> Exemple 3 : <AddressExemple3/> |
