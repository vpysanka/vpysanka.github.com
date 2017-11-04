let slideIndex = 0;
let slides = document.getElementsByClassName('week-offer-block');

const prev = document.querySelector('.wo_prev');
const next = document.querySelector('.wo_next');

for (let i = 3; i < slides.length; i++) {
    slides[i].style.display = "none";
}    
            
next.addEventListener('click', function() {
    nextPrev(3);
});
    
prev.addEventListener('click', function() {
    nextPrev(-3);
});
    
function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
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
    
    if (slides.length - slideIndex <= 3) {
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