const allDogs =
[
	/*
		Source: https://www.hamiltonhumane.com/adopt/adoptable-dogs
		Grabbed 21 Feb 2025
	*/
	
	{
		dogName : "Ashton",
		breed : "Terrier, American Pit Bull/Mix",
		age: 3.667, // 3 years 8 months
		sex: "m",
	},
	{
		dogName : "Axel",
		breed : "Terrier, American Pit Bull/Mix",
		age: 2.5, // 2 years 6 months
		sex: "m",
	},
	{
		dogName : "Bama",
		breed : "Siberian Husky/Mix",
		age: 6.0, // 6 years
		sex: "f",
	},
	{
		dogName : "Bane",
		breed : "Rottweiler/Mix",
		age: 9.0, // 9 years
		sex: "m",
	},
	{
		dogName : "Bea",
		breed : "Terrier, American Pit Bull/Mix",
		age: 2.083, // 2 years 1 month
		sex: "f",
	},
	{
		dogName : "Beanie",
		breed : "Terrier, American Pit Bull/Hound",
		age: 3.083, // 3 years 1 month
		sex: "m",
	},
	{
		dogName : "Beaux",
		breed : "Catahoula Leopard dog/Mix",
		age: 9.167, // 9 years 2 months
		sex: "m",
	},
	{
		dogName : "Beaver",
		breed : "Terrier, American Pit Bull/Mix",
		age: 0.583, // 7 months
		sex: "m",
	},
	{
		dogName : "Bebe",
		breed : "Terrier, American Pit Bull/Mix",
		age: 6.417, // 6 years 5 months
		sex: "f",
	},
	{
		dogName : "Betty Moo",
		breed : "Terrier, Pit Bull/Mix",
		age: 2.167, // 2 years 2 months
		sex: "f",
	},
];

const FindDogs = function()
{
	/*
		Find all dogs with a given minimum age and display their information on the webpage
	*/

	let OutputHTML = document.querySelector("#selected_dog_info");
	let OutputStr;
	let UserInput = parseFloat(document.querySelector("#pet_age").value);

	if (!isNaN(UserInput) && UserInput >= 0) // sanitize
	{
		let selectedDogs = [];
		allDogs.forEach((dog) =>
		{
			if (dog.age >= UserInput)
			{
				selectedDogs.push(dog);
			}
		});
		
		OutputStr = "<ol>" // why you no show number?
		
		// define loop vars outside of loop to avoid shifting memory locations, since it's not private data
		let RoundedAge;
		let DogSex;
		let years;
		let months;

		for (let i = 0; i < selectedDogs.length; i++)
		{
			// clear values from previous loop
			RoundedAge = null;
			DogSex = null;
			years = null;
			months = null;

			if (selectedDogs[i].age >= 1.0) // don't bother showing years for puppies
			{
				// strip decimal values to get int
				years = parseInt(Math.floor(selectedDogs[i].age));
				RoundedAge = `${years} years`;
			}
			else
			{
				// don't bother doing the math; we know puppies are zero years old
				years = 0;
				RoundedAge = "";
			}

			if (selectedDogs[i].age != Math.round(selectedDogs[i].age)) // don't bother showing months if age is already a whole number
			{
				if (years != 0)
				{
					// prepend comma only if not puppy, because puppies don't list years
					RoundedAge += `, `;
				}

				// do a lossy conversion from float back to int
				months = selectedDogs[i].age - years;
				months = parseInt(Math.round(months * 12));
				RoundedAge += `${months} months`;
			}
			
			if (selectedDogs[i].sex == "f")
			{
				DogSex = "Female"
			}
			else if (selectedDogs[i].sex == "m")
			{
				DogSex = "Male"
			}
			else
			{
				// someone didn't configure data correctly
				console.log(`${selectedDogs[i].dogName} has an invalid sex`)
				DogSex = "Unknown"
			}

			OutputStr += `<ul style="list-style-type:none;">` +
				`<li> Name: ${selectedDogs[i].dogName}` +
				`<li> Breed: ${selectedDogs[i].breed}` +
				`<li> Age: ${RoundedAge}` +
				`<li> Sex: ${DogSex}` +
				`</ul><br>`;
		}
		OutputStr += "</ol>"
	}
	else
	{
		// invalid input
		OutputStr = "Invalid Input";
	}

	OutputHTML.innerHTML = OutputStr;
}
