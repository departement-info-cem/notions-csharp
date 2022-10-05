---
sidebar_position: 18
---

# Fichier texte

import FileExists from './_18-fichier-texte/_file-exists.md';
import DirectoryExists from './_18-fichier-texte/_directory-exists.md';
import DirectoryGetFiles1 from './_18-fichier-texte/_directory-getfiles1.md';
import DirectoryGetFiles2 from './_18-fichier-texte/_directory-getfiles2.md';
import DirectorySetCurrentDirectory from './_18-fichier-texte/_directory-setcurrentdirectory.md';
import StreamReader from './_18-fichier-texte/_streamreader.md';
import EndOfStream from './_18-fichier-texte/_endofstream.md';
import ReadLine from './_18-fichier-texte/_readline.md';
import ReadToEnd from './_18-fichier-texte/_readtoend.md';
import Close1 from './_18-fichier-texte/_close1.md';
import Close2 from './_18-fichier-texte/_close2.md';
import StreamWriter1 from './_18-fichier-texte/_streamwriter1.md';
import StreamWriter2 from './_18-fichier-texte/_streamwriter2.md';
import WriteLine from './_18-fichier-texte/_writeline.md';
import Write from './_18-fichier-texte/_write.md';
import Close3 from './_18-fichier-texte/_close3.md';
import Close4 from './_18-fichier-texte/_close4.md';

Un fichier texte est une structure de données contenant des caractères. Chaque ligne du fichier texte se termine par le code de *Fin de ligne* (*Return*) et la fin de fichier est indiquée par un code de *Fin de fichier*. Le fichier se trouve sur un périphérique et il faut établir un lien entre le système d'exploitation et l'application. Ce lien appelé flux d'entrée (**I**n) ou de flux de sortie (**O**ut) permet le transfert d'informations.

## Le Package System.IO

Le package **IO** contient des classes relatives aux fichiers texte pour la lecture/écriture de flux de données et la prise en charge de fichiers et de répertoires. Ce package doit être inclus au début du code source avec l'instruction `using System.IO;`.

## Les classes File et Directory

Ces deux classes offrent des méthodes pour la manipulation de fichiers et de répertoires. Voici quelques méthodes.   

| Méthode | Valeur <br/> de <br/> retour | Description |
| :-----: | :--------------------------: | ----------- |
| ![méthode](./_00-shared/_methode.png) File.Exists(string path) | `bool` | Détermine si le fichier spécifié existe ou non sur le disque. <FileExists/> |
| ![méthode](./_00-shared/_methode.png) Directory.Exists(string path) | `bool` | Détermine si le chemin d'accès spécifié réfère à un répertoire existant sur le disque. <DirectoryExists/> |
| ![méthode](./_00-shared/_methode.png) Directory.GetFiles(string path) | `string [ ]` | Retourne dans un tableau de chaines, le nom complet des fichiers contenus dans le répertoire spécifié. <DirectoryGetFiles1/> Si le répertoire ventes contient les 3 fichiers : `janvier.txt`, `fevrier.txt`, `mars.txt` le tableau contiendra les chaines suivantes : <DirectoryGetFiles2/> |
| ![méthode](./_00-shared/_methode.png) Directory.SetCurrentDirectory (string path) | | Définit le répertoire de travail actif de l'application avec le répertoire spécifié. <DirectorySetCurrentDirectory/> Le répertoire "Catégories" est placé dans le projet sous le répertoire `bin\debug`.

## La classe StreamReader : lecture dans un fichier texte

| Constructeur | Description |
| :----------: | ----------- |
| ![méthode](./_00-shared/_methode.png) StreamReader(string pNomFichier) | Initialise une instance de la classe pour le nom de fichier spécifié en paramètre. Le fichier est ouvert en mode **Lecture**, et le pointeur de lecture au début du fichier est positionné au début du fichier. <StreamReader/> Si le fichier spécifié n'existe pas, l'exception FileNotFoundException est levée. Pour éviter cette erreur, il faut vérifier l'existence avec la méthode File.Exists("ventes.txt"). |

| Propriété | Type | Description |
| :-------: | :--: | ----------- |
| ![propriété](./_00-shared/_propriete.png) EndOfStream | `bool` | Obtient une valeur indiquant si la position actuelle du pointeur de lecture se trouve à la fin du fichier, c'est-à-dire sur le code de Fin de fichier. <EndOfStream/> |

| Méthode | Valeur <br/> de <br/> retour | Description |
| :-----: | :--------------------------: | ----------- |
| ![méthode](./_00-shared/_methode.png) ReadLine() | `string` | Retourne les caractères lus à partir du début de la ligne actuelle jusqu'au code de *Fin de ligne* (Return). <br/> Après la lecture de la ligne, le pointeur de lecture se trouve au début de la prochaine ligne à lire. <ReadLine/> |
| ![méthode](./_00-shared/_methode.png) ReadToEnd() | `string` | Retourne les caractères lus de la position actuelle du pointeur jusqu'au code de *Fin de fichier*. Après la lecture, le pointeur se trouve sur le code de *Fin de fichier*. <ReadToEnd/> |
| ![méthode](./_00-shared/_methode.png) Close() | `void` | Ferme l'objet StreamReader et le flux d'entrée sous-jacent et libère les ressources. <Close1/> Lors de la création de l'objet de lecture, si on inclut using, les ressources sont libérées et il n'est pas nécessaire de fermer l'objet de lecture avec .Close() <Close2/> |

## La classe StreamWriter : écriture dans un fichier texte

| Constructeur | Description |
| :----------: | ----------- |
| ![méthode](./_00-shared/_methode.png) StreamWriter(string pNomFichier) | Initialise une instance de la classe pour le nom de fichier spécifié en paramètre. Le fichier est ouvert en mode **Écriture** et le pointeur de lecture au début du fichier est positionné au début du fichier. Si le fichier n'existe pas, il est créé. <StreamWriter1/> |
| ![méthode](./_00-shared/_methode.png) StreamWriter(string pNomFichier, bool pAppend) | Initialise une nouvelle instance de la classe pour le nom de fichier spécifié en paramètre. Le fichier est ouvert en mode **Append** (Ajout) si le 2e paramètre est `true`. Dans ce mode, si le fichier n'existe pas, il est créé et le pointeur de lecture est placé au début du ficher mais s'il existe, le pointeur est placé à la fin du fichier. <StreamWriter2/> |

| Méthode | Valeur <br/> de <br/> retour | Description |
| :-----: | :--------------------------: | ----------- |
| ![méthode](./_00-shared/_methode.png) WriteLine(string pChaine) | `void` | Écrit à la position du pointeur de lecture le paramètre pChaine, suivie du code de Fin de ligne. <WriteLine/> |
| ![méthode](./_00-shared/_methode.png) Write(string pChaine) | `void` | Écrit à la position du pointeur de lecture, le paramètre pChaine. <Write/> Ligne obtenue dans le fichier : `Bonne journée`. |
| ![méthode](./_00-shared/_methode.png) Close() | `void` | Ferme l'objet StreamWriter et le flux de sortie sous-jacent et libère les ressources du fichier <Close3/> Lors de la création de l'objet d'écriture, si on inclut `using`, les ressources sont libérées et il n'est pas nécessaire de fermer l'objet de lecture avec .Close() <Close4/> |
 
## Exemple : Lecture d'un fichier nommé "Autos.txt" pour afficher son contenu sur la console.

```cs
// Instancier un objet de lecture.
StreamReader objFichierALire = new StreamReader("Autos.txt");

// Tant qu'il y a des caractères à lire
while (!objFichierALire.EndOfStream)
{
    // Lire une ligne du fichier.
    string ligneLue = objFichierALire.ReadLine();
  
    // Afficher la ligne lue sur la console.
    Console.WriteLine(ligneLue);
}
// Fermer le fichier.
objFichierALire.Close();
```
