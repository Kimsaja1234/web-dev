/*function sum(x, y) {
    console.log("The sum is", x + y);
}

function product(x, y) {
    console.log("The product is", x * y);
}

function difference(x, y) {
    console.log("The difference is", x - y);
}

sum(4, 5);
product(4, 5);
difference(4, 5);*/
/*function checkEvenOdd(num) {
    return num % 2;
}

let x = 6;*/
/*let x=prompt ("Enter any number to check even or odd");
//console.log
alert('the number is even');
let result = checkEvenOdd(x);

if (result == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}*/
/*let age = prompt("Enter your age: ");
let text = (age < 18) ? "You are a minor." : "You are an adult.";
console.log(text);
alert(text);*/
/*let fruits = ["apple", "banana", "mango"];
//console.log(fruits[0]);
fruits.shift();
fruits.unshift("orange");
for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
}
const mygirls = ["sita", "gita", "laxmi"];
const myboys = ["ram", "shyam", "hari"];
// mygirls.concat(myboys);
const mychildren = [...mygirls, ...myboys,"arpit","kaustuv"];
document.getElementById("demo").innerHTML = mychildren;*/
const b = document.getElementsByClassName('para');

for (let i = 0; i < b.length; i++) {
    let number = i + 1;

    if (number % 2 == 0) {
        b[i].innerHTML = `${number} is Even`;
    } else {
        b[i].innerHTML = `${number} is Odd`;
    }
}