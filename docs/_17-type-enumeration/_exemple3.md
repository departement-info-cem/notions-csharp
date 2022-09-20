```cs
// Convertir un énumérateur en entier ou en chaine.
int entierQualite = (int) objPhoto.Qualite;
string chaineQualite = objPhoto.Qualite.ToString();

Console.WriteLine(entierQualite + "   " + chaineQualite);

// Convertir un entier en énumérateur
objPhoto.Qualite = (enuQualite) entierQualite;

// Boucle sur une Énumération
for (enuJourSemaine jour = enuJourSemaine.Lundi; jour < enuJourSemaine.Dimanche; jour ++)
{
     cboJour.Items.Add(jour.ToString());
}
```
