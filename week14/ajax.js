const URL_LATEST = "https://xkcd.com/info.0.json";

let max_comics = null;

const WhenGrabLatest = function(data)
{
	console.log(data);
}

function Init()
{
	$.getJSON(URL_LATEST, WhenGrabLatest)
}
Init();