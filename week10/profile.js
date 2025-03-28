const profiler = () =>
{
	// `$` is alias for `jQuery`
	$("#name").text("Zachary Brody");
	$("#major").text("CIT");
	$("#year").text("2025");
	$("h4").text("USA");
}

$(document).ready(profiler);