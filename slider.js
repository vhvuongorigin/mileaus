var slideIndex = 0;
showSlides(slideIndex);

autoShowSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("banner__slide");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";
}

function autoShowSlides() {
    var i;
    var slides = document.getElementsByClassName("banner__slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(autoShowSlides, 10000); // Change image every 10 seconds
  }
