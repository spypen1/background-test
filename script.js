var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function cssContent(){
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	cssContent();
}

function setBg() {
  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
  var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
  body.style.background = "linear-gradient(to right, " 	+  randomColor	+ ", "	+ randomColor2 + ")";
  color1.value = randomColor;
  color2.value = randomColor2;
  cssContent();
  }

  


button.addEventListener("click", setBg);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var dom = document.getElementById('gradient');
dom.style.background = 'linear-gradient(to right' + ', ' + color1.value + ', ' + color2.value + ')';

css.textContent = body.style.background