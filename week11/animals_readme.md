I originally attempted to add a separate h3 for the animal name, but that caused unexpected results. Instead, I did the following:
1. I modified establishFeedTimes to concatenate the animal name and feed times together, using .html instead of .text so that the line break would render.

```js
const EstablishFeedTimes = (i) => 
{
	//console.log(animals[i].feed_times);
	output_txt = animals[i].animal_name + "<br>" + animals[i].feed_times;
	$(".care").eq(i).html(output_txt);
};
```

2. I changed the mouseout function for the boxes to call establishFeedTimes with the current index instead of writing to the page directly.

```js
	$(".box").on("mouseout", function () 
	{
		let indexOfAnimal = $(".box").index(this);
		EstablishFeedTimes(indexOfAnimal);

		//$(this).find("p.care").text(animals[indexOfAnimal].feed_times);
		//jQuery.each($(".box"), EstablishFeedTimes);
	});
```