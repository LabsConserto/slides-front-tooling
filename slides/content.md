<!-- .slide: data-state="title" -->
# L'outillage front-end en 2017

Ou lutte contre la *JavaScript fatigue*

---

<!-- .slide: data-state="subtitle" -->
# Écrire du JavaScript moderne

---

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

### Un exemple

```js
class Polygon {
  constructor(height = 100, width = 300) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log(`Hi, I am a ${this.name}`);
  }
}

let p = new Polygon(300, 400);
p.sayName();
```

--

### Compatibilité de ES6

[https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

* Chrome 56/57&nbsp;: 97%
* Edge 15&nbsp;: 95%
* Firefox 50&nbsp;: 92%
* IE 11&nbsp;: 11%

Comment utiliser ES6 dès maintenant ?
<!-- .element: class="fragment" data-fragment-index="1" -->

--

<!-- .slide: data-background="#f5da55" -->
![Babel](images/babel.svg)

Pour transpiler ES6 -> ES5
<!-- .element: class="fragment" data-fragment-index="1" -->

--

```sh
npm install --save-dev babel-cli
```

package.json
```json
{
  "name": "my-project",
  "version": "1.0.0",
    "scripts": {
       "build": "babel src -d lib"
    },
  "devDependencies": {
    "babel-cli": "^6.0.0"
  }
}
```

```sh
npm run build
```

---

<!-- .slide: data-background="#294E80" -->
![TypeScript](images/typescript.svg)

--

## TypeScript

TypeScript est un langage dérivé du JavaScript, qui ajoute la notion de **types**.

```ts
function greeter(person: string) {
    return "Hello, " + person;
}
```

--

### Avantages

* Robustesse
* Documentation du code
* Autocomplétion dans l'éditeur

--

```sh
npm install -save-dev typescript
```

package.json
```json
{
  "name": "my-project",
  "version": "1.0.0",
    "scripts": {
       "build": "tsc src --outDir lib"
    },
  "devDependencies": {
    "typescript": "^2.1.0"
  }
}
```

```sh
npm run build
```

---

[http://stateofjs.com/2016/flavors/](http://stateofjs.com/2016/flavors/)

---

<!-- .slide: data-state="subtitle" -->
# Modules

---

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

---

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

export default class Square extends Polygon {

    // ...
}
```

`main.js`

```js
import Square from './square';

let square = new Square();

// ...
```

--

Heu... Ce n'est pas encore supporté par les navigateurs...
Comment on fait ?

* Conversion en module AMD + Require.js
* Ou utilisation d'un *module bundler*&nbsp;: Webpack

---

<!-- .slide: data-state="subtitle" -->
# Outils de build

---

<!-- .slide: data-background="#2B3A42" -->
![Webpack](images/webpack.svg)

--

Webpack est un *module bundler*&nbsp;:

1 *Parsing* de fichiers JavaScript (modules)
2. Construction d'un arbre de dépendances
3. Génération de *bundles*

Tant qu'à parser des fichiers, il peut parser et manipuler d'autres types de fichiers&nbsp;: TypeScript, CSS, images, templates, etc.
<!-- .element: class="fragment" data-fragment-index="1" -->

--

![Webpack](images/webpack-deps.svg)

--

```sh
npm install --save-dev webpack
```

package.json

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
      "build": "webpack"
  }
}
```

```sh
npm run build
```

--

webpack.config.js

```js
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  }
}
```

--

### babel-loader

webpack.config.js

```js
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
}
```

--

### ts-loader

webpack.config.js

```js
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  }
}
```

---

[http://stateofjs.com/2016/buildtools](http://stateofjs.com/2016/buildtools/)

---

<!-- .slide: data-state="subtitle" -->
# Préprocesseurs CSS

---

![SASS](/images/sass.svg)

--

## SASS

[http://sass-lang.com/guide](http://sass-lang.com/guide)

--

### sass-loader

```sh
npm install --save-dev sass-loader node-sass
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader'
        ]
      }
    ]
  }
}
```

--

```js
import css from 'file.sass';
```

---

![LESS](images/less.svg)

--

## LESS

[http://lesscss.org/features](http://lesscss.org/features/)

--

### less-loader

```sh
npm install --save-dev less-loader less
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }
    ]
  }
}
```

--

```js
import css from 'file.less';
```

---

![PostCSS](images/postcss.svg)

--

## PostCSS

Système de plugins préprocesseurs&nbsp;:

* Autoprefixer
* CSS Modules
* ...

---

<!-- .slide: data-state="subtitle" -->
# Analyse syntaxique

---

![ESLint](images/eslint.svg)

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

<!-- .slide: data-state="subtitle" -->
# Tests

---

* Karma (test runner)
* karma-webpack
* Jasmine / Mocha

---

[http://stateofjs.com/2016/testing](http://stateofjs.com/2016/testing/)

---

<!-- .slide: data-state="subtitle" -->
# Documentation

---

* ESDoc
* Typedoc

---

<!-- .slide: data-state="subtitle" -->
# D'autres outils ?

---

* webpack-dev-server
* json-server
* backpack