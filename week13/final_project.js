/*
Functions: PascalCase
Variables: lowercase_snake_case (mostly)
Constants: UPPERCASE_SNAKE_CASE
*/

/*
global vars and consts
*/
let invalid_popup_enabled = false; // Used by various popups to avoid creating duplicate popups

// Shuffling these around is okay; they're only used by code, and never written anywhere
// They really could be anything; I'm just using hex values because they're prettier
// I do this instead of passing strings between functions, because the IDE can autofill
// these in, but can't autofill string contents. This doesn't really save any memory
// compared to passing reason as a string since JS is an interpreted language; it's
// really just for convienence.
const INVALID_GENERIC = 0x0;
const INVALID_CHAR_ALREADY_EXISTS = 0x1;
const INVALID_PRICE = 0x2;
const INVALID_PRICE_NEGATIVE = 0x4;
const INVALID_PRICE_OVERFLOW = 0x8
const INVALID_EMPTY_FIELD = 0x10;

/*
	return functions
*/
const CheckIfCharExists = function(char2find)
{
	/*
		Return value:	bool
		Purpose:		Checks if a character with a given internal name exists in the database, and returns true or false appropriately
	*/
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

const CheckIfInvalidInput = function(new_name,new_intn_name,new_price,new_pic_url)
{
	/*
		Return value:	bool
		Purpose:		Checks if input is invalid, and calls popup if true
	*/
	
	// ideally we'd check if the image exists. I have no clue how to do that, though
	
	if (new_name === "" || new_intn_name === ""  || new_pic_url === "" || new_price === "") // apparently "" =/= null? why?
	{
		// if we don't do triple equals, 0 gets parsed as "", breaking freebies
		Popup_InvalidInput(INVALID_EMPTY_FIELD);
		return true;
	}
	else if (isNaN(new_price)) // for some reason, you can't check equality with NaN, and have to use isNaN() instead
	{
		Popup_InvalidInput(INVALID_PRICE);
		return true;
	}
	else if (new_price < 0)
	{
		Popup_InvalidInput(INVALID_PRICE_NEGATIVE);
		return true;
	}
	else if (new_price > 4294967295)
	{
		// fine with JavaScript, but would cause an integer overflow in-game
		Popup_InvalidInput(INVALID_PRICE_OVERFLOW);
		return true;
	}
	else
	{
		// All valid!
		return false;
	}
}

/*
	void functions
*/
const Popup_InvalidInput = function(reason)
{
	/*
		Purpose:	Show popup informing user of invalid input
		
		This is separate from CheckInvalidInput, because checking if char already exists differs when editing vs creating
		(don't want to complain when editing a character without changing the internal name)
		Unusual name with underscore is because I originally had a separate function for if the character didn't exist,
		but I realized it'd be better to use a switch/case to set the printed reason (which had the side effect of allowing
		more informative reasons for why the input was invalid). The other (removed) function was called Popup_CharAlreadyExists().
	*/
	if (!invalid_popup_enabled)
	{
		// If the popup doesn't exist, create it.
		$("#popup_ui").append(`<p id="popup_invalid"></p>`)
		invalid_popup_enabled = true;
		$("#popup_invalid").css("color","#E3322E"); // Red value taken from Lego logo
	}

	let reason_text = ""; // idk how much js really cares about variable type, but this way it's clear it's supposed to be a string
	switch(reason)
	{
		case INVALID_EMPTY_FIELD:
			reason_text = "All fields must be filled!"
			break;
		case INVALID_PRICE:
			reason_text = "Invalid price"
			break;
		case INVALID_PRICE_OVERFLOW:
			reason_text = "Price uses an unsigned 32-bit integer in-game, and cannot exceed 4,294,967,295."
			break;
		case INVALID_PRICE_NEGATIVE:
			reason_text = "Price must be positive or zero!"
			break;
		case INVALID_CHAR_ALREADY_EXISTS:
			reason_text = "Character already exists!";
			break;
		case INVALID_GENERIC:
			// we used to have a generic option, which would just say "invalid input"
			// it was deprecated in favor of more user-friendly prompts
			// this is the same as default, ergo we don't break
		default:
			reason_text = "Invalid input";
	}

	$("#popup_invalid").text(reason_text);
}

const ListChars = function()
{
	/*
		Purpose:	Create a "table" listing all characters in the database, with buttons under each of the chars
	*/
	
	// this was originally an actual table instead of a div. Tables can't be resized dynamically based upon viewport width,
	// so it's been changed to a div flexbox instead. Now each character is a separate table, to ensure the spacing is even.
	let output_text = `<div id="char_table">`;

	// share vars between loops so the memory address doesn't shuffle around
	// (is it necessary? no. does it make me feel better? yes)
	let found_char_ghg = "";
	let found_char_icon = "";
	let found_char_name = "";
	characters.forEach((character) =>
	{
		found_char_name = character["char_name"];
		found_char_ghg = character["char_intn_name"];
		found_char_icon = character["char_icon"];

		output_text += `<table>`
					+ `<tr>`
					+ `<td colspan="3" style="text-align:center"><img src="${found_char_icon}" alt="${found_char_name}" width="64px" height="64px"><br>${found_char_name}</td>`
					+ `</tr>`
					// if we write onclick directly, we can define an arg. For some inexplicable reason,
					// functions sometimes have to be called without parentheses in js, which is the case for
					// jQuery's event handler binder. There may be a way to work around it, but if there is,
					// I didn't learn how in class, and couldn't find how to online.
					+ `<tr>`
					+ `<td><button onclick="ShowRead('${found_char_ghg}')">Info</button><br>` // "Show Info" would sometimes wrap if the character list wrapped.
					+ `<td><button onclick="ShowUpdate('${found_char_ghg}')">Edit</button><br>`
					+ `<td><button onclick="ShowDelete('${found_char_ghg}')">Delete</button><br>`					
					+ `</tr></table>`;
	});
	output_text += `</div>` // end "table"
	$("#char_list").html(output_text)
}

const ShowCreate = function()
{
	/*
		Purpose:	Show the input fields for creating a new character, and link submit button to CreateChar()
	*/
	
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
	/*
		Purpose:	Create character specified character based upon fields set in ShowCreate(), and add to database if valid
	*/

	// Grab inputs
	let new_name = $("#char_name").val();
	let new_intn_name = $("#char_intn_name").val();
	let new_price = parseInt($("#char_price").val());
	let new_pic_url = $("#char_pic_url").val();

	// like DOS, we default to uppercase. This is consistent with the game proper, which is case insensitive and prioritizes uppercase on Linux systems.
	new_intn_name = new_intn_name.toUpperCase();

	if (CheckIfInvalidInput(new_name,new_intn_name,new_price,new_pic_url) == true)
	{
		// input is invalid; return early
		return 1;
	}
	else if (CheckIfCharExists(new_intn_name) == true)
	{
		// don't create dupes of chars; return early
		Popup_InvalidInput(INVALID_CHAR_ALREADY_EXISTS);
		return 1;
	}
	else
	{
		// this global var may have been changed to true by Popup_InvalidInput().
		// Reset it to avoid issues, as the next time Popup_InvalidInput() runs, the popup will be absent.
		invalid_popup_enabled = false;
	}

	let new_char = 
	{
		char_name : new_name,
		char_intn_name : new_intn_name,
		char_price: new_price,
		char_icon: new_pic_url,
	}
	characters.push(new_char);
	
	let new_popup = `<p id="new_popup">Character ${new_name} (<code>${new_intn_name}</code>) created!</p>`;
	$("#popup_ui").html(new_popup);
	ListChars();

	return 0; 
}

const ShowRead = function(char2read)
{
	/*
		Purpose:	Show extended information about specified character
	*/
	
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
		// debug; this shouldn't ever run in production
		console.log("Character "+ char2read +" not found. Perhaps this function was called incorrectly?")
		return 1;
	}
	
}


const ShowUpdate = function(char2update)
{
	/*
		Purpose:	Show input fields for editing an existing character, and link submit button to UpdateChar()
	*/

	let found_char = characters.find((elem) => elem["char_intn_name"] == char2update)
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
		// debug; this shouldn't ever run in production
		console.log("Character "+ char2update +" not found. Perhaps this function was called incorrectly?")
		return 1;
	}
}

const UpdateChar = function(char2update)
{
	/*
		Purpose:	Update specified character based upon fields set in ShowUpdate(), 
					updating the database if valid, and informing user that character has been updated.
	*/

	// grab inputs
	let new_name = $("#char_name").val();
	let new_intn_name = $("#char_intn_name").val();
	let new_price = parseInt($("#char_price").val());
	let new_pic_url = $("#char_pic_url").val();

	// like DOS, we default to uppercase. This is consistent with the game proper, which is case insensitive and prioritizes uppercase on Linux systems.
	new_intn_name = new_intn_name.toUpperCase();
	
	
	if (CheckIfInvalidInput(new_name,new_intn_name,new_price,new_pic_url) == true)
	{
		// input is invalid; return early
		return 1;
	}
	else if (new_intn_name != char2update)
	{
		// only check internal name if it has changed
		if (CheckIfCharExists(new_intn_name) == true)
		{
			// don't create dupes of chars; return early
			Popup_InvalidInput(INVALID_CHAR_ALREADY_EXISTS);
			return 1;
		}
	}
	else
	{
		// this global var may have been changed to true by Popup_InvalidInput().
		// Reset it to avoid issues, as the next time Popup_InvalidInput() runs, the popup will be absent.
		invalid_popup_enabled = false;
	}
	for (let i = 0; i < characters.length; i++)
	{
		if (characters[i]["char_intn_name"] == char2update)
		{
			characters[i]["char_name"] = new_name;
			characters[i]["char_intn_name"] = new_intn_name;
			characters[i]["char_price"] = new_price;
			characters[i]["char_icon"] = new_pic_url;
			// we could technically break out of the for loop now for minor speed savings
		}
	}

	let updated_popup = `<p id="updated_popup">Character ${new_name} (<code>${new_intn_name}</code>) updated!</p>`;
	$("#popup_ui").html(updated_popup);
	ListChars();

	return 0; 
}

const ShowDelete = function(char2del)
{
	/*
		Purpose:	Show deletion confirmation, but don't actually delete yet
	*/
	
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
		// debug; this shouldn't ever run in production
		console.log("Character "+ char2del +" not found. Perhaps this function was called incorrectly?")
		return 1;
	}
}

const DeleteChar = function(char2del)
{
	/*
		Purpose:	Delete character, and inform user that character has been deleted.
	*/

	let char2del_name = "";
	for (let i = 0; i < characters.length; i++)
	{
		if (characters[i]["char_intn_name"] == char2del)
		{
			char2del_name = characters[i]["char_name"]; // temporarily save name for popup later 
			characters.splice(i,1);
			console.log(`deleted ${char2del}`)
		}
	}
	
	let new_popup = `<p id="new_popup">Character ${char2del_name} (<code>${char2del}</code>) deleted!</p>`;
	$("#popup_ui").html(new_popup);
	ListChars();
}

const Init = function()
{
	/*
		Purpose:	Initialize the page once jQuery determines the document is ready

		#button_create, #popup_ui, and #char_list exist in the actual HTML
	*/

	$("#popup_ui").hide();

	ListChars();

	$("#button_create").on("click",ShowCreate);
}

$(document).ready(Init);