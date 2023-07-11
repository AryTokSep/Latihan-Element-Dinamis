//slide
var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n) {
  showSlide((slideIndex += n));
}

function dotslide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("content-item");
  var dot = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";

  dot[slideIndex - 1].className += " active";
}

// accordion
const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//email
var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");

function validateEmail(){

    if(!emailField.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        emailError.innerHTML = "Please enter a valid email";
        emailError.style.color = "red";
        
        return false;
    }

    emailError.innerHTML = "email is true";
    emailError.style.color = "green";
    
    return true;
}
