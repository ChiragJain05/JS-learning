// inheritance 

class animal{
    alive = true;
    // super constructor
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating `);
    }
    sleep(){
        console.log(`${this.name} is alive `);
    }
}


class rabbit extends animal{
    
    

    constructor(name , age , walkspeed){
        super(name,age);
        this.walkspeed = walkspeed;
    }

    walk(){
        console.log(`${this.name} is walking `);
    }
}

class fish extends animal{
    


    constructor(name , age , swimspeed){
        super(name,age);
        this.swimspeed = swimspeed;
    }
    swim(){
        console.log(`${this.name} is swimming `);
    }
}

class hawk extends animal{
    

    constructor(name , age , flyspeed){
        super(name,age);
        this.flyspeed = flyspeed;
    }

    fly(){
        console.log(`${this.name} is flying `);
    }
}


const rabbit1 = new rabbit("rabbit" , 12 , 24);
const hawk1 = new hawk("hawk" , 8 , 50);
const fish1 = new fish("fish" , 3 , 12);

console.log(rabbit1.alive);
console.log(hawk1.alive);
console.log(fish1.alive);

rabbit1.eat();
fish1.eat();
hawk1.eat();

rabbit1.walk();
fish1.swim();
hawk1.fly();

console.log(rabbit1.name);
console.log(rabbit1.age);
console.log(rabbit1.walkspeed);

console.log(fish1.name);
console.log(fish1.age);
console.log(fish1.swimspeed);

console.log(hawk1.name);
console.log(hawk1.age);
console.log(hawk1.flyspeed);


// anonymous object

class card{
    constructor(value , suit){
        this.value = value;
        this.suit = suit;
    }
}

cards = [
    new card("A" , "hearts") ,
    new card("A" , "diamond") ,
    new card("A" , "spade") ,
    new card("A" , "club") ,
    new card("1" , "hearts") ,
    new card("1" , "diamond") ,
    new card("1" , "spade") ,
    new card("1" , "club") ,
]

cards.forEach(card => {
    console.log(`${card.value} ${card.suit}`);
});



// error handling 

try {
    let num = window.prompt("enter a no.");
    num = Number(num);

    if(isNaN(num)) throw "enter a no.";
    if(num == "") throw "enter something";

} catch (error) {
    console.log(error);
}
finally{
    console.log("this always executes");
}