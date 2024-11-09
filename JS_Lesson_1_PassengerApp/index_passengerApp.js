let count = 0;
let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

function increment() {
  let oldcount = count;
  count += 1;
  countEl.textContent = count;
  console.log(
    "INCREMENT is clicked |",
    "count:",
    oldcount,
    "-->",
    countEl.textContent
  );
}

function save() {
  console.log("SAVE is clicked |", "Count:", count);

  let countStr = count + " - ";
  saveEl.textContent += countStr;

  // RESET the counter
  count = 0;
  countEl.textContent = 0;
}

function reset() {
  let oldcount = count;
  count = 0;
  countEl.textContent = 0;
  console.log("RESET is clicked |", "Count:", oldcount, "-->", count);
}
