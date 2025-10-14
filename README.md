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

Handling Forms:
1) Controlled Components
2) Uncontrolled Components

npm install @faker-js/faker

==============

Multi Stage Processing of Form Data:

{
    "loginData": {
        "email": "",
        "password":""
    },
    "personal": {
        "firstName":"",
        "lastName": ""
    },
    "professional": {
        "":
    }
}

========================

Recap:
* NodeJS, webpack and vite [From FEB 2025]
* Presets: babel/preset-env - syntax transform and polyfills
@babel/preset-react: looks out for React.createElement

React.createElement() takes JSX -> JS Object -> renderer [react-dom / react-native/ react-tv,..]

npm create vite@latest to create react projects --> React 19 version
npx create-react-app someapp to create react projects prior to react 19 version

```
* React.createElement() - JSX to JS object
* class component extends Componet, override render()
render() returns JSX -> React.createElement() - JS object
* functional component --> JSX -> React.createElement() - JS object
```

class component - state, this.setState({}), componentDidMount(), componentDidUpdate(), componentWillUnMount()

React 16.8 version onwards class component is discouraged, functional components are preferred.
React Hooks was introduced for only functional components to get class component capabilities in functional components
* useState() -- to declare state variable
* useEffect() - lifecycle methods
* useReducer() - prefer instead of useState() if conditionally mutate the state, mutation depends on previous state.

React Context: to avoid props-drill
Provider -> places data into Context
Consumer -> gets data from Context
* useContext() for Consumer

-------

react-router-dom: for SPA
1) Different URls different Views has to be rendered
2) Lazy loading of Components, lazy and Suspense
3) MUI, bootstraps

* useNavigate()
* useParams()
* useSearchParams()

json-server to Fake RESTful WS.
=========

Day 3 and 4:
* TypeScript
* Pending hooks
* Predictable State Managment

memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive calls to pure functions and returning the cached result when the same inputs occur again. 

HOF: 
* function taking function as argument
* function returning function 

* memo() HOC
* useCallback() to memoize function defintion

=============

Upto React 17 rendering was stack based.
Old cold:
render(<App/>, document.getElementById("root"))
React 18 made Fiber Architecture as the default mechanism for rendering
New Code:
createRoot(document.getElementById('root')).render(<App/>);

```
export default function App() {
    let [count, setCount] = useState(10);
    return <div>
            <h1> Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}> + </button>
    </div>
}

```

* useDefferedValue() to preempt.
* useMemo() check this vs memo();

==============================================

TypeScript
* statically typed language
* Detect errors are compilation time rather than at runtime
* Documentation
* Better tooling

tsworkspace> npm init --y
tsworkspace> npm i typescript
installs tsc and types defintions

=====
Basic types:
1) string
2) number
3) boolean

===

tsc --init
 rootDir,
 outDir,
 include,
 "noEmitOnError": true,

 =======
 1) string
 2) number
 3) boolean
 4) any
 5) unknown
 6) type
 to define the shape of object
7) infer

8) interface
9) generic function
10) typepredicate
11) typeassertion
12) index signature
13) keyof
14) using JS in TS
15) class type
16) decorators
...

interface can be used instead of 'type' to declare a shape of object.

```
    type Product = {
        id: number,
        name: string
    }
    interface Product {
        id: number,
        name: string
    }

```
interface can be extended

```
 interface Mobile extends Product {
    connectivity: string,
    camera: string
 }

```

interface can be used for realization relationship

```
    interface Renderer {
        render(): JSX;
    }

    class TvRenderer implements Renderer {
        ...
        render() : JSX {

        }
    }

    class DomRenderer implements Renderer {
        ...
        render() : JSX {

        }
    }
```

====================

Using JS in TypeScript

npm i underscore
https://github.com/DefinitelyTyped/DefinitelyTyped

@types/react
@types/underscore
@types/node

==========

Predictable State Management

Context: for Statemanagement in case of small applications, not designed for state mangement.

React -> Unidirectional data flow
MVC architectural pattern - Model View Controller 

Flux Architecture -> Unidirectional data flow

Redux
1) Store --> A Single Store per application - Single Source of Truth
2) Reducers - functions takes state and action -> returns new state
3) Root Reducer -> combines reducers

Bridge: react-redux

{
    "cart": {
        "cartItems": [],
        total: 0,
        quantity: 0
    },
    "profile": {
        "avatar": "banu.png",
        "name": "Banu Prakash"
    }
}

// state is from redux store
function mapDispatchToProps(dispatch) {
    return {
        "addToCart": item => dispatch({"ADD_TO_CART", payload: item}),
        "clear": () -> dispatch({"CLEAR_CART"})
    }
}

connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


props.addToCart({..})

props.clearCart();

https://immutable-js.com/
https://immerjs.github.io/immer/
https://autodux.in/

=======================

Day 4:

Recap of Day 3:
1) useCallback
2) memo
3) useDefferedValue
4) TypeScript
5) Introduction to Redux
* Store: place where state resides
* Reducer: function which takes state for store, action from view; returns new state based on action type.
* Root Reducer: locus between store and reducer
react-redux: bridges react and redux
connect(mapStateToProps, mapDispatchToProps)(App)


Redux DevTool: Time travel debugging

=========

npm create vite@latest
reduxexample
react
javascript

Terminate Server
reduxexample> npm i redux react-redux


```
div pollution
Using Fragment instead of <div>
<React.Fragment>

</React.Fragment>

React Fragment: <> </>
```

Redux Toolkit:
npm install @reduxjs/toolkit
useSelector() : The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.

let {avatar} = useSelector(state => state.profile.avatar);

useDispatch() : quivalent to the mapDispatchToProps argument to connect conceptually.

Migrate shopappts version to use Redux Toolkit instead of Contex for State Management

============

copy everything except node_modules into new project
npm i 

* Remove all references to Context 
1) remove context folder
2) remove reducers folder
3) remove ref of Context in main.tsx
4) Cart.jsx
5) Navbar.jsx
6) ProductCard.tsx

npm install @reduxjs/toolkit react-redux

createSlice 

```

const counterSlice = createSlice({
  name: 'counter',
  initialState: {count: 0},
  reducers: {
    increment: (state, action) => state.count + action.payload,
    decrement: (state) => state.count - 1,
    clear: (state) => state.count = 0 
  },
})


dispatch(increment(10))

dispatch(decrement())

dispatch(clear())

dispatch(addToCart({id: 1, title: '..', amount: price, ...}))

```