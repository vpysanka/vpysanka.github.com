let wo_slides = document.getElementsByClassName('week-offer-block');
let wo_slideIndex = 0;
let wo_elements;
let wo_blockWidth;

const wo_prev = document.querySelector('.wo_prev');
const wo_next = document.querySelector('.wo_next');

wo_next.addEventListener('click', function() {
    wo_blockWidthDetermine();
    wo_elements = Math.floor(document.querySelector('.week-offer-all-blocks').clientWidth / wo_blockWidth);
    wo_nextPrev(wo_elements);
});
    
wo_prev.addEventListener('click', function() {
    wo_blockWidthDetermine();
    wo_elements = Math.floor(document.querySelector('.week-offer-all-blocks').clientWidth / wo_blockWidth);
    wo_nextPrev(-wo_elements);
});
    
function wo_showSlide() {
    for (let i = 0; i < wo_slides.length; i++) {
        wo_slides[i].style.display = "none";
    }

    if (wo_slides.length - wo_slideIndex >= wo_elements) {
        for (let i = 0; i < wo_elements; i++) {
            wo_slides[wo_slideIndex + i].style.display = "inline-block";
        }
    } else {
        for (let a = 0; a <= (wo_slides.length - 1 - wo_slideIndex); a++) {
            wo_slides[wo_slideIndex + a].style.display = "inline-block";
        }

        for (let b = 0; b <= (wo_elements - (wo_slides.length - wo_slideIndex)); b++) {
            wo_slides[wo_slideIndex - b].style.display = "inline-block";
        }
    }
    
    if (wo_slides.length - wo_slideIndex <= wo_elements) {
        wo_slideIndex = wo_slides.length - wo_elements;
        document.getElementsByClassName('wo_next')[0].style.display = "none";
    } else {
        document.getElementsByClassName('wo_next')[0].style.display = "inline-block";
    }
    
    if (wo_slideIndex == 0) {
        document.getElementsByClassName('wo_prev')[0].style.display = "none";
    } else {
        document.getElementsByClassName('wo_prev')[0].style.display = "inline-block";
    }
}

function wo_nextPrev(wo_elements) {
    wo_slideIndex += wo_elements;

    if (wo_slideIndex < 0)
        wo_slideIndex = 0;
    
    wo_showSlide();
}

function wo_blockWidthDetermine() {
    if (document.querySelector('.week-offer-all-blocks').clientWidth > 979) {
        wo_blockWidth = 300;
    } else {
        wo_blockWidth = 234;
    }
}
