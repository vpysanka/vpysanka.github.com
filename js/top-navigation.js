let catalog = document.querySelector('.navigation .catalog'),
mega_menu = document.querySelector('.mega-menu'),
cart_menu = document.getElementById('cart-menu'),
shopping_bag = document.querySelector('.shopping-bag i'),
number = document.querySelector('.shopping-bag span');

catalog.addEventListener('click', function() {
    mega_panel(mega_menu, catalog, cart_menu, shopping_bag);
});

shopping_bag.addEventListener('click', function() {
    showCart();
    cart_panel(cart_menu, shopping_bag, mega_menu, catalog, number);
});

document.querySelector('.close').addEventListener('click', function() {
    mega_menu.classList.remove('active'),
    catalog.classList.remove('active');
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
    }
}

function cart_panel(cart_menu, cart, mega, catalog, number) {
    if (cart_menu.classList.contains('active')) {
        cart_menu.classList.remove('active');
        cart.classList.remove('active');
        if (parseInt(number.innerHTML) != 0)
            number.classList.add('active');
    } else {
        cart_menu.classList.add('active');
        cart.classList.add('active');
        number.classList.remove('active');
        mega.classList.remove('active');
        catalog.classList.remove('active');
    }
}
