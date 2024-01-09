
// settimeout

setTimeout(firstmsg, 3000);
setTimeout(secondmsg, 6000);
let timer  = setTimeout(thirdmsg, 9000);

function firstmsg(){
    alert("this is first message");
}

function secondmsg(){
    alert("this is second message");
}

function thirdmsg(){
    alert("this is third message");
}

document.getElementById("mybtn").onclick = function(){
    clearTimeout(timer); // clear timeout method to stop timeout method
}


// set interval method
let count = 0;
let max = window.prompt("enter a no.");
max = Number(max);

const mytimer = setInterval(countUp , 1000);

function countUp(){
    count += 1;
    console.log(count);
    if(count>=max){
        clearInterval(mytimer);
    }
}

let date = new Date;
date = date.toLocaleString();
document.getElementById("head").innerHTML = date;