var message;
message = 'Hello, World!';
console.log(message);
console.log(typeof message);
var age = 23;
console.log(typeof age);
var wired;
console.log(typeof wired);
var Kull = null;
console.log(typeof Kull);
let h = true;
console.log(typeof h);

let result = 1;
console.log(result);
result = ++result;
console.log(result);
result = ++result +5;
console.log(result);
result = result+20;
console.log(result);
result = result +10;
console.log(result);

let lang ="javascript";
console.log("hello " + lang + " 1001 ");

let a = "red";
let b = "blue";
c=a;
a=b;
b=c;
console.log(a);
console.log(b); 


// if - else 

let hour = 25;

if ( hour>= 6 && hour <12  ) {
    console.log('Good Morning');
}
else if (hour>=12  && hour <18 ) {
    console.log ('good afternoon') ;
}
else if (hour>= 18 && hour<20){
    console.log ('good evening')
}
else if (hour>= 20 && hour<24){
    console.log ('good night')
}
else {
    console.log('dont make a joke')
}

let divElement = document.getElementById("container");
let container = "";
for (let i= 0; i<=10; i++){
    container += "<p>number"+ i+"</p>";

}

divElement.innerHTML = container;


var divElement = document.getElementById("container");

for (var i = 1; i <= 5; i++) {
    
    var newElement = document.createElement("p");
    newElement.textContent = "Number " + i;

    divElement.appendChild(newElement);
}


let number = max(1,2)
console.log( number);

function max(a,b) {
    return (a>b) ? a:b;
}

// let Hey = resolution (500,700)
//   console.log(Hey);

// function resolution(width, height) {
//     return (width>height)
    
// }


let Hey = resolution (800,700)
console.log(Hey);

function resolution(width, height) {
  if (width>height){
      return 'landscape';
  } else {
      return 'portrait';
    }
}

const person = {
    name: "Harishankar",
    age: 21
    
};

for (const key in person) {
    console.log(key + ":",person[key])
}


for (const details of person){
    console.log(details);
}

const output = fizzBuzz (5);
console.log ( output);

function fizzBuzz(input){
    if (typeof input !=='number')
    return 'Not a Number';
    if (input % 3 == 0)
     return 'Fizz';
    if (input % 5 == 0)
      return'Buzz';
    if ((input % 3 == 0) && i(input % 5== 0)) 
     return'fizzBuzz';
    }


    checkspeed(180);

function checkspeed(speed) {
    const speedlimit = 70
    const kmperpoint = 5
    if (speed <= speedlimit ) {
      console.log('ok, Keep it')
        
    } else {
        const point = Math.floor((speed-speedlimit)/ kmperpoint);
        if(point>= 12)
         console.log('license suspended');
        else
         console.log ('points', point);  
        
    }
}