let slideIndex = 0;
let slides = document.getElementsByClassName('week-offer-block');
let x = 0;
let phoneScreen = 599;

const prev = document.querySelector('.wo_prev');
const next = document.querySelector('.wo_next');

if (window.innerWidth <= phoneScreen)
    x = 1;
else
    x = 3;

next.addEventListener('click', function() {
    nextPrev(x);
});
    
prev.addEventListener('click', function() {
    nextPrev(-x);
});
    
function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if (window.innerWidth <= phoneScreen) {
        slides[slideIndex].style.display = "inline-block";
    } else {
        if (slides.length - slideIndex >= 3) {
            slides[slideIndex].style.display = "inline-block";
            slides[slideIndex + 1].style.display = "inline-block";
            slides[slideIndex + 2].style.display = "inline-block";
        }
        
        if (slides.length - slideIndex == 2) {
            slides[slideIndex - 1].style.display = "inline-block";
            slides[slideIndex].style.display = "inline-block";
            slides[slideIndex + 1].style.display = "inline-block";
        }
        
        if (slides.length - slideIndex == 1) {
            slides[slideIndex - 2].style.display = "inline-block";
            slides[slideIndex - 1].style.display = "inline-block";
            slides[slideIndex].style.display = "inline-block";
        }
    }
    
    if (slides.length - slideIndex <= x) {
        document.getElementsByClassName('wo_next')[0].style.display = "none";
    } else {
        document.getElementsByClassName('wo_next')[0].style.display = "inline-block";
    }
    
    if (slideIndex == 0) {
        document.getElementsByClassName('wo_prev')[0].style.display = "none";
    } else {
        document.getElementsByClassName('wo_prev')[0].style.display = "inline-block";
    }
}
    
function nextPrev(n) {
    slideIndex += n;
    showSlide();
}
