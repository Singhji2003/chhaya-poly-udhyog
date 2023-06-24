let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

function animationLatest(){
    document.addEventListener('scroll', ()=>{
      if(window.scrollY>10){
        document.querySelector('.latestheading').classList.add('animate')
        document.querySelector('.latestheading').classList.add('seven')
      }
    })
  
}
function animationAbout(){
    document.addEventListener('scroll', ()=>{
      if(window.scrollY>650){
        document.querySelector('.aboutheading').classList.add('animate')
       document.querySelector('.aboutheading').classList.add('seven')
      }
    })
  }
  animationLatest();
  animationAbout();