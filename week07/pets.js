const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        pic: "images/stella.png"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        pic: "images/cody.png"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        pic: "images/mango.png"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        pic: "images/lucy.png"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        pic: "images/buhmie.png"
    }
];

const linearListPets = (petsArray, separator) => 
{
    let str = "";
    petsArray.forEach((pet) => {
        str += pet.petName + " the " + pet.breed + separator;
    });
    console.log(str);
}

function main()
{
	// Add a pet to the front of the array
	petsData.unshift({
		petName: "Carmie",
		age: 3,
		weightInKilos: 28,
		breed: "Greyhound",
		pic: "images/carmie.png"
	});

	// Now add a pet to the end of the array
	petsData.push({
		petName: "Copper",
		age: 3,
		weightInKilos: 0.3,
		breed: "Mali Uromastyx",
		pic: "images/copper.png"
	});

	// List the pets by name
	console.log("Added Carmie to front, Copper to end");
	linearListPets(petsData, " | ");

	// Change the first pet's name
	petsData[0].petName = "Queen Stella";
	// Check
	console.log("Changed Stella to Queen Stella");
	linearListPets(petsData, " ! ");

	// Find the first pet, age is less than 3
	let youngPet = petsData.find(
		(pet) => {
			if (pet.age < 3)
				return (pet);
		}
	);
	console.log("Pet, age less than 3 is ", youngPet.petName);

	// Use forEach to add up all the ages of the pets
	let totalYears = 0;
	petsData.forEach((pet) => totalYears += pet.age);
	console.log("The sum of the pet ages is ", totalYears);

	let suki = 
	{
		petName: "Suki",
		age: 3,
		weightInKilos: 1.0,
		breed: "Jack Russel Terrier",
		pic: "images/suki.png",
	};

	petsData.splice(3, 0, suki);
	linearListPets(petsData, " | ");

	petsData.splice(3, 1);

	linearListPets(petsData, " | ");
}
main();