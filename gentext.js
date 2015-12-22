$(document).ready(function(){
	
	function randomText() {
		var numOfTimes = Math.random(10);
		var output = ""
		for (i=0; i<numOfTimes; i++) {
			output += Math.random(9);
		}
		return output;
	}
	
	function insertRandomText() {
		
	}
	
	function randInt (minimum, maximum) {
		var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		return randomnumber;
	}
	
	function genNewBackgroundUrl(){
		var backgroundFolder = "./resources/background/";
		var backgroundName = "background"+randInt(1, 3)+".png";
		var argument = "url("+backgroundFolder+backgroundName+")";
		return argument;
	}
	
	
	//var elementNumber = 1;
	var elementName = "line-"
	
	//console.log("hey"+$("#line-1").attr("id"));

	//$(elementName).css("background", genNewBackgroundUrl());
	function genBack(){
		for (i=1; i<100; i++){

			$("#"+elementName+i).css("background", genNewBackgroundUrl());
			
			var newLine = $("#"+elementName+(i)).clone();
			newLine.attr("id", elementName+(i+1));

			$("#"+elementName+i).parent().append(newLine);
		
		}
	}
	
	genBack();
	
});