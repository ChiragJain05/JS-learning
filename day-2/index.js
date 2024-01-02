
// Math in js

let x = 3.9;

let a = Math.round(x);
let b = Math.floor(x);
let c = Math.ceil(x);
let d = Math.pow(a,b);
let e = Math.sqrt(x);

let r = Math.random();
console.log(r);

console.log(a, b , c , d , e);

// max and min 

let f = Math.max(a,b,c);
let g = Math.min(a,b,c);

console.log(f , g);


// string properties

let username = "chirag jain";

let a1 = username.length;
let a2 = username.charAt(0);
let a3 = username.indexOf("i");

let no = "123-456-789";

console.log(no);
no = no.replaceAll("-"," ");
console.log(no);

console.log(a1,a2,a3);

// if else statements

let age = window.prompt("enter age");
if(age>18){
    console.log("adult");
}
else{
    console.log("child");
}



// operators 

// && -> AND 
// || -> OR
// ! -> NOT 



// switch statements

let grade = window.prompt("enter your grade");

switch(grade){
    case "A" : 
    console.log("your grade is A");
    break;
    case "B" : 
    console.log("your grade is B");
    break;
    case "C" : 
    console.log("your grade is C");
    break;
    case "D" : 
    console.log("your grade is D");
    break;
    default:
    break;
}

// while loop 

let name = "";

while(name == ""|| name == null){
    name = window.prompt("enter your name");
}
console.log(name);

// do while loop
let marks;
do{
    marks = window.prompt("enter marks");
}while(marks == "" || marks == null);

// for loop

for(let i = 0; i<10; i++){
    if(i == 7){
        break;
    }
    if(i == 3){
        continue;
    }
    console.log(i);
}

// break -> break the loop entierly 
// continue -> skip one iteration

