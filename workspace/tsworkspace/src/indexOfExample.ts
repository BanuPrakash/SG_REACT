// indexof typescript
type UserType = {
    id: number,
    name: string,
    age: number,
    roles:  string[],
    [key:string]: number|string|string[]
}

let superUser:UserType = {
    id: 3,
    name: 'Tim',
    age: 34,
    roles: ["ADMIN", "MANAGER"]
}

console.log(superUser['age']);
console.log(superUser['name']);

let prop = 'age';
console.log(superUser[prop]); // fails

Object.keys(superUser).forEach(key => {
    console.log(key, superUser[key]);
})