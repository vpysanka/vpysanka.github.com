let banner_currentSlide = 0;
let banner_nextSlide = 0;
let banner_direction = true;

let banner_slides = document.querySelectorAll('.slides .slide');
let banner_item_link = document.getElementsByClassName('item-link');
let banner_next = document.querySelector('.slider_next');
let banner_prev = document.querySelector('.slider_prev');
let banner = document.querySelector('.banner');

let slideInterval = setInterval(bannerNextSlide, 5000);

for (let i = 0; i < banner_item_link.length; i++) {
    banner_item_link[i].addEventListener('click', function() {
        let newSlide = parseInt(banner_item_link[i].attributes[1].value);
        if (newSlide > banner_currentSlide) {
            banner_direction = true;
        } else {
            banner_direction = false;
        }

        if (banner_currentSlide == newSlide) {
            removeActiveItemLink();
            banner_item_link[i].className = 'item-link active';
        } else {
            banner_showSlide(newSlide, banner_direction);
        }
    });
}

function removeActiveItemLink() {
    for (let i = 0; i < banner_item_link.length; i++) {
        banner_item_link[i].className = 'item-link';
    }
}

function banner_showSlide(banner_nextSlide, banner_direction) {
    if (banner_direction) {
        banner_slides[banner_nextSlide].classList.add('next');
    } else {
        banner_slides[banner_nextSlide].classList.add('prev');
    }
    
    setTimeout(function() {
        removeActiveItemLink();
        banner_item_link[banner_nextSlide].className = 'item-link active';
        
        if (banner_direction) {
            banner_slides[banner_currentSlide].classList.add('left');
            banner_slides[banner_nextSlide].classList.add('left');
        } else {
            banner_slides[banner_currentSlide].classList.add('right');
            banner_slides[banner_nextSlide].classList.add('right');
        }
    }, 100);
    
    setTimeout(function() {
        if (banner_direction) {
            banner_slides[banner_currentSlide].classList.remove('active', 'left');
            banner_slides[banner_nextSlide].classList.remove('next', 'left');
        } else {
            banner_slides[banner_currentSlide].classList.remove('active', 'right');
            banner_slides[banner_nextSlide].classList.remove('prev', 'right');
        }
        banner_slides[banner_nextSlide].classList.add('active');
        banner_currentSlide = banner_nextSlide;
    }, 600);
}

banner_next.addEventListener('click', function() {
    bannerNextSlide();
});

banner_prev.addEventListener('click', function() {
    bannerPrevSlide();
});

banner.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
});

banner.addEventListener('mouseout', function() {
    if (banner_direction) {
        slideInterval = setInterval(bannerNextSlide, 5000);
    } else {
        slideInterval = setInterval(bannerPrevSlide, 5000);
    }
})

function bannerNextSlide() {
    banner_direction = true;
    banner_showSlide((banner_currentSlide + 1) % banner_slides.length, banner_direction);
}

function bannerPrevSlide() {
    banner_direction = false;
    banner_showSlide((banner_slides.length + (banner_currentSlide - 1)) % banner_slides.length, banner_direction);
}
