---
sidebar_position: 1
---

# Visual Studio

Visual Studio est l'EDI (**E**nvironnement de **D**éveloppement **I**ntégré) qui est utilisé dans le cours. Vous utiliserez cet outil pour travailler sur vos travaux pratiques ainsi que les exercices sur cours.

## Prérequis

- Accès à votre compte Microsoft du CÉGEP.
- Un ordinateur ayant une architecture x64 qui exécute Windows 10 ou plus.
- Environ 45 minutes de votre temps.

:::info

L'identifiant du compte Microsoft du CÉGEP ressemble à `matricule@cegepmontpetit.ca` où `matricule` est votre code à 7 chiffres que vous utilisez aussi pour vous connecter à Omnivox.

:::

## Activer la licence étudiante

Naviguez vers la page d'activation de la licence étudiante de **[Microsoft Azure](https://azure.microsoft.com/fr-ca/free/students/)** et cliquez sur **Démarrer gratuitement**.

![Accueil du site Azure pour étudiants.](./_01-visual-studio/_azure-etudiants.png)

Entrez votre numéro de téléphone personnel ou résidentiel, puis cliquez sur le bouton bleu qui vous convient le mieux. Suivez les instructions que vous recevrez par téléphone ou SMS.

![Formulaire d'Azure pour téléphone.](_01-visual-studio/_telephone.png)

Remplissez le formulaire. Vous devez utiliser votre adresse courriel du CÉGEP lorsqu'on vous demande votre adresse e-mail.

![Formulaire d'Azure pour adresse courriel.](_01-visual-studio/_formulaire.png)

## Télécharger l'installateur

Naviguez vers le portail **[Microsoft Azure](https://portal.azure.com/#blade/Microsoft_Azure_Education/EducationMenuBlade/software)**. Vous devriez voir plus de 10 logiciels listés. Si ce n'est pas le cas, assurez-vous d'avoir bien complété l'étape précédente.

![Liste d'une vingtaine de logiciels disponibles.](./_01-visual-studio/_liste-logiciels.png)

Dans la barre de recherche, entrez "**Visual Studio Enterprise Edition 2022**", puis appuyez sur la touche `Entrer` sur votre clavier.

![Résultats recherche Visual Studio.](./_01-visual-studio/_resultat-recherche-visual-studio.png)

Sélectionnez "**Visual Studio Enterprise Edition 2022**". Une barre latérale à droite de votre écran devrait s'ouvrir.

![Barre latérale.](./_01-visual-studio/_barre-laterale.png)

Cliquez sur le bouton "**Télécharger**" au bas de la page. Enregistrez le fichier à un endroit familier sur votre ordinateur. Gardez cette page web ouverte, vous devrez y revenir plus tard.

![Répertoire Téléchargements.](./_01-visual-studio/_telechargement.png)

## Installer Visual Studio et sélectionner les configurations

Double cliquez sur l'installateur téléchargé à la précédente étape. Acceptez de donner les permissions qui vous sont demandées.

![Explorateur de fichiers.](./_01-visual-studio/_explorateur-fichiers.png)

Cliquez sur le bouton "**Continuer**" et attendez que l'installateur se télécharge. Le temps de téléchargement va varier selon la vitesse de votre connexion internet.

![Installateur de Visual Studio, continuer.](./_01-visual-studio/_visual-studio-installer-continuer.png)

La fenêtre suivante devrait s'afficher après quelques minutes.

![Fenêtre de l'installateur avec les différentes options de logiciel et de suites à installer.](./_01-visual-studio/_installateur-avant.png)

Sélectionnez les options suivantes :

- Développement .NET Desktop 
- Développement web et ASP.NET

![Installateur après configuration.](./_01-visual-studio/_installateur-apres.png)

Cliquez sur le bouton "**Installer**". La taille de l'installation pourrait légèrement varier de votre côté.

![Installer.](./_01-visual-studio/_installer.png)

Le téléchargement et l'installation sont lancés. Patientez quelques minutes. La vitesse de téléchargement et d'installation va varier selon la vitesse de votre connexion internet et la configuration de votre ordinateur.

![Installation en cours.](./_01-visual-studio/_installation-en-cours.png)

Une fois l'installation terminée, la fenêtre suivante devrait s'ouvrir.

![Accueil Visual Studio.](./_01-visual-studio/_accueil-visual-studio.png)

Gardez cette fenêtre ouverte pour la prochaine étape.

## Enregistrer la licence

Si Visual Studio n'est pas déjà ouvert, vous pouvez l'ouvrir en cherchant "**Visual Studio 2022**" dans votre barre de recherche Windows.

![Rechercher Visual Studio dans le menu démarrer.](./_01-visual-studio/_rechercher-visual-studio.png)

Cliquez sur le bouton "**Continuer sans code**" qui est en bas à droit de la fenêtre. Visual Studio devrait s'ouvrir avec une interface plus ou moins similaire à celle-ci.

![Visual Studio.](./_01-visual-studio/_visual-studio.png)

Cliquez sur le bouton "**Connexion**" situé en haut à droite de l'écran et connectez-vous à votre compte Microsoft du CÉGEP.

![Bouton Connexion.](./_01-visual-studio/_connexion.png)

Une fois la dernière étape complétée, vous devriez voir vos initiales s'afficher où le bouton de connexion était. Cliquez sur vos initiales.

![Initiales.](./_01-visual-studio/_initiales.png)

Puis sur le bouton "**Paramètres du compte...**".

![Paramètres du compte.](./_01-visual-studio/_parametres-du-compte.png)

Cliquez sur le bouton d'activation de la licence.

Sur internet, retournez sur le portail Azure où vous avez téléchargé l'installateur. Si vous n'êtes plus sur la page, refaites une partie des étapes de la section **[Télécharger l'installateur](#télécharger-linstallateur)**.

![Barre latérale.](./_01-visual-studio/_barre-laterale.png)

Cliquez sur le bouton "**Afficher la clé**", puis cliquez sur le bouton "**Copier dans le Presse-Papier**".

![Fenêtre Afficher la clé.](./_01-visual-studio/_cle-de-produit.png)

De retour sur Visual Studio, collez la clé qui est dans votre Presse-Papier. Votre licence de Visual Studio est maintenant activée.

## Vérifier son installation

Afin de vérifier que Visual Studio s'est bien installé, nous allons exécuter un projet de test très simple.

Visual Studio 2022 devrait maintenant s'afficher dans la liste de vos programmes. Lancez-le.

![Rechercher Visual Studio.](./_01-visual-studio/_rechercher-visual-studio.png)

Cliquez sur le bouton "**Créer un projet**".

![Créer un projet.](./_01-visual-studio/_creer-un-projet.png)

Dans la barre de recherche, recherchez "**Console**", sélectionnez le résultat "**Application console**" qui possède les tags "**C#**", "**Linux**", "**macOS**", "**Windows**", "**Console**", puis cliquez sur le bouton "**Suivant**" situé en bas à droite de la fenêtre.

![Option Application console.](./_01-visual-studio/_application-console.png)

Nous n'allons pas modifier ces configurations cette fois-ci. Cliquez sur le bouton "**Suivante**" situé en bas à droite de la fenêtre.

![Fenêtre Configurer votre nouveau projet.](./_01-visual-studio/_configurer-projet.png)

Cochez l'option "**N'utilisez pas d'instructions de niveau supérieur**" et cliquez sur le bouton "**Créer**" situé en bas à droite de la fenêtre.

![Fenêtre Informations supplémentaire.](./_01-visual-studio/_informations-supplementaires.png)

Après quelques instants, une fenêtre similaire à celle-ci devrait s'ouvrir.

![Fenêtre contenant les lignes namespace ConsleApp, internal class Programe, et static void Main...](./_01-visual-studio/_projet-test.png)

Cliquez sur le bouton nommé "**ConsoleApp2**" ou un nom similaire, ou appuyez sur la touche **F5** pour exécuter le programme.

![Bouton Exécuter projet.](./_01-visual-studio/_executer-projet.png)

Après quelques instants, une fenêtre ressemblant à celle-ci devrait apparaître. Le texte "**Hello World!**" devrait apparaître au début de la fenêtre.

![Console contenant "Hello World!".](./_01-visual-studio/_console.png)

:::caution Attention!

Si l'une des étapes suivantes n'a pas fonctionné pour vous ou que vous n'arrivez pas au même résultat final, assurez-vous de contacter votre enseignant rapidement pour qu'il puisse vous aider.

:::
