function addPaintAndSupplies(totalCost, callback)
{
    /*
    Function declaration - Queries user for cost of paint, prints it to webpage, and returns updated total cost
    */

    let cost = parseFloat(prompt("Enter the cost for the paint and supplies:"));

    if (cost > 100)
    {
        // If more than $100, add 10% of the cost
        cost *= 1.1;
    }
    else if (cost == NaN)
    {
        cost = 0;
    }

    // Get a handle for the paint paragraph
    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $${cost.toFixed(2)}`;

    // update totals
    totalCost = totalCost + cost;
    callback(totalCost);
    return (totalCost);
}

const addFloorCoverings = function (totalCost, callback)
{
    /*
    Function expression - Queries user for cost of floor coverings, prints it to webpage, and returns updated total cost
    */

    let cost = parseFloat(prompt("Enter the cost for the floor coverings:"));

    if (cost < 500)
    {
        // If less than $500, take 15% off the cost
        cost *= 0.85;
    }
    else if (cost == NaN)
    {
        cost = 0;
    }

    // Get a handle for the floor paragraph
    let floorArea = document.querySelector(".floorCoverings");
    floorArea.innerHTML = `Floor $${cost.toFixed(2)}`;

    // update totals
    totalCost = totalCost + cost;
    callback(totalCost);
    return (totalCost);
}

const addFurniture = (totalCost, callback) =>
{
    /*
    Arrow function - Queries user for cost of furniture, prints it to webpage, and returns updated total cost
    */

    let cost = parseFloat(prompt("Enter the cost for the furniture:"));

    if (cost < 500)
    {
        // If less than $500, take 10% off the cost
        cost *= 0.90;
    }
    else if (cost == NaN)
    {
        cost = 0;
    }

    // Get a handle for the floor paragraph
    let furnitureArea = document.querySelector(".furniture");
    furnitureArea.innerHTML = `Furniture $${cost.toFixed(2)}`;

    // update totals
    totalCost = totalCost + cost;
    callback(totalCost);
    return (totalCost);
}

const updateTotals = (cost) => 
{
    /* 
    Callback function - Updates total cost on webpage
    */

    // Get a handle for the furniture paragraph

    let totalsArea = document.querySelector(".totalCost");

    totalsArea.innerHTML = `Total $${cost.toFixed(2)}`;

}


function main()
{
    let totalCost = 0;
    totalCost = addPaintAndSupplies(totalCost, updateTotals);
    totalCost = addFloorCoverings(totalCost, updateTotals); 
    totalCost = addFurniture(totalCost, updateTotals); 
}
main();