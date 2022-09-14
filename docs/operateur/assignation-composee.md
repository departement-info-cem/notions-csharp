---
sidebar_position: 2
---

# Assignation composée

Les opérateurs arithmétiques peuvent être combinés avec un opérateur d'assignation pour former les opérateurs d'assignation composée.
Ils sont utilisés pour simplifier l'écriture du code.

L'opération est d'abord effectuée et la valeur est ensuite assignée à la variable.

Hypothèse pour chaque exemple :  

```cs
int a = 7;
int b = 10;
```

| Symbole | Expression | Équivalence | Résultat |
| ------- | ---------- | ----------- | -------- |
| `+=` | `a += b;` | `a = a + b;` | 17 |
| `-=` | `a -= b;` | `a = a - b;` | -3 |
| `*=` |`a *= b;` | `a = a * b;` | 70 |
| `/=` | `a /= b;` | `a = a / b;` | 0 |
| `%=` | `a %= b;` | `a = a % b ;` | 7 |
| `++` | `a++;` | `a = a + 1;` | 8 |
| `--` | `a--;` | `a = a - 1;` | 6 |