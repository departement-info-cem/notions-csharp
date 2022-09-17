---
sidebar_position: 13
---

# Conversion / Transtypage

Certains types de données permettent de stocker des valeurs numériques.
Par exemple, la valeur 4 peut être exprimée sous forme d'un entier sur 32 bits (`int`) ou d'un réel sur 64 bits (`double`) ou sur 128 bits (`decimal`).

Parfois, les expressions arithmétiques sont constituées d'opérandes de différents types de données. Or, les opérations arithmétiques ne sont possibles que lorsque leurs opérandes sont de même type. Une **conversion** de type ou **transtypage** entre opérandes est alors nécessaire pour effectuer l'opération.

Certaines conversions de type de données sont **implicites** (exemples 1 à 3) tandis que d'autres sont **explicites**.

Les conversions explicites ne peuvent pas être utilisées pour transformer une chaîne en nombre ou un nombre en chaîne.
Il faut utiliser les méthodes **Parse()** et **ToString()** (exemples 4 et 5).

## Conversion implicite

La conversion implicite est effectuée selon la hiérarchie ci-dessous.

![shéma conversion - transtypage](./_conversion-transtypage/_schema-conversion-implicite.jfif)

Si la conversion est impossible, une erreur de compilation est obtenue.

:::danger Exemple
"Impossible de convertir implicitement le type 'double' en 'decimal'. Une conversion explicite existe (un cast est-il manquant?).
:::

### Exemple #1 : Conversions implicites

```cs
decimal  nombreDecimal = 1234.12m;    int nombreEntier = 1234;
double   nombreDouble = 1234.12;      char caractere = 'A';

nombreDecimal = nombreEntier; // un int vers un decimal
nombreDecimal = 25;           // un int vers un decimal
nombreEntier  = caractere;    // un char vers un int
nombreDouble  = 12;           // un int vers un double
```

## Conversion explicite  ( ) - type par valeur

- La conversion explicite est représentée par ( ) l'opérateur de transtypage.
- Les types par valeur peuvent être transtypés sauf le type bool qui ne peuvent être utilisés avec ().
- Il n'y a pas de conversion implicite entre les types float ou double et le type decimal.
- Les conversions peuvent être restrictives quant au résultat. Voir l’exemple #3.

### Exemple #2 :  Conversions explicites

```cs
decimal  nombreDecimal = 1234.12m;   int nombreEntier = 1234;    
double   nombreDouble = 1234.12;     char caractere;
int      unCodeCaractere = 65 ; // code ASCII de la lettre A
  

// Lorsque qu'une conversion implicite est impossible, il faut transtyper (caster).
// Il peut y avoir une perte de précision.
                
nombreDecimal = (decimal) nombreDouble;   // nombreDecimal = nombreDouble est impossible          
nombreDouble  = (double) nombreDecimal;   // nombreDouble  = nombreDecimal est impossible 
nombreEntier  = (int) nombreDecimal;      // nombreEntier  = nombreDecimal est impossible 
     
//nombreDecimal = 25.5;   // erreur : double dans un decimal non accepté              
nombreDecimal = 25.5m;    // le suffixe m indique un nombre de type decimal
  
caractere  = (char)(unCodeCaractere + 1); // caractère est 66 : le caractère 'B'
```

### Exemple #3: Conversions restrictives

```cs
int      nombre1 = 6;
int      nombre2 = 10;
decimal  resultat;


resultat = (decimal) nombre1 / nombre2;  
Console.WriteLine(resultat);     // affiche 0.6

resultat = nombre1 / (decimal) nombre2;     
Console.WriteLine(resultat);     // affiche 0.6

// perte de précision

resultat = nombre1 / nombre2;  
Console.WriteLine(resultat);       // affiche 0

resultat = (decimal) (nombre1 / nombre2 ); 
Console.WriteLine(resultat) ;     // affiche 0
```

## Conversion d'une chaîne vers un nombre : Parse(...)

- Il est impossible d'effectuer des calculs avec des chaines de caractères même si elles ne contiennent que des chiffres.
- Il est impossible de transformer une chaine en nombre avec l'opérateur de transtypage ( ).
- La méthode **Parse()** permet de convertir une chaine en un nombre.
- Si la chaine contient des caractères non-numériques, l’erreur FormatException se produit à l’exécution.

### Exemple #4 :  Conversions de chaîne à nombre

```cs
string  coutEnChaine = "45,60" ; // attention : mettre une virgule. Le point cause une erreur de format.
string  noteEnChaine = "62" ;

decimal  cout  = decimal.Parse(coutEnChaine);

int  noteExamen = int.Parse(noteEnChaine);
```

## Conversion d'un nombre vers une chaîne : ToString(...)

- Il est impossible de transformer un nombre en chaine de caractères avec l'opérateur de transtypage.
- La méthode `ToString()` permet de convertir un nombre en chaine.
- Il est possible de préciser des formats d’affichage.

### Exemple #5 :  Conversions de nombre à chaîne avec formatage

```cs
decimal  fahrenheit = 43.515m;
decimal  prix = 212.23m;
decimal  fraction =0.1289m;
int      heureDepart = 3;
 
Console.WriteLine(fahrenheit.ToString());     // format par défaut                   43,515
Console.WriteLine(fahrenheit.ToString("F1")); // avec 1 décimale                     43,5
Console.WriteLine(fahrenheit.ToString("F"));  // avec 2 décimales                    43,52
Console.WriteLine(prix.ToString("C0"));       // aucune décimale suivi de $          212 $
Console.WriteLine(prix.ToString("C"));        // avec 2 décimales suivi de $         212,23 $
Console.WriteLine(fraction.ToString("P1"));   // X 100 et 1 décimale suivi de %      12,9 %
Console.WriteLine(heureDepart.ToString("00")); // obligatoirement sur 2 positions    03
```

### Spécificateurs de formats d'affichage.

Le spécificateur de précision définit le nombre de chiffres dans la représentation sous forme de chaîne d'un nombre.
Il n'arrondit pas le nombre lui-même.

Pour plus d'informations, consultez [les chaines de format numériques standard](http://msdn.microsoft.com/fr-fr/library/dwhawy9k.aspx)

| Spécificateur de format | Nom | Description |
| :---------------------: | --- | ----------- |
| C ou c | Devise <br/> | (Currency) | Le nombre est converti en une chaîne représentant une valeur monétaire. <br/><br/> Le spécificateur de précision indique le nombre de décimales voulu. <br/> Par défaut, 2 décimales sont affichées. |
| F ou f | Virgule fixe | Le nombre est converti en une chaîne de chiffres décimaux (0-9), avec un signe moins si le nombre est négatif. <br/><br/> Le spécificateur de précision indique le nombre de décimales voulu. |
| P ou p | Pourcentage | Le nombre est converti en une chaîne qui représente un pourcentage. <br/> Le nombre converti est multiplié par 100 afin d'être présenté comme un pourcentage. <br/><br/> Le spécificateur de précision indique le nombre de décimales voulu. |
