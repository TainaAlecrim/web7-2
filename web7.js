function applyTheme (theme) {
    "use strict"
	document.getElementById("mypage").className = theme;
	localStorage.setItem ("theme", theme);	
}

function applyDayTheme () {
    "use strict"

	applyTheme("day");

}

function applyNightTheme() {
        "use strict"
	applyTheme("night");

}

function addButtonLestenrs () {
        "use strict"

document.getElementById("b1").addEventListener("click", applyDayTheme);
document.getElementById("b2").addEventListener("click", applyNightTheme);

}

function initiate(){
        "use strict"

	if(typeof(localStorage)===undefined)
		alert("the application can not be executed properly in this browser");
	else{
		if(localStorage.getItem("theme")===null)
			applyDayTheme();
		else
			applyTheme(localStorage.getItem("theme"));
		
	}
	addButtonLestenrs();
}

initiate();

var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
