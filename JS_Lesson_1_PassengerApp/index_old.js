// document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log("count:", count);

// // note: JS works top-down meaning it needs declaration before usage, this will not work:
// console.log("myAge:", myAge);
// let myAge = 27;

// // 1. Create 2 var; myAge, humanDogRatio (1:7)
// let myAge = 27;
// let humanDogRatio = 7;
// // 2. Multiply the 2 together and store result in myDogAge
// let myDogAge = myAge * humanDogRatio;
// // 3. Log myDogAge to console
// console.log("myDogAge:", myDogAge);

// // Reassignments
// let count = 5;
// // count = 3;
// // count = 1;
// count = count + 1;
// count = count + 10;
// count = count - 13;
// console.log("count:", count);

// // 1. Create a var; bonusPoints (initialized as 50, increase too 100)
// let bonusPoints = 50;
// console.log("bonusPoints:", bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log("bonusPoints:", bonusPoints);
// // 2. Decrease it down to 25, then increase it to 70
// bonusPoints = bonusPoints - 75;
// console.log("bonusPoints:", bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log("bonusPoints:", bonusPoints);

// intialize count as 0
let count = 0;
// listen for clicks on increment button
// increment count var when button is clicked
function increment() {
  console.log("Button was clicked!");
  count = count + 1;
  console.log(count);
}
// change count-el in HTML to reflect new count

// // Create a function that logs out 42
// function print42() {
//   console.log(42);
// }
// // Call the function
// print42();

// // function example
// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// // Setting up the race
// countdown();
// // Go!
// // Players are running the race
// // Race is finished

// // Get ready for next round
// countdown();

// // Create a function that logs out the sum of all lap times

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function sumLap() {
//   let totalTime = lap1 + lap2 + lap3;
//   console.log("Sum of laps:", totalTime);
// }

// sumLap();

// Create a function that increments the lapsCompleted var with one
// Run it 3 times

let lapsCompleted = 0;
console.log("lapsCompleted:", lapsCompleted);

function incrLapsCompleted() {
  lapsCompleted = lapsCompleted + 1;
}

incrLapsCompleted();
console.log("lapsCompleted:", lapsCompleted);
incrLapsCompleted();
console.log("lapsCompleted:", lapsCompleted);
incrLapsCompleted();
console.log("lapsCompleted:", lapsCompleted);
