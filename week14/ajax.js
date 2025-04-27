/*
AmiiboAPI - https://amiiboapi.com/

Example output:
{
	"amiibo": [
		{
			"amiiboSeries": "Mario Sports Superstars",
			"character": "Metal Mario",
			"gameSeries": "Mario Sports Superstars",
			"head": "09d00401",
			"image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00401-02bc0e02.png",
			"name": "Metal Mario - Golf",
			"release": {
				"au": "2017-03-11",
				"eu": "2017-03-10",
				"jp": "2017-03-30",
				"na": "2017-03-24"
			},
			"tail": "02bc0e02",
			"type": "Card"
		}
	]
}

Array is located at `output["amiibo"].whatever`, not `output.whatever`. Strangely, `output[0]` doesn't work.
*/

// I'd rather not type this out every single time
const API_URL_PREFIX = "https://www.amiiboapi.com/api/amiibo/?"

const GetSuccess = function(api_data,status,xhr)
{
	/*
		Purpose: Update the grid based upon database search results
	*/
	console.log(api_data,status,xhr);
	let grid = $("#grid");
	let box;

	grid.html(""); // Purge grid

	// if length is zero, no matches are found
	if (api_data["amiibo"].length > 0)
	{
		api_data["amiibo"].forEach((amiibo) => 
		{
			box = `<table class="box">`
				+ `<tr><td colspan="2" class="amiibo_img"><img src="${amiibo["image"]}" width="50%" height="50%"/></td></tr>`
				+ `<tr><td class="kv_key">Name:</td><td>${amiibo["name"]}</td></tr>`
				+ `<tr><td class="kv_key">Character:</td><td>${amiibo["character"]}</td></tr>`
				+ `<tr><td class="kv_key">Game series:</td><td>${amiibo["gameSeries"]}</td></tr>`
				+ `<tr><td class="kv_key">Amiibo series:</td><td>${amiibo["amiiboSeries"]}</td></tr>`
				+ `<tr><td class="kv_key">Amiibo type:</td><td>${amiibo["type"]}</td></tr>`
				+ `</table>`;
			grid.append(box);
		});
	}
	else
	{
		grid.html("<p>No matches found!</p>")
	}
}

const GetAll = function()
{
	/*
		Purpose: Grab entire database
	*/
	$.getJSON(API_URL_PREFIX, GetSuccess)
}

const GetSearch = function()
{
	/*
		Purpose: Grab search values and search with them
	*/
	let search_type = $("#search_type").val();
	let search_value = $("#search_value").val();
	console.log("Searching for",search_type,search_value);
	if (search_value !== "")
	{
		$.getJSON( ( API_URL_PREFIX + search_type + "=" + search_value ), GetSuccess );
	}
	else
	{
		GetAll();
	}
}

function Init()
{
	/*
		Purpose: Initialize page
	*/	
	// pre-fill 
	GetAll();
	
	// link buttons to functions
	$("#search_reset").on("click",GetAll);
	$("#search_submit").on("click",GetSearch);
}
$(document).ready(Init);