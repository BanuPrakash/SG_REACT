
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

type Address ={
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

type Geo = {
  lat: string;
  lng: string;
}

// Partial Type is a Mapped Type
// It makes all properties optional
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
function addUser(user: Partial<User>): void {
    console.log(`User Added: ${user.name} (${user.email})`);
}

addUser({
    id: 1,
    name: "Leanne Graham",
    username: "Bret"});

// deduce a type for datatype

let user = {
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
"street": "Kulas Light",
"suite": "Apt. 556",
"city": "Gwenborough",
"zipcode": "92998-3874",
"geo": {
"lat": "-37.3159",
"lng": "81.1496"
}
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
};

type DataType = typeof user.company;

