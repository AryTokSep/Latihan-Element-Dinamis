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
