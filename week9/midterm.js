/*

You will create a simple interface that allows you to Create Objects and add these objects to an array, access a specific object and Read (display) the details, access a specific object and Update the attributes, Delete a specific object from the array.

* Define an array of objects

*/

const textures = 
[
	{
		texname : "clip",
		width : 16,
		height : 16,
	},
	{
		texname : "cliphull1",
		width : 64,
		height : 64,
	},
	{
		texname : "cliphull2",
		width : 64,
		height : 64,
	},
	{
		texname : "cliphull3",
		width : 64,
		height : 64,
	},
	{
		texname : "origin",
		width : 32,
		height : 32,
	},
	{
		texname : "sky",
		width : 128,
		height : 128,
	},
	{
		texname : "null",
		width : 64,
		height : 32,
	},
	{
		texname : "null_water",
		width : 64,
		height : 32,
	},
	{
		texname : "null_slime",
		width : 64,
		height : 32,
	},
	{
		texname : "null_lava",
		width : 64,
		height : 32,
	},
	{
		texname : "cr_matmetal",
		width : 64,
		height : 64,
	},
	
]

const ListItems = function()
{
	/* 
	Populate the array with objects, and reflect the objects in the display area
	Use array method `forEach`
	*/
	let OutputHTML = document.querySelector("#tex_list");
	let OutputText = "<ul>"
	let texname = "";
	textures.forEach((tex) =>
	{
		texname = tex["texname"];
		OutputText += `<li> <code>${texname}</code>`;
	});

	OutputText += "</ul>"

	OutputHTML.innerHTML = OutputText;

	return;
}

const Create = function()
{
	/*
	Create: Include a mechanism for creating a new  object, using the attributes entered by the user
	Add the object to the array and refresh the display on the web page
	Use array method `push`
	*/
	
	let newname = prompt("New texture name:"); 

	// ideally we would verify here that the texture doesn't already exist, but I don't have time to do that

	let x = parseInt(prompt("New texture width:"));
	if (isNaN(x))
	{
		alert("Invalid number")
		return;
	}
	let y = parseInt(prompt("New texture height:"));
	if (isNaN(y))
	{
		alert("Invalid number")
		return;
	}

	// this works; is it how it's *supposed* to be done, though?
	let newtex = 
	{
		texname: newname,
		width: x,
		height: y,
	};
	textures.push(newtex);
	return;
}

const Read = function()
{
	/*
	Read: Include a mechanism for listing a specific object details
	Must use the find method in JavaScript on the array, and then display details on web page
	Use array method `find`
	*/

	let name2find = prompt("Which texture would you like the info for?");
	
	let OutputHTML = document.querySelector("#current_tex");
	let OutputText;

	let tex =  textures.find((elem) => (elem["texname"] == name2find));
	
	if (tex != undefined)
	{
		let foundwidth = tex["width"];
		let foundheight = tex["height"]
		OutputText = `<code>${name2find}</code> is ${foundwidth}x${foundheight}`;
	}
	else
	{
		OutputText = `<code>${name2find}</code> not found`;
	}

	OutputHTML.innerHTML = OutputText;

	return;
}

const Update = function()
{
	/*
	Update: Provide a mechanism to change a part of the object, and to display changed details on web page
	Use array method `find`
	*/

	let name2find = prompt("Which texture would you like to change the info for?");
	
	// using `find` for this purpose is kinda wasteful? You have to loop through a second time anyway.
	let origtex = textures.find((elem) => (elem["texname"] == name2find));
	
	if (origtex != undefined)
	{
		let newwidth = prompt("What is the new width?");
		let newheight = prompt("What is the new height?");
		for (let i = 0; i < textures.length; i++)
		{
			if (textures[i]["texname"] == name2find)
			{
				textures[i]["width"] = newwidth;
				textures[i]["height"] = newheight;
			}
		}
	}
	else
	{
		alert(`No textures named "${name2find}" were found.`);
	}

	return;
}

const Delete = function()
{
	/*
	Delete : Provide a mechanism to remove the object from the array and refresh the details on the web page
	Use array method `splice`
	*/

	let name2find = prompt("Which texture would you like to delete?");
	let found = false;
	//let tex =  textures.find((elem) => (elem["texname"] == name2find));
	
	// deletes ALL textures with a given name
	for (let i = 0; i < textures.length; i++)
	{
		if (textures[i]["texname"] == name2find)
		{
			found = true;
			textures.splice(i, 1)
		}
	}

	if (!found)
	{
		alert(`No textures named "${name2find}" were found; perhaps you already deleted it?`);
	}
	
	return;
}

const CRUDChoice = function()
{
	let userinput = document.querySelector("#crud_input").value;
	userinput = userinput.toLowerCase();
	
	let need2update;

	if (userinput == "c" || userinput == "create")
	{
		Create();
		need2update = true;
	}
	else if (userinput == "r" || userinput == "read")
	{
		Read();
		need2update = false;
	}
	else if (userinput == "u" || userinput == "update")
	{
		Update();
		need2update = true;
	}
	else if (userinput == "d" || userinput == "delete" || userinput == "delet")
	{
		Delete();
		need2update = true;
	}
	else 
	{
		alert("Invalid option");
		need2update = false;
	}

	if (need2update)
	{
		ListItems();
	}
}

function init()
{
	ListItems();
}
init()