var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
	}

setGradient();

function RandomColorValue() {
  var letters = '0123456789abcdef';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newRandomColorGradient() {
	color1.value = RandomColorValue();
	color2.value = RandomColorValue();
	setGradient();
	hexToRgb(color1.value);
	}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomcolors.addEventListener("click", newRandomColorGradient);





