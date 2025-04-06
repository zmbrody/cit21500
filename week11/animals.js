/*
TODO - upload images
*/

const SetUpBoxes = ()=> 
{
	let wrapperRef = $('.wrapper');
	animals.forEach((animal)=>
	{
		let boxMarkup = `<div class="box">` 
			+ `<img class="animal_pic" src="./images/${animal.animal_name.toLowerCase()}.png" />`
			+ `<p class="care"></p>`
			+ `</div>`;
		wrapperRef.append(boxMarkup);
	});
}


	

const ShowInformation = () => 
{
	SetUpBoxes(); // Call to set up the animals cards

	// Display the feed times for each dog
	// using the JSON data, with function EstablishFeedTimes, and jQuery each
	// each, iterates over each item in the matched set
	// See function, EstablishFeedTimes, below set up initial data
	jQuery.each($(".box"), EstablishFeedTimes);

	// Add an event handler for when the element of
	// class box gets a click event,anonymous function here
	$(".box").on("click", function ()
	{
		// Find the box clicked using the index method
		let indexOfAnimal = $(".box").index(this);

		// Find the paragraph of class p and set the text
		// Use the jQuery find method to find the paragraph of class care, in 
		// the current element, the item clicked on
		$(this).find("p.care").text(animals[indexOfAnimal].warning);
	});

	// Add an event handler for when the element
	// of class box gets a mouseover event
	$(".box").on("mouseover", function ()
	{
		// This technique gets the index of the item in the matched set
		// …which can be used to index into the animals array
		let indexOfAnimal = $(".box").index(this);

		// this syntax is cursed; why is it separate lines
		$(this)   // Same idea here, make sure it is the item that is the target of mouseover
			.find("p.care")
			.text(
				animals[indexOfAnimal].scoops + " scoops " + animals[indexOfAnimal].food
			);
	});

	// Add an event handler for when the
	// element of class box gets a mouseout event
	$(".box").on("mouseout", function () 
	{
		let indexOfAnimal = $(".box").index(this);
		EstablishFeedTimes(indexOfAnimal);

		//$(this).find("p.care").text(animals[indexOfAnimal].feed_times);
		//jQuery.each($(".box"), EstablishFeedTimes);
	});
};

const EstablishFeedTimes = (i) => 
{
	//console.log(animals[i].feed_times);
	output_txt = animals[i].animal_name + "<br>" + animals[i].feed_times;
	$(".care").eq(i).html(output_txt);
};

function Init()
{
	$(document).ready(ShowInformation);
}
Init();