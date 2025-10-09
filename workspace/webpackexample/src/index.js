import  add, {multiply, PI} from "./lib";
import Product from "./Product";

console.log("Addition:", add(2, 3)); // 5
console.log("Multiplication:", multiply(2, 3));
console.log("Value of PI:", PI);

let product = new Product("iPhone 16", 89000.00);

console.log(product.getName(), product.getPrice());

let React = {
    createElement :(tag, props, ...children) => {
        return {
            tag,
            props: {...props, children}
        }
    }
}

// JSX
let ProductCard = <div className="card">
    <h2>{product.getName()}</h2>
    <p>Price: {product.getPrice()}</p>  
</div>

console.log(ProductCard);

function render(element, container) {
    if (typeof element === "string" || typeof element === "number") {
        let textNode = document.createTextNode(element);
        container.appendChild(textNode);
        return;
    }

    let domElement = document.createElement(element.tag); //div, h1

    // if (element.props) {
    //     Object.keys(element.props)
    //         .filter(key => key !== "children")
    //         .forEach(key => {
    //             element[key] = element.props[key];
    //         });
    // }

    if (element.props && element.props.children) {
        element.props.children.forEach(child => render(child, domElement));
    }

    container.appendChild(domElement);
}   


render(ProductCard, document.getElementById("root"));