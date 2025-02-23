// Create an array with a single string, "Strawberry Cream"
const pancakes = ["Strawberry Cream"];
console.log(pancakes);

// add an element to end of array, with push method
pancakes.push("Blueberry Flaxseed");
console.log(pancakes.join(" - "));

// add more elements with push
pancakes.push("Chocolate Chip", "Rum Raisin", "Valencia Orange");
console.log(pancakes.join(" - "));

// pop pancakes off the stack
let pancake = pancakes.pop();
console.log(`Popped the ${pancake} pancake!`);
console.log(`The number of items in the pancakes array is ${pancakes.length} : ${pancakes.join(" - ")}`);