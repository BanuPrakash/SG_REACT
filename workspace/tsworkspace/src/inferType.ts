function doGetProduct() {
    return { id: 1, name: "Pen", price: 20 };
}

// infer is used to deduce a type inside conditional types 

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

type ProductType = ReturnTypeOf<typeof doGetProduct>;

 function addData(id: number, name: string, price: number): void {

 }

type FirstParam<T> = T extends (x: infer U, ...args: any) => any ? U : never;

type FetchFirstParam = FirstParam<typeof fetch>;

let data: FetchFirstParam;

type ParamsType<T> = T extends (...args: infer U) => any ? U : never;

type FetchParams = ParamsType<typeof addData>;