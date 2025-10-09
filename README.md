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

index.html
<script src="bundle.$dvsdf25.js"></script>