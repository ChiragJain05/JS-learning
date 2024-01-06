// Objects 

const car = {
    model : "mustang",
    color:"black",
    year:"1969",

    drive : function(){
        console.log("john wick drives the car");
    }
};


console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive();

// this keyword 

const car2 = {
    model : "laferrari",
    color:"red",
    year:"2013",

    // drive : function(){
    //     console.log(`he is driving a ${model}`);
    // }

    // this will throw an error


    drive : function(){
        console.log(`he is driving a ${this.model}`);
    }
};


console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();


// classes 

class player {
    score = 0;

    pause(){
        console.log("you paused the game");
    }

    exit(){
        console.log("you exit the game");
    }
}

const player1 = new player();
const player2 = new player();

player1.score = 10;
player2.score = 20;
console.log(player1.score);
console.log(player2.score);

player1.pause();
player1.exit();


// constructors

class student{
    constructor(name , age , gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new student("cj" , 18 , 10);
const student2 = new student("xx" , 19 , 9);

student1.study();
student2.study();

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);