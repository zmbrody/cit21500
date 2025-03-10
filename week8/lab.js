// decouple screen size from characters
const viewport =
{
	// screenWidth: document.querySelector("#park").clientWidth,
	// screenHeight: document.querySelector("#park").scrollHeight,

	// hardcode to 768p to prevent HD bugs
	screenWidth : 1024,	
	screenHeight : 768,
}


// Create an object containing animated character data
const characterDataQueen = 
{
	path: "queen/",
	seq_walk_posx: ["walking_e0000.png", "walking_e0001.png",
		"walking_e0002.png", "walking_e0003.png", "walking_e0004.png",
		"walking_e0005.png", "walking_e0006.png", "walking_e0007.png", 
		"walking_e0008.png", "walking_e0009.png", "walking_e0010.png",
		"walking_e0011.png" ],
	seq_dead_posy: ["tipping_over_n0012.png"],
	poseNumber: 0,
	elem: document.querySelector("#queen"),
	x: 0,
	y: viewport.screenHeight - 256,
	timerId: null,
	in_range: false,
	is_dead: false,
	//flags: 0, // tried using flags, but bitwise operators didn't work
	move : function() 
	{
		this.elem.style.top = this.y + "px";
		this.elem.style.left = this.x + "px";
		this.elem.src = this.path + this.seq_walk_posx[this.poseNumber];
		
		// can we not spam the console, thank you
		//console.log(this.elem.src);

		this.poseNumber = (this.poseNumber + 1) % 12;
	},
	think : function()
	{
		if (!this.in_range)
		{
			if (this.x > viewport.screenWidth - 400) 
			{
				this.in_range = true;
			}	
			else
			{  
				this.x += 5;
				this.y -= 1;
				this.move();
			}
		}
		else
		{
			if (characterDataCar.in_range == true)
			{
				if (!this.is_dead) 
				{
					console.log("test")
					this.poseNumber = 0;
					this.elem.src = this.path + this.seq_dead_posy[this.poseNumber];
					this.is_dead = true;
				}
			}
		}
		return;
	},
}

// Create an object containing animated character data
const characterDataCar = 
{
	path: "car/",
	seq_walk_negy: ["playercar_-y.png"],
	poseNumber: 0,
	elem: document.querySelector("#car"),
	x: viewport.screenWidth - 400,
	y: 0,
	timerId: null,
	in_range: false,
	flags: 0,
	move : function() 
	{
		this.elem.style.top = this.y + "px";
		this.elem.style.left = this.x + "px";
		this.elem.src = this.path + this.seq_walk_negy[this.poseNumber];
		
		// can we not spam the console, thank you
		//console.log(this.elem.src);

		this.poseNumber = (this.poseNumber + 1) % 1;
	},
	think : function()
	{
		if (characterDataQueen.in_range)
		{
			if (this.y > viewport.screenHeight + 65535) 
			{
				this.y = 65535;
				this.move();
			}
			else
			{
				if (this. y > 387)
				{
					this.in_range = true;
				}
				this.y += 10; // counter-intuitively, +Y is south in HTML
				this.move();
			}
		}
		else
		{
			this.y = -256;
			this.move();
		}
		//console.log(this.x,this.y)
		return;
	},

}


/* You can add more characters and process the animation with an array */
const characters = [characterDataQueen, characterDataCar];


// Function called when the move it button is clicked
function move() 
{
	// ideally would loop through all characters and set their "interval", but my code doesn't work
	/*
	for (let i = 0; i > characters.length; i++)
	{
		characters[i][timerId] = setInterval(frame, 100);
	}
	*/
	characterDataQueen.timerId = setInterval(frame, 100);
	characterDataCar.timerId = setInterval(frame, 100);
}

// Callback function to reset the image position
function frame() 
{
	// ideally would loop through all characters and run their think functions
	characterDataQueen.think();
	characterDataCar.think();
}

// Function called when the stop button is clicked
function stopMoving() 
{
	// ideally would loop through all characters and clear their "interval"
	clearInterval(characterDataQueen.timerId);
	clearInterval(characterDataCar.timerId);
}

