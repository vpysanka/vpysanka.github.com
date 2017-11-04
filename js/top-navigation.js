let catalog = document.querySelector('.navigation .catalog'),
mega_menu = document.querySelector('.mega-menu'),
cart_menu = document.getElementById('cart-menu'),
shopping_bag = document.querySelector('.shopping-bag i'),
number = document.querySelector('.shopping-bag span');

let cartData = [];
let totalPrice;
let totalQuantity;

let productId;
let productName;
let productHref;
let productImage;
let productPrice;
let productQuantity;

catalog.addEventListener('click', function() {
    mega_panel(mega_menu, catalog, cart_menu, shopping_bag);
});

shopping_bag.addEventListener('click', function() {
    cart_panel(cart_menu, shopping_bag, mega_menu, catalog, number);
});

document.querySelector('.close').addEventListener('click', function() {
    mega_menu.classList.remove('active'),
    catalog.classList.remove('active');
});

    //document.body.addEventListener('mousedown', function() {
    //    document.querySelector(".mega-menu").classList.remove('active'),
    //    document.querySelector(".navigation .catalog").classList.remove('active'),
    //    document.getElementById("cart-menu").classList.remove('active'), 
    //    document.querySelector(".shopping-bag ul li a").classList.remove('active')
    //});

if (localStorage.getItem('myCart') != null) {
    cartData = JSON.parse(localStorage.getItem('myCart'));
    if (cartData[0][1] >= 1 ) {
        document.querySelector('.cart-items').append(
            createCartItem(productId, productName, productPrice, productImage, productHref, productQuantity));
        outTotalPrice = (cartData[0][0] + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        document.getElementById('total-price').querySelector('span').innerHTML = outTotalPrice;
        document.getElementById('total-items').querySelector('span').innerHTML = cartData[0][1];
        number.classList.add('active');
        
        if (document.querySelector('.empty-cart')) {
            createCart();
        }

        for (let t = 101; t < cartData.length; t++) {
            if (cartData[t] != null) {
                productId = cartData[t][0];
                productName = cartData[t][1];
                productHref = cartData[t][2];
                productImage = cartData[t][3];
                productPrice = cartData[t][4];
                productQuantity = cartData[t][5];
            }
        }
    }
}

let addToCart = document.getElementsByName('buy-button');

for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', function() {
        let productId = this.parentNode.getAttribute('productId'),
            productPrice = this.parentNode.getAttribute('productPrice'),
            productName = this.parentNode.getAttribute('productName'),
            productImage = this.parentNode.getAttribute('productImage'),
            productHref = this.parentNode.getAttribute('productHref');

        let productQuantity = 1;

        if (document.querySelector('.empty-cart')) {
            createCart();
        }

        if (document.getElementById("product_" + productId)) {
            let new_price = parseInt(document.getElementById('price_' + productId).getAttribute('totalPrice'));
            new_price += (parseInt(productQuantity) * parseInt(productPrice));
            document.getElementById('price_' + productId).setAttribute('totalPrice', new_price);

            let new_quantity = parseInt(document.getElementById('qty_' + productId).innerHTML);

            new_quantity += parseInt(productQuantity);
            document.getElementById('qty_' + productId).innerHTML = new_quantity + ' x ';

            cartData[productId] = [productId, productName, productHref, productImage, productPrice, new_quantity];
            saveCart(cartData);
        } else {
            cartData[productId] = [productId, productName, productHref, productImage, productPrice, productQuantity];
            saveCart(cartData);
            document.querySelector('.cart-items').append(
                createCartItem(productId, productName, productPrice, productImage, productHref, productQuantity));
        }

        recalc();
        cartData[0] = [totalPrice, totalQuantity];
        saveCart(cartData);

        if (document.getElementById('cart-menu').classList.contains('active')) {
            document.querySelector('.shopping-bag span').classList.remove('active');
        } else {
            document.querySelector('.shopping-bag span').classList.add('active');
        }
    });
}

let removeItems = document.getElementsByClassName('item-remove');

Array.prototype.forEach.call(removeItems, function(el) {
    el.addEventListener('click', function() {
        this.parentNode.remove();
        recalc();
        cartData[0] = [totalPrice, totalQuantity];
        saveCart(cartData);
        delete cartData[productId];
        saveCart(cartData);
    });
});

function saveCart(item) {
    localStorage.setItem('myCart', JSON.stringify(item));
}

function recalc() {                    
    totalPrice = 0;
    let itemPrices = document.getElementsByClassName('price');

    Array.prototype.forEach.call(itemPrices, function(el) {
        totalPrice += parseInt(el.getAttribute('totalPrice'));
    });

    outTotalPrice = (totalPrice + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    document.getElementById('total-price').querySelector('span').innerHTML = outTotalPrice;

    totalQuantity = 0;
    let itemQuantity = document.getElementsByClassName('quantity');
        
    Array.prototype.forEach.call(itemQuantity, function(el) {
        totalQuantity += parseInt(el.innerHTML);
    });

    document.getElementById('total-items').querySelector('span').innerHTML = totalQuantity;

    if (totalQuantity == 0) {
        document.querySelector('.check-out').remove();
        document.querySelector('.cart-items').remove();
        document.querySelector('.cart-total').remove();
        document.querySelector('.go-to-cart').remove();
            
        let p = document.createElement('p');
        p.setAttribute('class', 'empty-cart');
        p.innerHTML = "Ваша корзина пустая";
        document.getElementById('cart-menu').append(p);
    }
}

function createCart() {
    document.querySelector('.empty-cart').remove();

    let p = document.createElement('p');
    p.setAttribute('class', 'check-out');

    let a = document.createElement('a');
    a.setAttribute('href', '#');

    a.innerHTML = "Оформить заказ";
    p.append(a);
    document.getElementById('cart-menu').append(p);

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'cart-items');
    document.getElementById('cart-menu').append(ul);

    let div = document.createElement('div');
    div.setAttribute('class', 'cart-total');
    div.setAttribute('id', 'total-price');

    let p_total = document.createElement('p');
    p_total.innerHTML = "Итого <span>0</span>";
    div.append(p_total);
    document.getElementById('cart-menu').append(div);
            
    let p_goToCart = document.createElement('p');
    p_goToCart.setAttribute('class', 'go-to-cart');

    let a_goToCart = document.createElement('a');
    a_goToCart.setAttribute('href', '#');
    a_goToCart.innerHTML = "Перейти в корзину";

    p_goToCart.append(a_goToCart);
    document.getElementById('cart-menu').append(p_goToCart);
}

function createCartItem(productId, productName, productPrice, productImage, productHref, productQuantity) {
    outProductPrice = (productPrice + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

    let li = document.createElement('li');
    li.setAttribute('id', 'product_' + productId);

    let div = document.createElement('div');
    div.setAttribute('class', 'product-image');

    let img = document.createElement('img');
    img.setAttribute('src', productImage);
    img.setAttribute('height', '50');
    img.setAttribute('width', '50');

    let a_productName = document.createElement('a');
    a_productName.setAttribute('href', productHref);

    let br = document.createElement("br");

    let span_quantity = document.createElement('span');
    span_quantity.setAttribute('class', 'quantity');
    span_quantity.setAttribute('id', 'qty_' + productId);

    let span_price = document.createElement('span');
    span_price.setAttribute('class', 'price');
    span_price.setAttribute('id', 'price_' + productId);
    span_price.setAttribute('totalPrice', productPrice);

    let a_remove = document.createElement('a');
    a_remove.setAttribute('class', 'item-remove');

    a_productName.innerHTML = productName;
    span_quantity.innerHTML = productQuantity + ' x ';
    span_price.innerHTML = outProductPrice + ' грн.';

    li.append(div);
    div.append(img);
    li.append(a_productName);
    li.append(br);
    li.append(span_quantity);
    li.append(span_price);
    li.append(a_remove);

    return li;
}

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
