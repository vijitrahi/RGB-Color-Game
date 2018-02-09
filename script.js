

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

	// EASY BUTTON
	easyBtn.addEventListener("click", function(){
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
		colors = generateRandomColors(6);
		// pick a new randeom color from array
		pickedColor = pickColor();
		// change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		resetBtn.textContent = "New Colors";
		h1.style.background = "#3498db";
		// change colors of squares
		for(var i = 0; i < squares.length;  i++) {
			squares[i].style.background = colors[i];
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
			} else {
				messageDisplay.textContent = "Try Again";
				this.style.background = "#3b5998";
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

	function goBack() {
    window.history.back();
}
