// Declare and initialize an Array

/*
Empty Array
*/

const nums = [];


/*
    Initialized Arrays
*/

const evenNumsToTen = [2, 4, 6, 8, 10];

const familyNames = ["Christopher", "Bridget", "Con", "Robert", "Bernard", "Bernadette", "Gerard", "Helen", "Maura", "Noel", "Ann"];

const everything = [101, "Kitchen Sink", { foodName: "Burger", cost: 5.00 }];


console.log(everything[0]);
console.log(everything[2].foodName);
console.log(everything[2]["foodName"]);

// Log content to document
let arraySpace = document.querySelector(".array");
arraySpace.textContent = familyNames.join("--"); // returns string with all contents concated with given separator
// ... or to console
console.log(evenNumsToTen);

// "New up" an instance of an Array
const pets = new Array("Stella the Dalmation", "Cody the Corgi", "Mango the Cat", "Lucy the Python");
arraySpace.textContent = pets.join("--");

for (let index = 0; index < pets.length; index++)
{
    console.log(pets[index]);
}