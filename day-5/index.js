// arrow function 

const greeting  = (name) => console.log("hello ",name);

greeting("cj");


// Shuffle array

const shuffle = (array) => { 
    let currentIndex = array.length;

    while(currentIndex!=0){
        let randomIndex = Math.floor(Math.random()*array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }


};

let cards = ["a" , "b" , "c" , "d" , "e" , "f"];
shuffle(cards);
console.log(cards);


// Map 

const store = new Map([
    ["item-1",20],
    ["item-2",70],
    ["item-3",10],
    ["item-4",50],
]);

store.forEach((value , key) => {
    console.log(`${key} = ${value}`);
    
});


// get method

let cart = 0;

cart += store.get("item-1");
cart += store.get("item-2");
console.log(cart);

// set method
console.log("set-method")
store.set("item-5",90);
store.forEach((value , key) => {
    console.log(`${key} = ${value}`);
    
});

// delete method
console.log("delete-method");
store.delete("item-3");
store.forEach((value , key) => {
    console.log(`${key} = ${value}`);
    
});
// size of Map
console.log(store.size);