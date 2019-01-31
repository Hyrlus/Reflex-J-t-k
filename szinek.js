var numSquares = 6;
var szinek = getColors(numSquares); //colors
var negyzetek = document.querySelectorAll(".negyzetek"); //squares
fillSquares(negyzetek,szinek);
var headerDisplay = document.querySelector("#hdrtxt");
var feedback = document.querySelector("#feedback");
var pickedColor = pickColor(szinek);
var h1Display = document.querySelector("h1");
headerDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");
var currentMode = document.querySelector(".selected");

resetButton.addEventListener("click", reset);



for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		if(currentMode !== this) {
			this.classList.add("selected");
			currentMode.classList.remove("selected");
			currentMode = this;
			reset();
		}
	});
}


for(var i = 0; i < negyzetek.length; i++) {
	negyzetek[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			
			feedback.textContent = "Helyes!";
			
			for(var i = 0; i < negyzetek.length; i++) {
				negyzetek[i].style.background = pickedColor;
			}
			h1Display.style.background = pickedColor;
			resetButton.textContent = "Még egy játék?";
		} else {
			
			feedback.textContent = "Nem jó.";
			this.style.background = "#232323";
		}
	});
}

function reset() {
	h1Display.style.background = "green";
	feedback.textContent = "";
	resetButton.textContent = "Új szín";
	
	if(currentMode.textContent === "Easy") {
		numSquares = 3;
	}
	
	else {
		numSquares = 6;
	}
	szinek = getColors(numSquares);
	fillSquares(negyzetek,szinek);
	pickedColor = pickColor(szinek);
	headerDisplay.textContent = pickedColor;
}


function getColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}


function pickColor(choices) {
	var random = Math.floor(Math.random() * choices.length);
	return choices[random];
}


function fillSquares(negyzetek, szinek) {
	for(var i = 0; i < negyzetek.length; i++) {
		negyzetek[i].style.display = "block";
		if(szinek[i]) {
			negyzetek[i].style.background = szinek[i];
		} else {
			negyzetek[i].style.display = "none";
		}
	}
}



function makeColor() {
	
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



