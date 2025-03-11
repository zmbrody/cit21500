// Create a single element queue
const queueOfPeople = ["Bridget"];

// log the array of items
console.log(queueOfPeople);

// Add items to the front of the queue
queueOfPeople.unshift("Thomas");
console.log(queueOfPeople.join(" - "));

queueOfPeople.unshift("Jane", "Rosanna", "Robert", "Patrick", "Ellen");
console.log(queueOfPeople.join(" - "));

// Remove an item from the front of the queue
let served = queueOfPeople.shift();
console.log(served);

console.log(queueOfPeople.join(" - "));
console.log(queueOfPeople.length);

/*
Find in array
*/

// queueOfPeople : Rosanna - Robert - Patrick - Ellen - Thomas - Bridget

// Arrow function defined in call

let selectedPerson =

    queueOfPeople.find((element) => element.startsWith("P"));



console.log("1 - find first name starts with P ", selectedPerson);

// Callback function

const firstNameBeginning = (element) => element.startsWith("P");

selectedPerson =

    queueOfPeople.find(firstNameBeginning);

console.log("2 - find first name starts with P ", selectedPerson);



// Anonymous function defined in call

selectedPerson = queueOfPeople.find(function (element) {

    if (element.startsWith("P"))

        return true;

});

console.log("3 - find first name starts with P ", selectedPerson);

// find all names starting with P
for (let i = 0; index < queueOfPeople.lenght; i++)
{
	if (queueOfPeople[i].startsWith("P"))
	{
		console.log(queueOfPeople[i]);
	}
}

/*
forEach
*/
queueOfPeople.unshift("Pauline");
queueOfPeople.push("Peter");

console.log(queueOfPeople);

console.log(queueOfPeople.join(" - "));



selectedPerson = queueOfPeople.find((element) => element.startsWith("P"));

console.log(selectedPerson);



let letter = "R";

queueOfPeople.forEach((item) => 
{
	//console.log("Array element", item);
	if (item.startsWith(letter))
	{
		console.log(item, "starts with", letter);
	}
});	