// indexof typescript
type UserType1 = {
    id: number,
    name: string,
    age: number,
    roles:  string[]
}

let superUser1:UserType1 = {
    id: 3,
    name: 'Tim',
    age: 34,
     roles: ["ADMIN", "MANAGER"]
}

console.log(superUser1['age']);
console.log(superUser1['name']);


Object.keys(superUser1).forEach(key => {
    console.log(key, superUser[key as keyof UserType1]);
})