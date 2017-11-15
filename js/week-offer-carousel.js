let slides = document.getElementsByClassName('week-offer-block');
let slideIndex = 0;
let elements;

const prev = document.querySelector('.wo_prev');
const next = document.querySelector('.wo_next');

next.addEventListener('click', function() {
    elements = Math.floor(document.querySelector('.week-offer-all-blocks').clientWidth / 300);
    nextPrev(elements);
});
    
prev.addEventListener('click', function() {
    elements = Math.floor(document.querySelector('.week-offer-all-blocks').clientWidth / 300);
    nextPrev(-elements);
});
    
function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slides.length - slideIndex >= elements) {
        for (let i = 0; i < elements; i++) {
            slides[slideIndex + i].style.display = "inline-block";
        }
    } else {
        for (let a = 0; a <= (slides.length - 1 - slideIndex); a++) {
            slides[slideIndex + a].style.display = "inline-block";
        }

        for (let b = 0; b <= (elements - (slides.length - slideIndex)); b++) {
            slides[slideIndex - b].style.display = "inline-block";
        }
    }
    
    if (slides.length - slideIndex <= elements) {
        slideIndex = slides.length - elements;
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

function nextPrev(elements) {
    slideIndex += elements;

    if (slideIndex < 0)
        slideIndex = 0;
    
    showSlide();
}
