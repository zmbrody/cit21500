const Characters =
[
	// for time constraint reasons, I took the images and skills from the sample solution
	{
		char_name: "Thena", 
		char_img: "images/eternals/thena.jpg",
		char_skills : ["matter manipulation", "love", "grounded", "agility"],
	},
	{
		char_name: "Kingo", 
		char_img: "images/eternals/kingo.jpg",
		char_skills : ["energy manipulation", "swordsman", "dancer", "agility"],
	},
	{
		char_name: "Sprite", 
		char_img: "images/eternals/sprite.jpg",
		char_skills : ["trickery", "illusion", "telekinesis", "love", "agility"],
	},
	{
		char_name: "Phastos", 
		char_img: "images/eternals/phastos.jpg",
		char_skills : ["intelligence", "invention", "agility"],
	},
	{
		char_name: "Makkari", 
		char_img: "images/eternals/makkari.jpg",
		char_skills : ["speed", "multilingual", "acrobat", "agility"],
	},
]

const FindSkill = function()
{
	let skill2find = document.querySelector("#searchbox").value;
	let OutputHTML = document.querySelector("#searchresult");
	let output = "";
	let found = false;
	let image;
	let CharacterName;
	let i = 0;
	Characters.forEach((character) => 
	{
		let FoundSkill = character.char_skills.find((element) => (element == skill2find))
		if (FoundSkill != undefined) // if undefined, then not found
		{
			found = true;
			image = Characters[i]["char_img"];
			CharacterName = Characters[i]["char_name"];
			output += `<img src="${image}" title="${CharacterName}" width="100" height="150"/>&nbsp;`
		};
		i++;
	});
	if (!found)
	{
		output = "No characters with that skill found!"
	}
	console.log(output)
	OutputHTML.innerHTML = output;
}

const ListChars = function()
{
	let output = "";
	Characters.forEach((character) =>
	{
		output += `<li> ${character.char_name}`
	});
	return output;
}

const ListSkills = function()
{
	let AllSkills = [];
	let found;
	Characters.forEach((character) =>
	{
		character.char_skills.forEach((skill) =>
		{
			found = AllSkills.find((element) => (element == skill))
			if (found == undefined) // if undefined, then not found
			{
				AllSkills.push(skill)
			}
		});
	});
	
	let output = "";
	for (let i = 0; i < AllSkills.length; i++)
	{
		output += AllSkills[i];
		if (i < (AllSkills.length - 1))
		{
			output += ", "
		}
	}

	return output;
}


function init()
{
	/*
		Set up page. IDK if I was supposed to make literally everything via JS, but I did just to be on the safe side
	*/
	const TITLE = document.createElement("h1");
	TITLE.innerText = "Eternals Skill Search";
	document.body.append(TITLE);

	const CHAR_LIST = document.createElement("ul");
	CHAR_LIST.innerHTML = ListChars();
	document.body.append(CHAR_LIST);

	const SKILL_LIST = document.createElement("p");
	SKILL_LIST.innerText = ListSkills();
	document.body.append(SKILL_LIST);

	const SEARCH_BOX = document.createElement("p");
	SEARCH_BOX.innerHTML = `<label for="searchbox">Find skill:</label>` +
						`<input type="text" id="searchbox"/>` +
						`<button onclick="FindSkill()">Search</button>`;
	document.body.append(SEARCH_BOX);

	const SEARCH_RESULT = document.createElement("p");
	SEARCH_RESULT.innerHTML = `<div id="searchresult"></div>`
	document.body.append(SEARCH_RESULT);
}
init()