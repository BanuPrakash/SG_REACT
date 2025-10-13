
// function isString(data:any): boolean {
//     if(typeof data === 'string') {
//         return true;
//     }
//     return false;
// }

// function someTask(data:any) {
//     if(isString(data)) {
//         let str = data as string;
//         console.log(str.toUpperCase());
//     }
// }

// type predicate 
function isString(data:any): data is string {
    if(typeof data === 'string') {
        return true;
    }
    return false;
}

function someTask(data:any) {
    if(isString(data)) {
        // data is cast to string
        console.log(data.toUpperCase());
    }
}

someTask("Hello World");
someTask(45);