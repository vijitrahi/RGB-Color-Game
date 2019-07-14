

	// script working
	/*
	var colors = [
		"rgb(255, 0, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 255, 0)",
		"rgb(0, 255, 255)",
		"rgb(0, 0, 255)",
		"rgb(255, 0, 255)",
	] */

	var colors = generateRandomColors(6);
	var squares = document.querySelectorAll(".square");
	var colorDisplay = document.getElementById("colorDisplay");
	var pickedColor = pickColor();
	var messageDisplay = document.querySelector("#message");
	var h1 = 		document.querySelector("h1");
	var resetBtn =  document.querySelector("#reset");
	var easyBtn =   document.querySelector("#easyBtn");
	var hardBtn =   document.querySelector("#hardBtn");
	var scores = document.querySelector(".score");
	var score = 0;
	var selected = 1;
	var time1 = new Date(); 		//For Starting time whenever new game starts
	var start = null;				//To set time update intervals
	var time;						

	function timer(){
		 updateClock();
		start = setInterval("updateClock()", 10);
	}
	function updateClock(){
		var time2 = new Date();
		time = new Date(time2-time1);		//Time difference between 
		 min = time.getUTCMinutes()
        ,sec = time.getUTCSeconds()
        ,ms = parseInt(time.getUTCMilliseconds()/10);
	document.getElementById("time").innerHTML = "TIME : " +
		(min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 9 ? ms : "0" + ms);
	}
	
	
	// EASY BUTTON
	easyBtn.addEventListener("click", function(){
		newGame();
		selected = 0;
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
		// genetate All new colors
		colors = generateRandomColors(3);
		// pick a new randeom color from array
		pickedColor = pickColor();
		// change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		// change colors of squares
		for(var i = 0; i < squares.length; i++){
			if(colors[i]) {
				squares[i].style.background = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}

	}); // end of EASY BTN
	// HARD BUTTON
	hardBtn.addEventListener("click", function(){
		selected = 1;
		newGame();
		easyBtn.classList.remove("selected");
		hardBtn.classList.add("selected");
		// genetate All new colors
		colors = generateRandomColors(6);
		// pick a new randeom color from array
		pickedColor = pickColor();
		// change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		// change colors of squares
		for(var i = 0; i < squares.length;  i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = 'block';
		}
	});


	// RESET BUTTON
	resetBtn.addEventListener("click", function(){
		// genetate All new colors
		newGame();
		if(selected == 1)
		colors = generateRandomColors(6);
		else
		colors = generateRandomColors(3);	
		// pick a new randeom color from array
		pickedColor = pickColor();
		// change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		resetBtn.textContent = "New Colors";
		h1.style.background = "#3498db";
		// change colors of squares
		for(var i = 0; i < squares.length; i++){
			if(colors[i]) {
				squares[i].style.background = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}

	});

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length;  i++){
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function(){
			// grab color of clicked Square
			var clickedColor = this.style.background;
			// compare color to pickedColor

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "correct!";
				resetBtn.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				scoreCalculator();
				//Calculate Score
			} else {
				messageDisplay.textContent = "Try Again";
				this.style.background = "#3b5998";
				score++;
			}
		});
	}

	function changeColors(color){
		// loop through all squares
		for(var i = 0; i < squares.length; i++){
			// change each color to match given color
			squares[i].style.background = color
		}
	}


	function pickColor(){
		var random = Math.floor(Math.random() * colors.length );
		return colors[random];
	}


	function generateRandomColors(num) {
		// Make an array
		var arr = []
		//repeat num times
		for(var i = 0; i < num ; i++){
			arr.push(randomColor());
		}
		return arr;
	}


	function randomColor(){
		// pick a "RED"   from 0 - 255
		var r = Math.floor(Math.random() * 256 );
		// pick a "GREEN" from 0 - 255
		var g = Math.floor(Math.random() * 256 );
		// pick a "BLUE"  from 0 - 255
		var b = Math.floor(Math.random() * 256 );

		var randomColor = "rgb("+ r +", "+ g +", "+ b +")";
		return randomColor;
	}
	
	
	function newGame(){
		clearInterval(start);
		time1 = new Date();
		start = setInterval("updateClock()", 10);
		score=0;
		scores.textContent = "";
	}

	function scoreCalculator(){
		clearInterval(start);
		var score1;
		var totalTime = ((time.getUTCSeconds()) * 1000 + (time.getUTCMilliseconds()) ) / 1000;
		if(selected==0)
			score1 = (totalTime>5 ? 0 : 100 - 25*score - totalTime*10);
		else
			score1 = (totalTime>8 ? 0 : 100 - 10*score - totalTime*25/4);
		scores.textContent = "SCORE : " + parseInt(score1*10);
	}
	
	
	function goBack() {
    window.history.back();
}
