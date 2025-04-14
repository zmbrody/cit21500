const cocktails = 
[
	// source: https://www.foodnetwork.com/recipes/photos/mocktail-recipes
	// note: would break and sometimes not hide the recipie if I used real <ul>+<br>&#x2022;&emsp;, so I faked it with <br>&#x2022;&emsp;
	{
		cocktail_name: "Virgin Mojito",
		cocktail_id: "virgin_mojito",
		ingredients: "<br>&#x2022;&emsp;1/2 cup loosely packed fresh mint leaves plus 2 sprigs, for serving<br>&#x2022;&emsp;3 limes, 1 quartered, 2 juiced (about 1/4 cup)<br>&#x2022;&emsp;3 ounces nonalcoholic rum, such as Lyre's White Cane Spirit, optional<br>&#x2022;&emsp;2 tablespoons light agave syrup<br>&#x2022;&emsp;2 cups ice<br>&#x2022;&emsp;1/2 cup seltzer or club soda",
		recipe: "Add the mint leaves and lime quarters to a cocktail shaker and muddle with a muddler or the handle of a wooden spoon until the mint has released its oils, about 20 seconds. Add the lime juice, nonalcoholic rum, if using, agave and ice and shake vigorously until the strainer starts to develop a frost on the outside, about 30 seconds. Divide the contents equally between 2 large rocks or high ball glasses. Fill the glasses with seltzer and serve with a fresh sprig of mint.",
		calories: 176,
	},
	{
		cocktail_name: "Virgin Strawberry Daiquiri",
		cocktail_id: "virgin_strawberry_daiquiri",
		ingredients: "<br>&#x2022;&emsp;2 cups fresh strawberries or one 10-ounce bag frozen strawberries, plus 1 strawberry, halved, for serving<br>&#x2022;&emsp;1 cup ice<br>&#x2022;&emsp;3/4 cup citrus soda, such as Fresca, Sprite or San Pellegrino<br>&#x2022;&emsp;3 ounces nonalcoholic rum, such as Lyre's White Cane Spirit, optional<br>&#x2022;&emsp;3 ounces nonalcoholic rum, such as Lyre's White Cane Spirit, optional<br>&#x2022;&emsp;5 tablespoons light agave syrup<br>&#x2022;&emsp;1/4 cup lime juice",
		recipe: "Add the strawberries, ice, citrus soda, nonalcoholic rum, if using, agave and lime juice to a blender and blend until smooth. Serve in 2 tall glasses or daiquiri glasses garnished with a strawberry half on each rim.",
		calories: 309,
	},
	{
		cocktail_name: "Virgin Piña Colada",
		cocktail_id: "virgin_pina_colada",
		ingredients: "<br>&#x2022;&emsp;1/2 cup coconut milk<br>&#x2022;&emsp;1/4 cup cream of coconut, such as Coco Lopez<br>&#x2022;&emsp;3 tablespoons light agave syrup<br>&#x2022;&emsp;1 cup fresh or frozen pineapple chunks plus 2 pineapple wedges, for garnish<br>&#x2022;&emsp;Juice of 1/2 lime (about 1 tablespoon)<br>&#x2022;&emsp;1 1/2 cups ice<br>&#x2022;&emsp;3 ounces nonalcoholic rum, such as Lyre's White Cane Spirit, optional",
		recipe: "Add the coconut milk, cream of coconut and agave to a blender and blend until well combined, about 20 seconds. Add the pineapple chunks and lime juice and blend until smooth, another 30 to 45 seconds, then add the ice and nonalcoholic rum, if using, and blend until smooth and creamy. Divide between 2 tall or daiquiri glasses and garnish each with a pineapple wedge. (I used frozen chunks but use fresh ones if you have them.)",
		calories: 557,
	},
	{
		cocktail_name: "Tart Cherry Shirley Temple",
		cocktail_id: "tart_cherry_shirley_temple",
		ingredients: "<br>&#x2022;&emsp;1 cup (8 ounces) ginger ale<br>&#x2022;&emsp;3 tablespoons (1 1/2 ounces) unsweetened tart cherry juice<br>&#x2022;&emsp;2 tablespoons (1 ounce) freshly squeezed orange juice<br>&#x2022;&emsp;Maraschino cherries, for garnish",
		recipe: "Fill a 16-ounce glass with ice. Pour in the ginger ale, cherry juice and orange juice. Stir to combine. Garnish with maraschino cherries.",
		calories: 116,
	},
	{
		cocktail_name: "Virgin Mary",
		cocktail_id: "virgin_mary",
		ingredients: "<br>&#x2022;&emsp;3 stalks celery from the heart, including leaves, plus extra for serving<br>&#x2022;&emsp;2 teaspoons prepared horseradish<br>&#x2022;&emsp;1 teaspoon chopped shallot<br>&#x2022;&emsp;Dash Worcestershire sauce<br>&#x2022;&emsp;1 teaspoon celery salt<br>&#x2022;&emsp;1 teaspoon kosher salt<br>&#x2022;&emsp;12 dashes hot sauce, or to taste (recommended: Tabasco)<br>&#x2022;&emsp;2 limes, juiced<br>&#x2022;&emsp;1 (48-ounce) bottle tomato juice (recommended: Sacramanto)",
		recipe: "Cut the celery in large dice, including the leaves, and puree in the bowl of a food processor fitted with the steel blade. Add the horseradish, shallot, Worcestershire sauce, celery salt, kosher salt, Tabasco and lime juice and process until smooth. Pour the mixture into a large pitcher, add the tomato juice, and stir.<br>Pour into tall glasses and serve each with the top half of a celery stalk.",
		calories: 50,
	},
]