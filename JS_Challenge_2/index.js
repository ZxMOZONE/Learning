// // Lesson 1: Objects and Functions
// // Create a person object with 3 keys: name, age,country
// // Set the key values with your credentials
// let person = { name: "Hazman", age: 27, country: "Malaysia" };

// // Create a function logData() that uses a person object to create a string in the following format:
// // "Per is 35 years old and lives in Norway"
// function logData() {
//   let logEl =
//     person.name +
//     " is " +
//     person.age +
//     " years old and lives in " +
//     person.country;

//   console.log(logEl);
// }

// // Call the logData() function to verify that it works
// logData();

// --------------------------------------------------------------------------------------------------------

// // Lesson 2: if else
// let age = 67;

// // less than 6 -> free
// // 6-17 -> child discount
// // 18-26 -> student discount
// // 27-66 -> full price
// // more than 66 -> senior citizen discount

// // Create a conditional statement that logs out the discount
// // the passenger will get based upon the value of the age variable

// let i = 0;
// let ageSet = [0, 6, 18, 27, 67];
// let discount = [
//   "free",
//   "child discount",
//   "student discount",
//   "full price",
//   "senior citizen discount",
// ];

// function compare() {
//   if (age < ageSet[1]) {
//     console.log(discount[0]);
//   } else if (age < ageSet[2]) {
//     console.log(discount[1]);
//   } else if (age < ageSet[3]) {
//     console.log(discount[2]);
//   } else if (age < ageSet[4]) {
//     console.log(discount[3]);
//   } else if ((age) => ageSet[4]) {
//     console.log(discount[4]);
//   }
// }

// // for (i = 0; i < 101; i += 10) {
// //   age = i;
// //   console.log(age);
// //   compare();
// // }

// compare();

// --------------------------------------------------------------------------------------------------------

// // Lesson 3: Loops and Arrays

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// /*
// Use a for loop to log the following:

// Top 5 largest countries in the world:
// - China
// - India
// - USA
// - Malaysia
// - Pakistan
// */

// console.log("Top 5 largest countries in the world:");
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

// --------------------------------------------------------------------------------------------------------

// // Lesson 4: push, pop, unshift, shift challenge

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// // Add China and Pakistan back into the respective places
// // Use push() and pop() and their counterparts unshift() and shift()

// console.log(largeCountries);

// largeCountries.pop();
// largeCountries.push("Pakistan");
// console.log(largeCountries);

// largeCountries.shift();
// largeCountries.unshift("China");
// console.log(largeCountries);

// --------------------------------------------------------------------------------------------------------

// // Lesson 5: Logical Operators

// let dayOfMonth = 13;
// let weekday = "Friday";

// // If it is Friday the 13th, log out spooky face: Argggh!
// // Use logical AND operator

// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("Argggh!");
// }

// --------------------------------------------------------------------------------------------------------

// // Lesson 6: Rock Papper Scissor

// let hands = ["rock", "paper", "scissor"];

// // Create a function that returns a ranfom item from the array
// let randomState = Math.floor(Math.random() * 3);

// function randomHands() {
//   return hands[randomState];
// }

// console.log(randomHands());

// --------------------------------------------------------------------------------------------------------

// Lesson 7: Sorting Fruits

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.querySelector("#apple-shelf");
let orangeShelf = document.querySelector("#orange-shelf");

// Create a function that sorts apple/orange onto their shelves.
// Use for loop, conditional statement, textContent
function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      console.log(fruit[i]);
      appleShelf.textContent += "🍎";
    } else {
      console.log(fruit[i]);
      orangeShelf.textContent += "🍊";
    }
  }
}

sortFruit();
