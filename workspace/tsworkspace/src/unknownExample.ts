function unknownExample(arg:unknown) {
    if(typeof arg === 'string') {
        console.log(arg.toUpperCase());
    } else if(typeof arg === 'function') {
        arg();
    }
}

unknownExample("Hello World"); // invalid

function doTask2() {
    console.log("Hello");
}

unknownExample(doTask2); //valid