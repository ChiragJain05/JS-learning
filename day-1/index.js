
// print in console
console.log("hello");

// create a alert
window.alert("hello this is a alert");


// variables

let x = 5;
let str = "hii";
let bool = true;

console.log(x);
console.log(str);
console.log(bool);

// typeof
console.log(typeof(x));
console.log(typeof(str));
console.log(typeof(bool));


// const keyword
// a variable that can't be changed

// const X1 = 5;
// console.log(X1);
// X1 = 7; // this will throw an error
// console.log(X1);



// changing html 
document.getElementById("heading").innerHTML= x + " is a " + typeof(x) ; // calling html elemnts by their Id 
document.getElementById("subheading").innerHTML = str + " is a " + typeof(str) ;


// arithmetic operations

let num1 = 10, num2 = 3;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);
console.log(num1%num2);

// taking input from users using prompt

let input1 = window.prompt("enter your name");
console.log(input1);

// taking input from user using html

let username;
document.getElementById("mybtn").onclick = function(){
    username = document.getElementById("mytxt").value;
    console.log(username);

    document.getElementById("lbl").innerHTML = "hello" + username ;
}

// type conversion
// js take input in form of strings

let age = window.prompt("enter age");
console.log(typeof(age));
age = Number(age);
console.log(typeof(age));
