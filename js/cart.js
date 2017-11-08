let cart = [{TotalPrice: 0, TotalQuantity: 0}];
let addToCart = document.getElementsByName('buy-button');
let removeItems;
let productId;
let productName;
let productHref;
let productImage;
let productPrice;
let productQuantity = 1;
let totalPrice;
let totalQuantity

if (localStorage.getItem('myCart')) {
    cart = JSON.parse(localStorage.getItem('myCart'));
}

for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', function() {
        productId = this.parentNode.getAttribute('productId');
        productPrice = this.parentNode.getAttribute('productPrice');
        productName = this.parentNode.getAttribute('productName');
        productImage = this.parentNode.getAttribute('productImage');
        productHref = this.parentNode.getAttribute('productHref');
        totalPrice = cart[0].TotalPrice;
        totalQuantity = cart[0].TotalQuantity;

        cart[0].TotalPrice = totalPrice + parseInt(productPrice);;
        cart[0].TotalQuantity = totalQuantity + 1;

        document.getElementById('total-items').querySelector('span').innerHTML = cart[0].TotalQuantity;
        if (document.querySelector('.shopping-bag i').classList.contains('active')) {
            document.querySelector('.shopping-bag span').classList.remove('active');
        } else {
            document.querySelector('.shopping-bag span').classList.add('active');
        }

        for (let j = 0; j < cart.length; j++) {
            if (parseInt(cart[j].Id) == productId) {
                cart[j].Quantity += 1;
                showCart();
                saveCart();
                return;
            }
        }
        
        let item = {Id: productId, Price: productPrice, Name: productName, Image: productImage, 
                    Href: productHref, Quantity: productQuantity};
        cart.push(item);
        showCart();
        saveCart();
    });
}

function showCart() {
    if (cart.length == 1) {
        if (document.querySelector('.check-out')) {
            document.querySelector('.check-out').remove();
            document.querySelector('.cart-items').remove();
            document.querySelector('.cart-total').remove();
            document.querySelector('.go-to-cart').remove();
                        
            let p = document.createElement('p');
            p.setAttribute('class', 'empty-cart');
            p.innerHTML = "Ваша корзина пустая";
            document.getElementById('cart-menu').append(p);
        }
        return;
    }

    if (document.querySelector('.empty-cart')) {
        document.querySelector('.empty-cart').remove();
    }

    document.getElementById('cart-menu').innerHTML = null;

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

    if (document.querySelector('.cart-items')) {
        document.querySelector('.cart-items').innerHTML = null;
    }

    for (let i = 1; i < cart.length; i++) {    
        let outProductPrice = (parseInt(cart[i].Price) + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    
        let li = document.createElement('li');
        li.setAttribute('id', cart[i].Id);
        li.setAttribute('qty', cart[i].Quantity);
        li.setAttribute('tp', cart[i].Quantity * cart[i].Price);
    
        let div = document.createElement('div');
        div.setAttribute('class', 'product-image');
    
        let img = document.createElement('img');
        img.setAttribute('src', cart[i].Image);
        img.setAttribute('height', '50');
        img.setAttribute('width', '50');
    
        let a_productName = document.createElement('a');
        a_productName.setAttribute('href', cart[i].Href);
    
        let br = document.createElement("br");
    
        let span_quantity = document.createElement('span');
        span_quantity.setAttribute('class', 'quantity');
    
        let span_price = document.createElement('span');
        span_price.setAttribute('class', 'price');
    
        let a_remove = document.createElement('a');
        a_remove.setAttribute('class', 'item-remove');
    
        a_productName.innerHTML = cart[i].Name;
        span_quantity.innerHTML = cart[i].Quantity + ' x ';
        span_price.innerHTML = outProductPrice + ' грн.';
    
        li.append(div);
        div.append(img);
        li.append(a_productName);
        li.append(br);
        li.append(span_quantity);
        li.append(span_price);
        li.append(a_remove);

        document.querySelector('.cart-items').append(li);
    }
    
    let outTotalPrice = (cart[0].TotalPrice + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    document.getElementById('total-price').querySelector('span').innerHTML = outTotalPrice;

    removeItem();
}

function removeItem() {
    let removeItems = document.getElementsByClassName('item-remove');
        
    Array.prototype.forEach.call(removeItems, function(el) {
        el.addEventListener('click', function() {
            let index = this.parentNode.getAttribute('id');

            this.parentNode.remove();
            cart[0].TotalQuantity -= this.parentNode.getAttribute('qty');
            cart[0].TotalPrice -= this.parentNode.getAttribute('tp');
            document.getElementById('total-items').querySelector('span').innerHTML = cart[0].TotalQuantity;

            for (let i = 0; i < cart.length; i++) {
                if (parseInt(cart[i].Id) == index) {
                    cart.splice(i, 1);
                    saveCart();
                }
            }

            showCart();
        });
    });
};

function saveCart() {
    localStorage.setItem('myCart', JSON.stringify(cart));
}