// foreach function and callbacks


let fruits = ["apple" , "banana" , "mango"];
fruits.forEach(capitalize);
fruits.forEach(print);

function capitalize(element, index , array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}

// map function

let numbers = [1,2,3,4,5];
let sqrs = numbers.map(sqr);


sqrs.forEach(printsqr);
function sqr(element){
    return Math.pow(element,2);
}
function printsqr(element){
    console.log(element);
}

// filter 

let ages = [12, 13, 18 , 23, 45];
let adults = ages.filter(checkage);
console.log("adults are :")
adults.forEach(print);

function checkage(element){
    return element>=18;
}