// syncronous code => follows sequence 

// asyncronous code => out of sequence 
    // ex-> tasks that take time , accessing database;

console.log("start");
console.log("this is syncronous ");
console.log("end");

console.log("now asynchronous");

console.log("start");
setTimeout(()=> console.log("this is asynchronous") , 5000);
console.log("end");


// promises

const promise = new Promise((resolve , reject) => {
    let fileloaded = true;

    if(fileloaded){
        resolve("file loaded");
    }
    else{
        reject("file not loaded");
    }
});

promise.then(value => console.log(value)).catch(error => console.log(error));