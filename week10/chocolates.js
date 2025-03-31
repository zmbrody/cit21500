let chocs = 
[
	// prepend `images/` and append `.jpg` to the choc_id to get image
	{
		choc_name: "Plain Milk",
		description: "Smooth milk chocolate",
		calories: 90,
		ingredients: "Cocoa butter, Milk, Cream",
		choc_id: "plain_milk",
	},
	{
		choc_name: "Plain Dark",
		description: "Dark chocolate",
		calories: 90,
		ingredients: "Cocoa butter, Milk, Cream",
		choc_id: "plain_dark",
	},
	{
		choc_name: "Bailey's Cup",
		description: "Dark chocolate with Bailey's Cream Filling",
		calories: 100,
		ingredients: "Cocoa butter, Milk, Cream, baileys",
		choc_id: "baileys_cup",
	},
	{
		choc_name: "Cappuccino Cup",
		description: "Dark chocolate with Cappuccino style cream filling",
		calories: 120,
		ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
		choc_id: "cappuccino_cup",
	},
	{
		choc_name: "Nutter Butter",
		description: "Dark chocolate with peanut butter",
		calories: 190,
		ingredients: "Cocoa butter, Milk, Cream, peanut butter",
		choc_id: "nutter_butter",
	},
	{
		choc_name: "Orange Fondant",
		description: "Dark chocolate folded with orange fondant",
		calories: 90,
		ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
		choc_id: "orange_fondant",
	},
	{
		choc_name: "Pistachio Cup",
		description: "Dark chocolate with nuggets of pistachio",
		calories: 90,
		ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
		choc_id: "pistachio_diamond",
	},
	{
		choc_name: "Rum Barrel",
		description: "Dark chocolate with a decadent rum filling",
		calories: 90,
		ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
		choc_id: "rum_barrel",
	},
	{
		choc_name: "Toffee Crunch",
		description: "Dark chocolate with brittle toffee candy",
		calories: 90,
		ingredients: "Cocoa butter, Milk, Cream, toffee",
		choc_id: "toffee_crunch",
	},
	{
		choc_name: "Plain Supreme",
		description: "Dark chocolate with slivers of milk chocolate",
		calories: 90,
		ingredients: "Cocoa butter, Milk, Cream",
		choc_id: "plain_hybrid",
	},
];


const PickRandom = function()
{
	// How can I get it to highlight *before* the alert?
	let rand_index = Math.floor(Math.random() * chocs.length);
	let rand_id = chocs[rand_index]["choc_id"];
	console.log(rand_id,rand_index);
	$(".chocolates .chocolate").css("background-color","#fffdd0");
	$("#"+rand_id).css("background-color","#ffff00");

	let rand_name = chocs[rand_index]["choc_name"];
	let coupon_code = Math.floor(Math.random() * 50);
	alert(`Your coupon code for ${rand_name} is ${coupon_code}`);
}

let bExtraShown = false;

const ShowExtraContent = function()
{
	bExtraShown = true;
	let str_buffer = ""; // define outside of loop to avoid shifting memory positions
	for (i = 0; i < chocs.length; i++)
	{
		str_buffer = `<p><img src="images/${chocs[i]["choc_id"]}.jpg" alt="${chocs[i]["choc_name"]}" width="64px" height="64px"/>
				<br>${chocs[i]["choc_name"]}<br>${chocs[i]["calories"]} calories<br>${chocs[i]["description"]}<br>Ingredients: ${chocs[i]["ingredients"]}</p>`;
		$("#"+chocs[i]["choc_id"]).html(str_buffer);
	}
	return;
}


const HideExtraContent = function()
{
	bExtraShown = false;
	let str_buffer = ""; // define outside of loop to avoid shifting memory positions
	for (i = 0; i < chocs.length; i++)
	{
		str_buffer = `<p><img src="images/${chocs[i]["choc_id"]}.jpg" alt="${chocs[i]["choc_name"]} width="64px" height="64px"/>
				<br>${chocs[i]["choc_name"]}</p>`;
		$("#"+chocs[i]["choc_id"]).html(str_buffer);
	}
	return;
}

const ToggleExtraContent = function()
{
	if (!bExtraShown)
	{
		ShowExtraContent();
		$("#toggle_button").text("Simple view");
	}
	else
	{
		HideExtraContent();
		$("#toggle_button").text("Detailed view");
	}
}