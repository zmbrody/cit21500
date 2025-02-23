const entree1 = 
{
	starter : "Bacon Cheese Fries",
	main: "Beef Burger and Coleslaw",
	dessert: "Deep Fried Ice-Cream"
};

const entree2 = 
{
	starter : "Smoked Salmon On Rye",
	main: "Vegetarian Couscous Rolls",
	dessert: "Fruit Plate"
};

const entree3 = 
{
	starter : "Chips and Hummus",
	main: "Grilled Chicken in Hot Sauce",
	dessert: "Chocolate Ganache Cake"
};

const meals = [entree1, entree2, entree3];

const showMeal = (mealNumber) =>
{
	/*
		Display information for specified meal
	*/

	let str = `Start with ${meals[mealNumber]["starter"]}, `+ // for some reason, ".starter" spat out an error, but this didn't
		`followed by ${meals[mealNumber]["main"]}, ` +
		`and finish off your meal with ${meals[mealNumber]["dessert"]}`;

	let area = document.querySelector(".randomMeal");
	area.innerHTML = str;

}

const randomMeal = function()
{
	/*
	Get a random number between 0 and the length of the array, meals, and call function to display information for specified meal
	*/

	let mealNumber = parseInt(Math.round(Math.random() * meals.length));
	showMeal(mealNumber);
}