```cs
private void AfficherLigne( char pLettreDebut, int pCptFois)
{
  char lettre = pLettreDebut; 
  for (int cptLettres= 1; cptLettres<= pCptFois; cptLettres++)
  {
      Console.Write(lettre + ":");
      lettre++;
  }
  Console.WriteLine();
}
```
