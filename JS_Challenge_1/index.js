let firstName = "Hazman";
let lastName = "Hussin";

let fullName = firstName + " " + lastName;

console.log(fullName);

// ------------------------------------------------------

let name = "Linda";
let greeting = "Hi there";

function greetLinda() {
  console.log(greeting + ", " + name + "!");
}

greetLinda();

// ------------------------------------------------------

let myPoints = 3;
let currentEl = document.getElementById("current-el");
let finalEl = document.getElementById("final-el");

function add3Points() {
  myPoints += 3;
  console.log(myPoints);
  currentEl.textContent = myPoints;
}

function remove1Point() {
  myPoints -= 1;
  console.log(myPoints);
  currentEl.textContent = myPoints;
}

function printResult() {
  console.log("Final Points:", myPoints);
  finalEl.textContent = myPoints;
}

function resetPoints() {
  myPoints = 0;
  currentEl.textContent = myPoints;
  finalEl.textContent = myPoints;
}

// ------------------------------------------------------

let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

function purchaseShoes() {
  console.log("ERROR! Cannot Make Purchase(s)!");
  errorParagraph.textContent = "ERROR! Cannot Make Purchase(s)!";
}

// ------------------------------------------------------

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function addNum() {
  let total = num1 + num2;
  console.log(total);
  sumEl.textContent = total;
}

function subtractNum() {
  let total = num1 - num2;
  console.log(total);
  sumEl.textContent = total;
}

function divideNum() {
  let total = num1 / num2;
  console.log(total);
  sumEl.textContent = total;
}

function multiplyNum() {
  let total = num1 * num2;
  console.log(total);
  sumEl.textContent = total;
}

// ------------------------------------------------------
