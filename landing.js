$(document).ready(function(){

	$("#1st").css("background", genNewBackgroundUrl());
	$("#2nd").css("background", genNewBackgroundUrl());
	$("#3rd").css("background", genNewBackgroundUrl());

	$("button").click(function(){
		backgroundupdate();
	});
	

	
	$("body").mousemove(function(e){
		mx = e.pageX;
		my = e.pagey;
	});
	
	$("#cv").attr("width", window.innerWidth-1);
	$("#cv").attr("height", window.innerHeight-1);
	
	var mx = 1;
	var my = 1;
	var rotateRate = 0
	var delta = 0;
	
	function drawOct(transX, transY){
		var c = document.getElementById("cv");
		var ctx = c.getContext("2d");
		ctx.fillStyle="white";
		
		ctx.save();
		ctx.translate(transX,transY);
		rotateRate = (mx/screen.width*0.05);
		delta += rotateRate;
		ctx.rotate(delta);
		
		var triangleLengthX = (mx/screen.width*50+40);
		var triangleLengthY = (mx/screen.height*100);
		ctx.beginPath();
		ctx.moveTo(10, 10);
		ctx.lineTo(100, 80);
		ctx.lineTo(triangleLengthY, triangleLengthX);
		ctx.lineTo(10, 10);
		
		ctx.stroke();
		ctx.restore();
		
		
		if(delta>Math.PI*2) {
			ctx.fillRect(0, 0, c.width, c.height);
			delta = 0;
		}
	}
	
	
	setInterval( function(){ drawOct(window.innerWidth/2, window.innerHeight/2) }, 50);
	
	/* function createInterval(f, dynamicParameter1, dynamicParameter2, interval) { setInterval(function() { f(dynamicParameter1, dynamicParameter2); }, interval); }
	
	for(i=0; i<4; i++){
		createInterval(drawOct, window.innerWidth/8*(i*2+1), window.innerHeight/2, 50);
	} */
	
	
	
	function genNewBackgroundUrl(){
		var backgroundFolder = "./resources/background/";
		var backgroundName = "background"+randInt(1, 3)+".png";
		var argument = "url("+backgroundFolder+backgroundName+")";
		return argument;
	}
	
	function backgroundupdate() {
		var argument = genNewBackgroundUrl();
		$("body").css("background", argument);
		$("body").find("*").css("background", argument);
	}
	
	function randInt (minimum, maximum) {
		var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		return randomnumber;
	}
	
	function duplicate() {
		var newimg = document.createElement("img");
		newimg.setAttribute("src", "resources/emil.jpg");
		newimg.setAttribute("height", "50%");
		newimg.setAttribute("width", "50%");
		
		
		
		for (i=0; i<10; i++){
			console.log(i);
			console.log("length " + document.getElementById("emilpicdiv").childNodes.length);
			console.log(document.getElementById("emilpicdiv").childNodes[i+1]);
			var sum = i + 2;
			console.log("sum " + sum);
			document.getElementById("emilpicdiv").insertBefore(newimg, document.getElementById("emilpicdiv").childNodes[i+2]);
			console.log(document.getElementById("emilpicdiv").childNodes[i+2]);
		}
	}

	function randomText() {
		var numOfTimes = Math.random(10);
		var output = ""
		for (i=0; i<numOfTimes; i++) {
			output += Math.random(9);
		}
		return output;
	}
	
	function insertRandomText() {
		console.log("hello");
		console.log($(this).parent());
		//$(this).parent("p").prepend( document.createTextNode( randomText() ) );
	}

	$("#emilpic").mouseenter( function(){
		$(".left-column-text").text(randomText);
		console.log("mouse enter pic");
	});

});