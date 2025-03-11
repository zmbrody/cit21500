const petsData = 
[
	{
		petName: "Stella",
		age: 7,
		weightInKilos: 24,
		breed: "Dalmation"
	},
	{
		petName: "Cody",
		age: 8,
		weightInKilos: 22,
		breed: "Corgi"
	},
	{
		petName: "Mango",
		age: 2,
		weightInKilos: 11,
		breed: "Persian"
	},
	{
		petName: "Lucy",
		age: 4,
		weightInKilos: 35,
		breed: "Ball Python"
	},
	{
		petName: "Buhmie",
		age: 1,
		weightInKilos: 28,
		breed: "Bull-dog"
	}
];

const showInfo = function()
{
	/*
		Grab the information for the selected pet number from the list and display it on the page
	*/
	
	let UserInput = parseInt(document.querySelector("#petNum").value); // `.value` gets the contents of the tag instead of the tag itself
	let OutputHTML = document.querySelector(".selectedPetInfo");
	let OutputStr;
	
	if (!isNaN(UserInput) && UserInput > 0) // sanitize
	{
		let PetNum = UserInput - 1; // convert to array value
		OutputStr = `<ul style="list-style-type:none;">` +
			`<li>Name: ${petsData[PetNum].petName}` +
			`<li>Age: ${petsData[PetNum]["age"]}` + // edge complained about `.age`
			`<li>Mass: ${petsData[PetNum].weightInKilos}kg` + // kg is a measure of mass, not weight; display as such on page
			`<li>Breed: ${petsData[PetNum].breed}` +
			`</ul>`;
	}
	else
	{
		// invalid input
		OutputStr = "Invalid Input";
	}

	OutputHTML.innerHTML = OutputStr;
}