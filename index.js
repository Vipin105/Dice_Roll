//Math = built-in object that provides a collection of properties and methods


//Math.PI
/*console.log(Math.PI);
console.log(Math.E);

let x = 3.999;
let y = 2;
let a = 36
let z;

z=Math.round(x);

console.log(z);
console.log(x);
console.log(y);
z = Math.floor(x);
console.log(z);
z = Math.trunc(x); //drops the decimal values 
console.log(z);

z= Math.pow(x, y);
console.log(z);
z = Math.sqrt(a);
console.log(z);
z = Math.log(a);
console.log(z);*/

//Random Number Generator 

/*let randomNum = Math.floor(Math.random() * 7);

console.log(randomNum);

const min = 50;
const max = 100;
let randomNUm2 = Math.floor(Math.random()* (max - min)) + min;
console.log(randomNUm2);*/


const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;



myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}
