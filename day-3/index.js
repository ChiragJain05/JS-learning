// function -> a set of instructions 

function intro(){
    console.log("hello");
    console.log("I am cj");
    console.log("I am 18");
    console.log("I love JS");
}

intro();

let width = window.prompt("width");
let height = window.prompt("height");
let result = area(width,height);
console.log(result);

function area(width,height){
    return width*height;
}


// template literals (`)

console.log(`width is ${width} , height is ${height} and area is ${result}`);


// ternary operator 
let adult = checkage(14);
console.log(adult);
function checkage(age){
    return age>=18? true  : false ;
}


// arrays 

let fruits = ["apple","banana","orange","mango"];

console.log(fruits);
console.log(fruits[2]);

// push elements
fruits.push("cherry");
console.log(fruits);

// pop 
fruits.pop();
console.log(fruits);

// shift => remove from index 0
fruits.shift();
console.log(fruits);


// unshift => add at index 0 
fruits.unshift("coconut");
console.log(fruits);

// index of element
console.log(fruits.indexOf("coconut"));

// sorting
fruits = fruits.sort();
console.log(fruits);


// 2d array

let veg = ["onion","potato","tomato"];
let fr = ["banana","apple","cherry"];
let grolist = [veg , fr];
for(let list of grolist){
    for(let food of list){
        console.log(food);
    }

}