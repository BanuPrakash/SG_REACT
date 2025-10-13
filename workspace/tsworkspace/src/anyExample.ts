function anyExample(arg:any) {
    arg();
}

anyExample("Hello World"); // invalid

function doTask() {
    console.log("Hello");
}

anyExample(doTask); //valid