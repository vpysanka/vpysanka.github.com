let nav = document.createElement('nav');
nav.setAttribute('class', 'navigation');

let ul_links = document.createElement('ul');

let li_catalog = document.createElement('li');
let a_catalog = document.createElement('a');
a_catalog.setAttribute('class', 'catalog');
a_catalog.innerHTML = "Каталог товаров";
li_catalog.append(a_catalog);
ul_links.appendChild(li_catalog);

let li_about = document.createElement('li');
let a_about = document.createElement('a');
if (location.pathname.split('/')[location.pathname.split('/').length - 1] == "about.html") {
    a_about.setAttribute('class', 'active');    
} else {
    a_about.setAttribute('href', 'about.html')
}
a_about.innerHTML = "О нас";
li_about.appendChild(a_about);
ul_links.appendChild(li_about);

let li_delivery = document.createElement('li');
let a_delivery = document.createElement('a');
if (location.pathname.split('/')[location.pathname.split('/').length - 1] == "delivery.html") {
    a_delivery.setAttribute('class', 'active');    
} else {
    a_delivery.setAttribute('href', 'delivery.html')
}
a_delivery.innerHTML = "Оплата и доставка";
li_delivery.appendChild(a_delivery);
ul_links.appendChild(li_delivery);

let li_contacts = document.createElement('li');
let a_contacts = document.createElement('a');
if (location.pathname.split('/')[location.pathname.split('/').length - 1] == "contacts.html") {
    a_contacts.setAttribute('class', 'active');    
} else {
    a_contacts.setAttribute('href', 'contacts.html')
}
a_contacts.innerHTML = "Контакты";
li_contacts.appendChild(a_contacts);
ul_links.appendChild(li_contacts);

let li_blog = document.createElement('li');
let a_blog = document.createElement('a');
if (location.pathname.split('/')[location.pathname.split('/').length - 1] == "blog.html") {
    a_blog.setAttribute('class', 'active');    
} else {
    a_blog.setAttribute('href', 'blog.html')
}
a_blog.innerHTML = "Блог";
li_blog.appendChild(a_blog);
ul_links.appendChild(li_blog);

let div = document.createElement('div');
div.setAttribute('class', 'shopping-bag');
div.setAttribute('id', 'total-items');

let i = document.createElement('i');
div.appendChild(i);

let span = document.createElement('span');
span.innerHTML = 0;
div.appendChild(span);

nav.appendChild(ul_links);
nav.appendChild(div);
document.querySelector('.top-navigation').append(nav);

if (localStorage.getItem('myCart') != null) {
    cartData = JSON.parse(localStorage.getItem('myCart'));
    if (cartData[0].TotalQuantity >= 1 ) {
        document.getElementById('total-items').querySelector('span').innerHTML = cartData[0].TotalQuantity;
        document.querySelector('.shopping-bag span').classList.add('active');
    }
}



let label_mega_search = document.createElement('label');
label_mega_search.setAttribute('for', 'mega-search');
label_mega_search.innerHTML = "Поиск";

let input_mega_search = document.createElement('input');
input_mega_search.setAttribute('type', 'search');
input_mega_search.setAttribute('id', 'mega-search');
input_mega_search.setAttribute('placeholder', 'Поиск товара');

let div_mega_search = document.createElement('div');
div_mega_search.setAttribute('class', 'mega-search');
div_mega_search.appendChild(label_mega_search);
div_mega_search.appendChild(input_mega_search);

div_mega_menu_top = document.createElement('div');
div_mega_menu_top.setAttribute('class', 'mega-menu-top');
div_mega_menu_top.appendChild(div_mega_search);

let div_item_container = document.createElement('div');
div_item_container.setAttribute('class', 'items-container');

let div_smartphones = document.createElement('div');
div_smartphones.setAttribute('class', 'container');
let a_smartphones = document.createElement('a');
a_smartphones.setAttribute('href', '#');
a_smartphones.innerHTML = "Смартфоны";
let div_smartphones_image = document.createElement('div');
div_smartphones_image.setAttribute('class', 'container-image');
let image_smartphones = document.createElement('img');
image_smartphones.setAttribute('src', 'img/items/phones/101_1.jpg');
image_smartphones.setAttribute('height', '100');
div_smartphones_image.appendChild(image_smartphones);
a_smartphones.appendChild(div_smartphones_image);
div_smartphones.appendChild(a_smartphones);

let div_tablets = document.createElement('div');
div_tablets.setAttribute('class', 'container');
let a_tablets = document.createElement('a');
a_tablets.setAttribute('href', '#');
a_tablets.innerHTML = "Планшеты";
let div_tablets_image = document.createElement('div');
div_tablets_image.setAttribute('class', 'container-image');
let image_tablets = document.createElement('img');
image_tablets.setAttribute('src', 'img/items/tablets/201_1.jpg');
image_tablets.setAttribute('height', '100');
div_tablets_image.appendChild(image_tablets);
a_tablets.appendChild(div_tablets_image);
div_tablets.appendChild(a_tablets);

let div_watches = document.createElement('div');
div_watches.setAttribute('class', 'container');
let a_watches = document.createElement('a');
a_watches.setAttribute('href', '#');
a_watches.innerHTML = "Смарт-часы";
let div_watches_image = document.createElement('div');
div_watches_image.setAttribute('class', 'container-image');
let image_watches = document.createElement('img');
image_watches.setAttribute('src', 'img/items/watches/301_1.jpg');
image_watches.setAttribute('height', '100');
div_watches_image.appendChild(image_watches);
a_watches.appendChild(div_watches_image);
div_watches.appendChild(a_watches);

div_item_container.appendChild(div_smartphones);
div_item_container.appendChild(div_tablets);
div_item_container.appendChild(div_watches);
document.querySelector('.mega-menu').appendChild(div_mega_menu_top);
document.querySelector('.mega-menu').appendChild(div_item_container);



let ul_nav_menu = document.createElement('ul');

let li_nav_menu_catalog = document.createElement('li');
let a_nav_menu_catalog = document.createElement('a');
a_nav_menu_catalog.setAttribute('href', '#catalog');
a_nav_menu_catalog.innerHTML = "Каталог товаров";
li_nav_menu_catalog.appendChild(a_nav_menu_catalog);

let li_nav_menu_about = document.createElement('li');
let a_nav_menu_about = document.createElement('a');
a_nav_menu_about.setAttribute('href', 'about.html');
a_nav_menu_about.innerHTML = "О нас";
li_nav_menu_about.appendChild(a_nav_menu_about);

let li_nav_menu_delivery = document.createElement('li');
let a_nav_menu_delivery = document.createElement('a');
a_nav_menu_delivery.setAttribute('href', 'delivery.html');
a_nav_menu_delivery.innerHTML = "Оплата и доставка";
li_nav_menu_delivery.appendChild(a_nav_menu_delivery);

let li_nav_menu_contacts = document.createElement('li');
let a_nav_menu_contacts = document.createElement('a');
a_nav_menu_contacts.setAttribute('href', 'contacts.html');
a_nav_menu_contacts.innerHTML = "Контакты";
li_nav_menu_contacts.appendChild(a_nav_menu_contacts);

let li_nav_menu_blog = document.createElement('li');
let a_nav_menu_blog = document.createElement('a');
a_nav_menu_blog.setAttribute('href', 'blog.html');
a_nav_menu_blog.innerHTML = "Блог";
li_nav_menu_blog.appendChild(a_nav_menu_blog);

ul_nav_menu.appendChild(li_nav_menu_catalog);
ul_nav_menu.appendChild(li_nav_menu_about);
ul_nav_menu.appendChild(li_nav_menu_delivery);
ul_nav_menu.appendChild(li_nav_menu_contacts);
ul_nav_menu.appendChild(li_nav_menu_blog);

document.getElementById('nav-menu').appendChild(ul_nav_menu);



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
        catalog.classList.remove('active');
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
