const thanksgivingMeal =
{
    starter :
    {
        fruit: "honeydew melon",
        wine: "moscato",

        calories: 180,
    },

    entree : 
    {
        meat: "Turkey",
        alt: "Stuffed green peppers",

        vegetables :
        {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio",
        },

        sides :
        {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese",
        },

        calories: 450
    },
    
    dessert : 
    {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",

        calories: 300,
    },

    total_cost : 25.00,
    senior_discount: 0.10,

    prettyPrint : function() 
    {
        /*
        Collate the menu here
        display the content of the starter, the entree and the dessert
        */

        // Start your meal with honeydew melon and a glass of moscato.
        // Help yourself to Turkey or Stuffed green peppers with Radacchio, French beans, and Creamed mashed potatoes.
        // Have a side! Plenty of garlic bread rolls and Macaroni and Cheese.
        // Finish your meal with a sweet pumpkin-vanilla ice cream and frosted pumpkin pie.
        let menuStr = `Start your meal with ${this.starter.fruit} and a glass of ${this.starter.wine}. ` +
            `Help yourself to ${this.entree.meat} or ${this.entree.alt} with ${this.entree.vegetables.salad}, ${this.entree.vegetables.greens}, and ${this.entree.vegetables.potatoes}. ` +
            `Have a side! Plenty of ${this.entree.sides.bread} and ${this.entree.sides.pasta}. ` + 
            `Finish your meal with a sweet ${this.dessert.ice_cream} ice cream and ${this.dessert.cake}. `
        
        console.log(`PretyPrint output: ${menuStr}`)

        return menuStr;
    },

    totalPrice(isSenior)
    {
        /*
        display the total price, given indicator isSenior - true or false
        */

        let total = this.total_cost;

        if (isSenior)
        {
            total = total * ( 1 - this.senior_discount );
        }

        console.log(`Unrounded Total Price (senior == ${isSenior}): ${total}`)

        return total.toFixed(2); // pad/round to two decimal points
    },

    totalCalories : function()
    {
        /* 
        Add the total calories
        */
       let output = this.starter.calories + this.entree.calories + this.dessert.calories;

       console.log(`Total Calories: ${output}`)

       return output;
    },

    caloriesFrom: function(indicator)
    {
        /*
        get the total calories for the indicator
        1 - starter, 2 - entree, 3 - dessert
        */

        let calories;

        // would be easier to have grab from some kind of array
        if (indicator == 1)
        {
            calories = this.starter.calories;
        }
        else if (indicator == 2)
        {
            calories = this.entree.calories;
        }
        else if (indicator == 3)
        {
            calories = this.dessert.calories;
        }
        else
        {
            console.log(`caloriesFrom.indicator is set to ${indicator}, which is invalid!`)
            alert(`caloriesFrom.indicator is set to ${indicator}, which is invalid!`)
            calories = 65535; // make error obvious on page
        }

        console.log(`Calories for meal ${indicator}: ${calories}`)

        return calories;
    },
}

function main()
{
    let GreetingHTML = document.querySelector("#greeting");
    let MealHTML = document.querySelector("#full_meal");
    let PriceHTML = document.querySelector("#price_info");
    let CalorieHTML = document.querySelector("#calorie_info");

    let GreetingText = "Enjoy your Thanksgiving this Year!";

    let MealText = thanksgivingMeal.prettyPrint();

    let PriceText = `Seniors get a ${(thanksgivingMeal.senior_discount * 100)}% discount. Total cost for your Thanksgiving meal: ` + 
        `Adults: $${thanksgivingMeal.totalPrice(false)}, Seniors: $${thanksgivingMeal.totalPrice(true)}`;

    // "Worried about calories? Total damage is 930 (starter: 180; entrée : 450; dessert: 300)"
    let CalorieText = `Worried about calories? Total damage is ${thanksgivingMeal.totalCalories()}` +
        ` (starter: ${thanksgivingMeal.caloriesFrom(1)}; entrée: ${thanksgivingMeal.caloriesFrom(2)}` +
        `; dessert: ${thanksgivingMeal.caloriesFrom(3)})`;

    GreetingHTML.innerText = GreetingText;
    MealHTML.innerText = MealText;
    PriceHTML.innerText = PriceText;
    CalorieHTML.innerText = CalorieText;
}
main()