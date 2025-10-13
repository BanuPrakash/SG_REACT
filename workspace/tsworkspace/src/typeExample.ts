
type Product = {
    id?: number;
    name: string;
    price: number;
}

let product: Product = {
    id: 1,
    name: "Laptop",
    price: 1500
};

function addProduct(p: Product): void {
    console.log(`Product Added: ${p.name} at $${p.price}`);
}

addProduct(product);

addProduct({"name": "Phone", "price": 800});