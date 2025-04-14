

const SpawnCocktails = function()
{
	let html_wrapper = $(".wrapper");
	let output_html = "";
	cocktails.forEach((cocktail)=>
	{
		output_html = `<table class="box">`
					+ `<tr><td><p class=cocktail_pic_wrapper><img class="cocktail_pic" src="images/cocktails/${cocktail.cocktail_id}.webp" alt="${cocktail.cocktail_name}"/></p></td></tr>`
					+ `<tr><td><p class="cocktail_name"></p></td></tr>`
					+ `<tr><td><p class="cocktail_info"></p></td></tr>`
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
		$(".cocktail_info").eq(i).html(`Ingredients: ${cocktails[i]["ingredients"]}`);
	});

	// define which functions to call when events are fired
	$(".box").on("click",function()
	{
		// OnClick
		let i = $(".box").index(this);
		let output_html = `Calories: ${cocktails[i]["calories"]}<br><br>Ingredients: ${cocktails[i]["ingredients"]}<br><br>${cocktails[i]["recipe"]}`;
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
		$(this).find(".cocktail_info").html(`Ingredients: ${cocktails[i]["ingredients"]}`);
	});
}



$(document).ready(Init);
