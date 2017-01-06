<!-- .slide: data-state="title" -->
# L'outillage front-end en 2017

Ou lutte contre la *JavaScript fatigue*

---

<!-- .slide: data-state="subtitle" -->
# Écrire du JavaScript moderne

--

## ES6

ECMAScript 2015 (ou ES6) est une spécification qui définit le langage JavaScript actuel.
Elle permet d'écrire du code JavaScript plus moderne.

--

* Classes
* Arrow functions
* Paramètres par défaut
* Template strings
* Déclaration de variables avec `let`, `const`
* ...

--

Utiliser ES6 dès maintenant avec **Babel**.

--

## TypeScript

TypeScript est un langage dérivé du JavaScript, qui ajoute la notion de **types**.

```ts
function greeter(person: string) {
    return "Hello, " + person;
}
```

---

# Modules

--

## Comment on faisait avant

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>JS Modules</title>
  </head>
  <body>

    <script type="text/javascript" src="./polygon.js"></script>
    <script type="text/javascript" src="./square.js"></script>
    <script type="text/javascript" src="./main.js"></script>
  </body>
</html>
```

--

Problèmes&nbsp;:

* Pollution du scope global ;
* Pas de résolution des dépendances (il faut inclure les scripts dans le bon ordre).

--

## Aujourd'hui avec des modules ES6

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>JS Modules</title>
  </head>
  <body>

    <script type="text/javascript" src="./main.js"></script>
  </body>
</html>
```

--

`square.js`

```js
import Polygon from './polygon';

export class Square extends Polygon {

    // ...
}
```

`main.js`

```js
import Square from './square';

let square = new Square();

// ...
```

---

# Outils de build

--

## Webpack

---

# Préprocesseurs CSS

--

## SASS

--

## LESS

--

## PostCSS

---

# Analyse syntaxique

--

## ESLint

ESLint permet d'analyser et de valider votre code JavaScript.

* Vérification des erreurs courantes
* Bonnes pratiques
* Validation du style (indentation, espacement...)

Il est possible d'utiliser des configurations prédéfinies&nbsp;:

* Airbnb
* XO
* Standard

---

# Tests

---

# Documentation
