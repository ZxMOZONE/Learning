// Grab the welcom-el p and store it in var welcomEl
// Create 2 var (name & greeting) that contains name and greeting that we want to render on page
// Render the welcome message using welcomEl.innerText

let welcomeEl = document.getElementById("welcome-el");
let name = "Hazman";
let greeting = "Welcome back ";

welcomeEl.innerText = greeting + name;

welcomeEl.innerText += " 👋";
