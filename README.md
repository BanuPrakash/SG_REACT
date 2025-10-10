# REACT
```
Banu Prakash C
Full Stack Architect,
Co-founder Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/SG_REACT

Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

node --version
```

Server Side Rendering
* PHP
* Spring
* .NET Razor
Client Side Rendering for Web application
* JS and DOM
JS needs JS engine
- V8 by Google - Chrome and NodeJS
- SpiderMonkey - FireFox
- Continum - Edge / V8

var name = "Roger" // string
name.toUpperCase()
name = 24; // number
name++;

* jQuery
* Templates
* MVC Frameworks
- Backbone
- AngularJS
- Angular
- React
- Vue
- Svelete

=========

https://www.youtube.com/watch?v=8pDqJVdNa44

==========

Why NodeJS?
* Building Web applications
* Built real. time applicaitons like chatbot
* Built API like Spring Boot.

Why nodejs for Building Web applications?
1) we can write code using latest JS / TypeScript / CoffeeScript/ LiveScript/ DART
transpile/transcompiler / compiler

2) minify
3) uglify
```
 function addProduct(product) {
     var products = [];
     products.push(product);
 }
After minify:
function addProduct(product){var products = [];products.push(product);}

After Uglify:
function _a(_p){var _pr=[];_pr.push(_p);}

```
4) Bundling

index.html
```
    <script src="productsSevice.js"> </script>
    <script src="customerSevice.js"> </script>
    <script src="orderSevice.js"> </script>
    <script src="paymentSevice.js"> </script>

With Bundling:

<script src="vendor.js"> </script>
<script src="bundle.js"> </script>
```

JavaScript Build tools:
* Grunt
* Gulp
* Webpack
* parcel
* Vite [veet]

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting
========
Package Managers:
1) NPM - default
2) YARN
3) PNPM

webpackexample> npm init --y
webpackexample> npm i babel-loader @babel/core @babel/preset-env -D


@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s)

A polyfill is a code snippet, usually JavaScript, that provides support for a new feature in older web browsers or environments that lack native support for it. 

Promise.resolve(() => "done"); 

webpackexample> npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.



npm install @babel/preset-react

https://github.com/chentsulin/awesome-react-renderer

=============

react
react-dom

How to create a skelton/scaffolding code for react
1) using webpack
npx create-react-app sampleapp
2) using vite
npm create vite@latest
customerapp
react
javascript

Thinking in react:
1) Atoms: UI components like button, image, label
2) Molecules: grouping atoms like Card
3) Organisms: Navbar
4) Template: 
5) Page

mui / react-bootstrap / kendoUI / PrimeReact / Adobe Web Specturm

```
  src
    features
        products
            ...
        cart
            ...
        payment
            ...
    common
        atoms
            Button.jsx
            Label.jsx
        molecules
            Card.jsx  

```

React.createElement() -- Main API for JSX to JS
functional Componenet: returns JSX -> React.createElement (99 % of code will be from React 16.8+)
class Component -> render() returns JSX -> React.createElement

===============

Unit Testing React Components:
JS Testing frameworks: Jasmine / Mocha / JEST / Vitest
React Testing Library 

npm i @testing-library/react @testing-library/dom -D

RTL provides queries in screen object
provides render() to render into Memory - No UI

screen.debug() --> display DOM in console

npm install  vitest -D
npm install  jsdom -D


========
npm i @vitest/coverage-v8

npm i @testing-library/jest-dom -D

vitest --coverage --coverage.inclue=src/*.jsx

==============

Mounting Phase:
constructor () intialize
render() -- Initial UI
componentDidMount() --> API Call and update the state

Updating Phase --> state changes
shouldComponentUpdate() -> true -> render() -> componentDidUpdate()
Make depedendent API calls
Functional Components 
====================

React Hooks:
1) useState()
2) useEffect()
3) useReducer()
4) useRef()
5) useContext()

```
 export default class Counter extends Component {
    state = {
        count: 0,
        name: 'Roger'
    }

    setName(n) {
        this.setState({
            name: n
        })
    }

    setCount(c) {
        this.setState({
            count: c
        })
    }
    render() {
        return (

        )
    }
 }

```
CSS Framework for RWD: npm i bootstrap
=========

React Context:
React Context is a mechanism in React for sharing data that can be considered "global" to a tree of React components without explicitly passing props down at every level.

Shopping Application:
1) react-router-dom
client side Routing
Lazy loading of components

2) React Context: for state management
3) MUI
4) bootstrap

Component List:
1) NavbarComponent
2) ProductList
3) ProductCard
4) Details
5) Default
6) CartComp
7) CartRow

==========

npm i react-router-dom @mui/material @emotion/react @emotion/styled
npm i bootstrap

====
useReducer() hook has to be used instead of useState() if:
1) state is complex
2) conditionally mutate the state
3) state mutation depends on previous state

```
    cart
    {
        "cartItems": [
                {"id": 5, "title": "A", qty: 4},
                 {"id": 1, "title": "T", qty: 1}
        ],
        total: 89891.33,
        quantity: 2
    }

```

dispatch({"type": "ADD_TO_CART", "payload":  {"id": 5, "title": "A", qty: 4}})

======

FakeRESTful API
npx json-server --watch data.json --port 1234

npm i axios

Prefer axios over fetch

=======
