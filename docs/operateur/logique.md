---
sidebar_position: 1
---

# Logique

import EtTableVerite from './logique/et/_table-verite.mdx';
import EtExpressionBool from './logique/et/_expression-bool.mdx';
import OuTableVerite from './logique/ou/_table-verite.mdx';
import NonTableVerite from './logique/non/_table-verite.mdx';

Les opérateurs logiques sont utilisés dans des expressions booléennes plus ou moins complexes, dont le résultat est true (vrai) ou false (faux).

Elles se trouvent fréquemment dans l'instruction de sélection if.

| **Opérateur** | **Table de vérité** | **Exemples d'expréssions booléennes** | **Valeur de l'expression** |
| ------------- | ------------------- | ------------------------------------- | -------------------------- |
| && <br/> (ET) | <EtTableVerite /> | <CodeBlock language="cs"><EtExpressionBool /></CodeBlock> | |
| \|\| <br/> (OU) | <OuTableVerite /> | | |
| ! <br/> (NON) | <NonTableVerite /> | | |