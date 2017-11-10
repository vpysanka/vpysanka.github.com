let catalog = document.querySelector('.navigation .catalog'),
mega_menu = document.querySelector('.mega-menu'),
shopping_bag = document.querySelector('.shopping-bag i'),
cart_menu = document.getElementById('cart-menu'),
nav_icon = document.getElementById('nav-icon'),
nav_menu = document.getElementById('nav-menu'),
number = document.querySelector('.shopping-bag span');

catalog.addEventListener('click', function() {
    mega_panel(mega_menu, catalog, cart_menu, shopping_bag, number);
});

shopping_bag.addEventListener('click', function() {
    cart_panel(cart_menu, shopping_bag, mega_menu, catalog, number, nav_icon, nav_menu);
});

nav_icon.addEventListener('click', function() {
    navigation_panel(nav_icon, nav_menu, shopping_bag, cart_menu, number);
});

mega_menu.addEventListener('mouseleave', function() {
    setTimeout(function() {
        mega_menu.classList.remove('active');
    }, 500);
});

cart_menu.addEventListener('mouseleave', function() {
    setTimeout(function() {
        cart_menu.classList.remove('active');
        shopping_bag.classList.remove('active');
        if (parseInt(number.innerHTML) != 0)
            number.classList.add('active');
    }, 500);
});

nav_menu.addEventListener('mouseleave', function() {
    setTimeout(function() {
        nav_menu.classList.remove('active');
        nav_icon.classList.remove('active');
    }, 500);
});

function mega_panel(mega, catalog, cart_menu, cart) {
    if (mega.classList.contains('active')) {
        mega.classList.remove('active');
        catalog.classList.remove('active');
    } else {
        mega.classList.add('active');
        catalog.classList.add('active');
        cart_menu.classList.remove('active');
        cart.classList.remove('active');
        if (parseInt(number.innerHTML) != 0)
            number.classList.add('active');
    }
}

function cart_panel(cart_menu, cart, mega, catalog, number, nav_icon, nav_menu) {
    if (cart_menu.classList.contains('active')) {
        cart_menu.classList.remove('active');
        cart.classList.remove('active');
        if (parseInt(number.innerHTML) != 0)
            number.classList.add('active');
    } else {
        showCart();
        cart_menu.classList.add('active');
        cart.classList.add('active');
        number.classList.remove('active');
        mega.classList.remove('active');
        catalog.classList.remove('active');
        nav_icon.classList.remove('active');
        nav_menu.classList.remove('active');
    }
}

function navigation_panel(nav_icon, nav_menu, shopping_bag, cart_menu, number) {
    if (nav_icon.classList.contains('active')) {
        nav_icon.classList.remove('active');
        nav_menu.classList.remove('active');
    } else {
        nav_icon.classList.add('active');
        nav_menu.classList.add('active');
        shopping_bag.classList.remove('active');
        cart_menu.classList.remove('active');
        if (parseInt(number.innerHTML) != 0)
            number.classList.add('active');
    }
}
