$.getJSON('https://my-json-server.typicode.com/vpysanka/web/week-offer-items', function(data) {

    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let p = document.createElement('p');
    let strike = document.createElement('strike');
    let span = document.createElement('span');

    for (let i = 0; i < data.length; i++) {
        document.querySelector('.week-offer-all-blocks').appendChild(createItem(i));
    }

    function createItem(index) {
        let item = (el, elClass) => {
            let e = el.cloneNode(true);
            e.setAttribute('class', elClass);
            return e;
        }

        let divWOB = item(div, "week-offer-block");
        divWOB.setAttribute('productID', data[index].id);
        divWOB.setAttribute('productName', data[index].name);
        divWOB.setAttribute('productImage', data[index].image);
        divWOB.setAttribute('productPrice', data[index].price);
        divWOB.setAttribute('productHref', data[index].href);

        let imgI = item(img, "");
        imgI.setAttribute('src', data[index].image);
        imgI.setAttribute('height', '200');

        let divWOBI = item(div, "week-offer-block-image");
        divWOBI.append(imgI);

        let aN = item(a, "");
        aN.setAttribute('href', data[index].href);
        aN.innerHTML = data[index].name;

        let h3N = item(h3, "");
        h3N.append(aN);

        let li1 = item(li, "");
        li1.innerHTML = "<span class='attribute'>Дисплей:</span> " + data[index].display;

        let li2 = item(li, "");
        li2.innerHTML = "<span class='attribute'>Процессор:</span> " + data[index].processor;

        let li3 = item(li, "");
        li3.innerHTML = "<span class='attribute'>Камера:</span> " + data[index].camera;

        let li4 = item(li, "");
        li4.innerHTML = "<span class='attribute'>Память:</span> " + data[index].memory;

        let li5 = item(li, "");
        li5.innerHTML = "<span class='attribute'>Аккумулятор:</span> " + data[index].battery;

        let li6 = item(li, "");
        li6.innerHTML = "<span class='attribute'>Вес:</span> " + data[index].weight;

        let ulI = item(ul, "");

        if (data[index].weight == "") {
            ulI.append(li1);
            ulI.append(li2);
            ulI.append(li3);
            ulI.append(li4);
            ulI.append(li5);
        }

        if (data[index].camera == "") {
            ulI.append(li1);
            ulI.append(li2);
            ulI.append(li4);
            ulI.append(li5);
            ulI.append(li6);
        }

        let strikeOP = item(strike, "");
        strikeOP.innerHTML = data[index].old_price;

        let spanHP = item(span, "hot-price");
        spanHP.innerHTML = data[index].hot_price;

        let pI = item(p, "");
        pI.append(strikeOP);
        pI.append(' ');
        pI.append(spanHP);

        let aBB = item(a, "buy-button");
        aBB.setAttribute('name', 'buy-button');
        aBB.innerHTML = "Купить";

        divWOB.append(h3N);
        divWOB.append(divWOBI);
        divWOB.append(ulI);
        divWOB.append(pI);
        divWOB.append(aBB);

        return divWOB;
    }

});