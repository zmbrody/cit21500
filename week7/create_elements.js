const header = document.createElement("header");	// Create the header
const heading = document.createElement("h1");		// create <h1> tag
heading.innerText = "Stella The Dalmation";			// set the innertext property
header.append(heading);								// add <h1> tag to header
document.body.append(header);						// add header to document

const navBar = document.createElement("nav");
navBar.classList.add("NavBar");

const menuList = document.createElement("ul");
menuList.innerHTML = `<li><a href ="_">Home</a></li>` +
                      `<li><a href ="_">About</a></li>` +
                      `<li><a href ="_">Contact</a></li>`;

navBar.append(menuList);
document.body.append(navBar);

const stellaPic = document.createElement("img");
stellaPic.src = "images/stella.png";
document.body.append(stellaPic);