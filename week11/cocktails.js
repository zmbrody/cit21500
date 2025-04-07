

const SpawnCocktails = function()
{
	let html_wrapper = $(".wrapper");
	let output_html = "";
	cocktails.forEach((cocktail)=>
	{
		output_html = `<div class="box">`
					+ `<img class="cocktail_pic" src="images/cocktails/${cocktail.cocktail_id}.jpg" alt="${cocktail.cocktail_name}"/>`
					+ `<p class="cocktail_name"></p>`
					+ `<p class="cocktail_info"></p>`
					+ `</div>`;

		html_wrapper.append(output_html);
	});
}

const Init = function() 
{
	// Create bar
	SpawnCocktails();

	// Initialize values
	jQuery.each($(".box"), function(i)
	{
		$(".cocktail_name").eq(i).text(cocktails[i]["cocktail_name"]);
		$(".cocktail_info").eq(i).text(`Ingredients: ${cocktails[i]["ingredients"]}`);
	});

	// define which functions to call when events are fired
	$(".box").on("click",function()
	{
		// OnClick
		let i = $(".box").index(this);
		let output_html = `Ingredients: ${cocktails[i]["ingredients"]}<br>Calories:${cocktails[i]["calories"]}<br><br>${cocktails[i]["recipe"]}`;
		$(this).find(".cocktail_info").html(output_html);
	});
	
	$(".box").on("mouseover",function()
	{
		// OnStartTouch
		let i = $(".box").index(this);
		let output_html = `Ingredients: ${cocktails[i]["ingredients"]}<br><br>${cocktails[i]["recipe"]}`;
		$(this).find(".cocktail_info").html(output_html);
	});
	$(".box").on("mouseout",function()
	{
		// OnStopTouch
		let i = $(".box").index(this);
		$(this).find(".cocktail_info").text(`Ingredients: ${cocktails[i]["ingredients"]}`);
	});
}



$(document).ready(Init);
