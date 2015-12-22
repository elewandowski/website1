$(document).ready(function(){
	
	$.getScript("myjs.js", console.log("callback succesful"));
	
	$("#1st").css("background", genNewBackgroundUrl());
	$("#2nd").css("background", genNewBackgroundUrl());
	$("#3rd").css("background", genNewBackgroundUrl());
	
});