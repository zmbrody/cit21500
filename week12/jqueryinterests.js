/*
Functions: PascalCase
Variables: snake_case (mostly)
*/

/*
global vars and consts
*/
let invalid_popup_enabled = false;

/*
functions
*/
const ListChars = function()
{
	let output_text = `<table id="char_table">`; // start table

	if (true) // limit varaible scope
	{
		let found_char_ghg = null; // initalizing to null prevents garbage data (or at least it does in ancient 90s versions of C)
		let found_char_icon = null;
		let found_char_name = null;
		characters.forEach((character) =>
		{
			found_char_name = character["char_name"];
			found_char_ghg = character["char_intn_name"];
			found_char_icon = character["char_icon"];

			// this shouldn't be a table, because tables can't be dynamic.
			output_text += `<tr>`
						+ `<td style="text-align:center"><img src="${found_char_icon}" alt="${found_char_name}" width="64px" height="64px"><br>${found_char_name}</td>`
						// if we write onclick directly, we can define an arg. For some inexplicable reason,
						// functions sometimes have to be called without parentheses in js, which is the case for
						// jQuery's event handler binder. There may be a way to work around it, but if there is,
						// I didn't learn how in class. This would be much cleaner if functions always had 
						// parentheses like in C.
						+ `<td><button onclick="ShowRead('${found_char_ghg}')">Show Info</button><br>`
						+ `<td><button onclick="ShowUpdate('${found_char_ghg}')">Edit</button><br>`
						+ `<td><button onclick="ShowDelete('${found_char_ghg}')">Delete</button><br>`					
						+ `</tr>`;
		});
	}
	output_text += `</table>` // end table
	$("#char_list").html(output_text)
	$("#char_list").show();
	$("#popup_ui").hide(); // HACK HACK HACK. Likes to show up every time we update the list. Fortunately, it never needs to, so we can hide it here.
}

const CheckIfCharExists = function(char2find)
{
	let found_char = characters.find((elem) => elem["char_intn_name"] == char2find);
	if (found_char != undefined) // undefined == not found
	{
		// character exists
		return true;
	}
	else
	{
		// character doesn't exist
		return false;
	}
}

const ShowCreate = function()
{
	let ui_html = `<table><tr><td>Character name (English): </td><td><input id="char_name"/><br></td></tr>`
				+ `<tr><td>Internal name (GHG filename): </td><td><input id="char_intn_name"/></td></tr>`
				+ `<tr><td>Price: </td><td><input id="char_price"/></td></tr>`
				+ `<tr><td>Icon URL (should be square): </td><td><input id="char_pic_url"/></td></tr></table>`
				+ `<button id="submit_char">Submit</button>`;

	$("#popup_ui").html(ui_html);
	$("#popup_ui").show();
	$("#submit_char").on("click",CreateChar)
}

const CreateChar = function()
{
	// Grab inputs
	let new_name = $("#char_name").val();
	let new_intn_name = $("#char_intn_name").val();
	let new_price = parseInt($("#char_price").val());
	let new_pic_url = $("#char_pic_url").val();

	// like DOS, we default to uppercase.
	new_intn_name = new_intn_name.toUpperCase();

	if (new_price == NaN || new_name == "" || new_intn_name == "" || new_price == "" || new_pic_url == "") // this stopped triggering for NaN for some reason
	{
		// don't attempt to add invalid input; return early
		// not going to verify the img is valid; that's out of scope
		if (!invalid_popup_enabled)
		{
			$("#popup_ui").append(`<p id="popup_invalid">Invalid input</p>`)
			invalid_popup_enabled = true;
			$("#popup_invalid").css("color","red"); // color me red
		}
		else
		{
			$("#popup_invalid").text("Invalid input");
		}
		// return one because user error
		return 1;
	}
	else if (CheckIfCharExists(new_intn_name) == true)
	{
		// don't create dupes of chars
		if (!invalid_popup_enabled)
		{
			$("#popup_ui").append(`<p id="popup_invalid">Already exists!</p>`)
			invalid_popup_enabled = true;
			$("#popup_invalid").css("color","red"); // color me red
		}
		else
		{
			$("#popup_invalid").text("Already exists!");
		}
		// return one because user error
		return 1;
	}
	invalid_popup_enabled = false; // reset global var to avoid issues next time
	let new_char = 
	{
		char_name : new_name,
		char_intn_name : new_intn_name,
		char_price: new_price,
		char_icon: new_pic_url,
	}
	characters.push(new_char);
	$("#popup_ui").hide();
	ListChars();

	// return zero because everything worked correctly (hopefully)
	return 0; 
}

const ShowRead = function(char2read)
{
	let found_char = characters.find((elem) => elem["char_intn_name"] == char2read)
	if (found_char != undefined)
	{
		let ui_html = `<table><tr><td>Character name (English): </td><td>${found_char["char_name"]}</td></tr>`
					+ `<tr><td>Internal name (GHG filename): </td><td><code>${found_char["char_intn_name"]}</code></td></tr>`
					+ `<tr><td>Price: </td><td>${found_char["char_price"]} studs</td></tr>`;
		$("#popup_ui").html(ui_html);
		$("#popup_ui").show();
		return 0;
	}
	else
	{
		console.log(found_char);
		console.log("Character not found. Perhaps this function was called incorrectly?")
		return 1;
	}
	
}


const ShowUpdate = function(char2read)
{
	let found_char = characters.find((elem) => elem["char_intn_name"] == char2read)
	if (found_char != undefined)
	{
		let ui_html = `<table><tr><td>Character name (English): </td><td><input id="char_name" value="${found_char["char_name"]}"/><br></td></tr>`
					+ `<tr><td>Internal name (GHG filename): </td><td><input id="char_intn_name" value="${found_char["char_intn_name"]}"/></td></tr>`
					+ `<tr><td>Price: </td><td><input id="char_price" value="${found_char["char_price"]}"/></td></tr>`
					+ `<tr><td>Icon URL (should be square): </td><td><input id="char_pic_url" value="${found_char["char_icon"]}"/></td></tr></table>`
					+ `<button id="submit_char" onclick="UpdateChar('${found_char["char_intn_name"]}')">Submit</button></p>`;
		$("#popup_ui").html(ui_html);
		$("#popup_ui").show();
		return 0;
	}
	else
	{
		console.log(found_char);
		console.log("Character not found. Perhaps this function was called incorrectly?")
		return 1;
	}
}

const UpdateChar = function(char2update)
{
	// grab inputs
	let new_name = $("#char_name").val();
	let new_intn_name = $("#char_intn_name").val();
	let new_price = parseInt($("#char_price").val());
	let new_pic_url = $("#char_pic_url").val();

	// like DOS, we default to uppercase.
	new_intn_name = new_intn_name.toUpperCase();

	if (new_name == "" || new_intn_name == "" || new_price == "" || new_price == NaN || new_pic_url == "") // apparently "" =/= null? why?
	{
		// don't attempt to add invalid input; return early
		// not going to verify the img is valid; that's out of scope
		if (!invalid_popup_enabled)
		{
			$("#popup_ui").append(`<p>Invalid input</p>`)
			invalid_popup_enabled = true;
			$("#popup_invalid").css("color","red"); // color me red
		}
		// return one because user error
		return 1;
	}
	else if (CheckIfCharExists(new_intn_name) == true)
	{
		// don't create dupes of chars
		if (!invalid_popup_enabled)
		{
			$("#popup_ui").append(`<p id="popup_invalid">Already exists!</p>`)
			invalid_popup_enabled = true;
			$("#popup_invalid").css("color","red"); // color me red
		}
		else
		{
			$("#popup_invalid").text("Already exists!");
		}
		// return one because user error
		return 1;
	}
	invalid_popup_enabled = false; // reset global var to avoid issues next time
	for (let i = 0; i < characters.length; i++)
	{
		if (characters[i]["char_intn_name"] == char2update)
		{
			characters[i]["char_name"] = new_name;
			characters[i]["char_intn_name"] = new_intn_name;
			characters[i]["char_price"] = new_price;
			characters[i]["char_icon"] = new_pic_url;
		}
	}
	$("#popup_ui").hide();
	ListChars();

	// return zero because everything worked correctly (hopefully)
	return 0; 
}

const ShowDelete = function(char2del)
{
	// extract character to make our code less convoluted
	let found_char = characters.find((elem) => elem["char_intn_name"] == char2del)
	
	if (found_char != undefined) // undefined == doesn't exist
	{
		let ui_html = `<p>You want to delete ${found_char["char_name"]} (<code>${found_char["char_intn_name"]}</code>). Are you sure?</p>`
					+ `<button id="submit_char" onclick="DeleteChar('${found_char["char_intn_name"]}')">Confirm Delete</button></p>`;
		$("#popup_ui").html(ui_html);
		$("#popup_ui").show();
		return 0;
	}
	else
	{
		console.log(found_char);
		console.log("Character not found. Perhaps this function was called incorrectly?")
		return 1;
	}
}

const DeleteChar = function(char2del)
{
	for (let i = 0; i < characters.length; i++)
	{
		if (characters[i]["char_intn_name"] == char2del)
		{
			characters.splice(i,1);
			console.log(`deleted ${char2del}`)
		}
	}
	$("#popup_ui").hide();
	ListChars();
}

const Init = function()
{
	$("#popup_ui").hide(); // will show error message if somehow doesn't get hidden
	$("#char_list").hide(); // hide while loading, in case cpu is slow

	ListChars();

	$("#button_create").on("click",ShowCreate);
}

$(document).ready(Init);