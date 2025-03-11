/*
===========================================================================

Called Functions

===========================================================================
*/

const Task5_Loop = (count, string) =>
{
    let output = "<ol>";
    let i = 1;

    while (i <= count)
    {
        output += `<li value="${i}">${string}</li>`;
        i++;
    }

    output += "</ol>";
    return output;
}

const Task6b_CreateTables = function (factor)
{
    let output = "";
    let product;
    for (let i = 0; i <= 12; i++)
    {
        product = factor * i;
        output += `${factor} * ${i} = ${product}<br/>`;
    }
    output += "<hr/>";
    return output;
}

const Task6c_CreateTables = function (factor, DelimitMin, DelimitMax)
{
    let output = "";
    let product;
    for (let i = DelimitMin; i <= DelimitMax; i++)
    {
        product = factor * i;
        output += `${factor} * ${i} = ${product}<br/>`;
    }
    output += "<hr/>";
    return output;
}

const task6a = function ()
{
    let output = "";
    for (let f1 = 0; f1 <= 12; f1++)
    {
        for (let f2 = 0; f2 <= 12; f2++)
        {
            product = f1 * f2;
            output += `${f1} * ${f2} = ${product}<br/>`;
        }
        output += "<hr/>";
    }
    return output;
}

const task6b = function ()
{
    let output = "";

    for (let i = 0; i <= 12; i++)
    {
        output += Task6b_CreateTables(i);
    }
    return output;
}

const task6c = (min, max) =>
{
    if ( isNaN(max) || isNaN(min) )
    {
        return "Error: invalid input"; // don't bother running if invalid input
    }

    let output = "";

    for (let i = min; i <= max; i++)
    {
        output += Task6c_CreateTables( i, min, max );
    }
    return output;
}

/*
===========================================================================

"Main" functions

===========================================================================
*/

function task1 ()
{
    let QuantHTML = document.querySelector("#t1_quant");
    let PercentHTML = document.querySelector("#t1_percent");
    
    let quant = parseFloat(prompt("Please input a number indicating quantity."));
    QuantHTML.innerHTML = `Quantity: ${quant}`;

    let percent = parseFloat(prompt("Please input a percentage (omit the %)."));

    QuantPercent = quant * (percent / 100);

    PercentHTML.innerHTML = `${percent} of ${quant} is ${QuantPercent}`;
}

function task2 ()
{
    let GradeValid = 0;
    let grade;
    let LetterIf;
    let LetterSwitch;
    let OutputHTML = document.querySelector("#t2_output");

    while(!GradeValid)
    {
        grade = parseInt(prompt("What is the grade (0-100; no extra credit)?"));

        if ( grade > 100 || grade < 0 )
        {
            alert("Invalid grade.")
        }
        else
        {
            GradeValid = 1;
        }
    }

    // We've already checked if the range is valid, so we don't need to waste processing time comparing against 100 and 0.
    if (grade >= 91 )
    {
        LetterIf = "A";
    }
    else if ( grade <= 90 && grade >= 81 )
    {
        LetterIf = "B";
    }
    else if ( grade <= 80 && grade >= 71 )
    {
        LetterIf = "C";
    }
    else if ( grade <= 70 && grade >= 61 )
    {
        LetterIf = "D";
    }
    else if ( grade <= 60)
    {
        LetterIf = "F";
    }
    else
    {
        LetterIf = (`Error in task2(); grade == ${grade}`);
    }

    switch(true) // wat
    {
        case (grade >= 91 ) :
        {
            LetterSwitch = "A";
            break;
        }
        case ( grade <= 90 && grade >= 81 ) :
        {
            LetterSwitch = "B";
            break;
        }
        case ( grade <= 80 && grade >= 71 ) :
        {
            LetterSwitch = "C";
            break;
        }
        case ( grade <= 70 && grade >= 61 ) :
        {
            LetterSwitch = "D";
            break;
        }
        case ( grade <= 60) :
        {
            LetterSwitch = "F";
            break;
        }
        default :
        {
            // this should never trigger
            LetterSwitch = (`Error in task2(); grade == ${grade}`);
            break;
        }
    }


    let output = `The grade as calculated by the if statement is ${LetterIf}.<br/>The grade as calculated by the switchcase statement is ${LetterSwitch}`;
    OutputHTML.innerHTML = output;


}

function task3 ()
{
    let TitleHTML = document.querySelector("#t3_title");

    let UserStr = prompt("What is the line?");
    let title = prompt("Who is the line for?"); // seems to be unused until task 4?
    let count = parseInt(prompt("How many times is the line repeated?"));

    TitleHTML.innerText = `For ${title}`;

    for (let i = 1; i <= count; i++)
    {
        console.log(`${i}" - ${UserStr}`);
    }
}

function task4 ()
{
    let TitleHTML = document.querySelector("#t4_title");
    let LoopHTML = document.querySelector("#t4_loop");
    
    let UserStr = prompt("What is the line?");
    let title = prompt("Who is the line for?");
    let count = parseInt(prompt("How many times is the line repeated?"));
    let LoopText = "<ol>";

    TitleHTML.innerText = `For ${title}`;

    let i = 1;
    while (i <= count)
    {
        LoopText += `<li value="${i}">${UserStr}</li>`;
        i++;
    }
    
    LoopText += "</ol>";
    LoopHTML.innerHTML = LoopText;
}

function task5 ()
{
    let TitleHTML = document.querySelector("#t5_title");
    let LoopHTML = document.querySelector("#t5_loop");
    
    let UserStr = prompt("What is the line?");
    let title = prompt("Who is the line for?");
    let count = parseInt(prompt("How many times is the line repeated?"));
    let LoopText = Task5Loop( count, UserStr );

    TitleHTML.innerText = `For ${title}`;
    LoopHTML.innerHTML = LoopText;
}

function task6 ()
{
    let OutputHTML_6a = document.querySelector("#t6a")
    let OutputHTML_6b = document.querySelector("#t6b")
    let OutputHTML_6c = document.querySelector("#t6c")

    let t6cMin = parseInt(prompt("What is the mininum number you want to go to for task 6c?"));
    let t6cMax = parseInt(prompt("What is the maximum number you want to go to for task 6c?"));

    // print an extra divider line after each version for clarity
    OutputHTML_6a.innerHTML = ("<hr/>" + task6a() + "<hr/>");
    OutputHTML_6b.innerHTML = (task6b() + "<hr/>");
    OutputHTML_6c.innerHTML = (task6c(t6cMin, t6cMax) + "<hr/>");
}

function task7 ()
{
    /*
        If a function is declared via `function`, it can be called before it is declared, and used normally.
    */

    let red = 1.0
    let green = 0.65;
    let blue = 0;

    HoistTheColours(red,green,blue);

    /*
        If a variable is declared via `var`, attemting to use it before declaring will parse it as `undefined` instead of throwing a ReferenceError
    */

    console.log(foo);
    var foo = "bar";

    /*
        Javascript ES6 adds arrow functions, which are required to be declared before using.
        It also adds `let`, which is a variable that must be declared before using.
        It also adds `const`, which allows for constants like in C, which are immutable (and need to be declared before using).
        ES6 wasn't fully supported until 2017, which explains why I didn't use `let` in high school.
    */
}

/*
===========================================================================

Hoisted function

===========================================================================
*/

function HoistTheColours( R, G, B )
{
    console.log(`The color1 value is "${R} ${G} ${B}"` )
}