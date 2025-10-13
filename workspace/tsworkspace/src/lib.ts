// @ts-ignore
function map(elements, transformForm) {
    // @ts-ignore
    let result = [];
    // @ts-ignore
    elements.forEach(elem => {
            result.push(transformForm(elem));
    })
    // @ts-ignore
    return result;
}


function filter<T>(elements:T[], predicateFn: (elem:T) => boolean): T[] {
    let result:T[] = [];
    elements.forEach(elem => {
        if(predicateFn(elem)) {
            result.push(elem);
        }
    })
    return result;
}

let nos = [5,2,9,6,10,78,13];

let evens = filter(nos, (elem)=> elem % 2 ==0);

let products = [
    {"id": 1, "name" : "A", "category" : "mobile"},
    {"id": 2, "name" : "B", "category" : "tv"},
    {"id": 3, "name" : "C", "category" : "tv"},
    {"id": 4, "name" : "D", "category" : "computer"},
    {"id": 5, "name" : "E", "category" : "mobile"},
    {"id": 6, "name" : "F", "category" : "tv"},

]

let mobiles = filter(products, (p) => p.category === 'mobile');
