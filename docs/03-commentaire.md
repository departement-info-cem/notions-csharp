---
sidebar_position: 3
---

# Commentaire

Pour améliorer la lisibilité d'un programme, il est possible d'insérer des commentaires dans le code.
Les commentaires sont ignorés par le compilateur.

Il existe 3 façons de créer des commentaires :

## Avec le délimiteur `//`

```cs
// Étape #C
// ------------------------------------------------------------------------
// Calculer le coût de livraison.
if (coutLivraison >= 100) // Si vrai, ajouter la taxe.
```

## Avec les délimiteurs `/*` et `*/`

```cs
  /* Si le radio bouton est coché,
     alors calculer la livraison. */
 if (radLivraison.Checked)
```

## Avec les balises XML, le délimiteur `///` génère automatiquement les balises XML.

```cs
/// <summary>
/// Détermine le nombre de notes supérieures à une limite.
/// </summary>
/// <param name="pLimite">La limite à vérifier.</param>
/// <returns>Le nombre de notes supérieures à la limite.</returns>
```
