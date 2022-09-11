---
sidebar_position: 2
---

# Portée et durée de vie

- La ***portée*** d'une variable est l'ensemble des emplacements dans le code où elle est accessible.
- La ***durée de vie*** d'une variable est la période durant laquelle elle existe, qu'elle conserve son emplacement en mémoire et durant laquelle elle peut stocker des données.

## Variable locale

Si une variable est déclarée au début d'un bloc d'instructions, elle est accessible seulement dans ce bloc. La variable est locale au bloc d'instructions qui est délimité par des accolades.  Dès que l'exécution du bloc sera terminé, la variable n'existe plus.
À l'extérieur de ce bloc, la variable n'est pas connue.

```cs
{  // début du bloc A
   int  nombreA= 20  // nombreA est une variable locale au bloc A et au bloc B

    { //début du bloc B
        int  nombreB = 10;  // nombreB est une variable locale au bloc B

     Console.WriteLine ("nombreA : " + nombreA);
     Console.WriteLine ("nombreB : " + nombreB);
   } // fin du bloc B

     Console.WriteLine ("nombreA : " + nombreA);
   Console.WriteLine ("nombreB : " + nombreB); //ERREUR -> "nombreB" n'existe pas dans le contexte actuel.

} // fin du bloc A
Console.WriteLine ("nombreA : " + nombreA); //ERREUR -> "nombreA" n'existe pas dans le contexte actuel.
```

## Variable membre

Parfois, il est nécessaire qu'une variable soit accessible à plusieurs blocs.
Elle doit alors être déclarée au début du formulaire, c'est-à-dire avant l'instruction `public FrmPrincipal()`.
Elle est accessible partout dans le code du formulaire et existe pour tout le formulaire.

Pour distinguer une variable **m**mbre d'une variable locale, le préfixe **`m_`** est utilisé.

```cs
public partial class FrmPrincipal : Form
{
    int  m_cptEssais = 0;  // variable membre accessible partout dans le code
      
      //  Constructeur du formulaire -----------------------------------------------------
    public FrmPrincipal()
    {
        InitializeComponent();
    }
      //  -----------------------------------------------------------------------------------
    private void mnuFichierNouvellePartie_Click(object sender, EventArgs e)
    {
      m_cptEssais = 0;
          . . .
    }
       //  -----------------------------------------------------------------------------------
    private void btnJouerUnePartie_Click(object sender, EventArgs e)
    {
      m_cptEssais ++;
      . . .
     }
}
```
