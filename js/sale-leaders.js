$.getJSON('https://my-json-server.typicode.com/vpysanka/web/sale-leaders', function(data) {
    
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let a = document.createElement('a');
    let li = document.createElement('li');
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let span = document.createElement('span');
    let figcaption = document.createElement('figcaption');
    let ul = document.createElement('ul');
    
    for (let i = 0; i < data.length; i++) {
        document.querySelector('.grid, .caption-hover').appendChild(createItem(i));
    }

    function createItem(index) {
        let item = (el, elClass) => {
            let e = el.cloneNode(true);
            e.setAttribute('class', elClass);
            return e;
        }

        let divLB = item(div, "leader_block");

        let aN = item(a, "");
        aN.setAttribute('href', data[index].href);
        aN.innerHTML = data[index].name;

        let h3N = item(h3, "");
        h3N.append(aN);

        let liLB = item(li, "");

        let figureLB = item(figure, "");

        let imgI = item(img, "");
        imgI.setAttribute('src', data[index].image);
        imgI.setAttribute('height', '250');

        let span2 = item(span, 'ribbon2');
        span2.innerHTML = data[index].ribbon2;

        let figcaptionI = item(figcaption, "");

        let ulLG = item(ul, "leader_grid");
        ulLG.setAttribute('productId', data[index].id);
        ulLG.setAttribute('productName', data[index].name);
        ulLG.setAttribute('productPrice', data[index].price);
        ulLG.setAttribute('productImage', data[index].image);
        ulLG.setAttribute('productHref', data[index].href);

        let li1 = item(li, "");
        li1.innerHTML = "Дисплей: " + data[index].display;

        let li2 = item(li, "");
        li2.innerHTML = "Процессор: " + data[index].processor;

        let li3 = item(li, "");
        li3.innerHTML = "Камера: " + data[index].camera;

        let li4 = item(li, "");
        li4.innerHTML = "Память: " + data[index].memory;

        let li5 = item(li, "");
        li5.innerHTML = "Аккумулятор: " + data[index].battery;

        let li6 = item(li, "");
        li6.innerHTML = "Вес: " + data[index].weight;

        let aBB = item(a, "");
        aBB.setAttribute('name', 'buy-button');
        aBB.innerHTML = "Купить";

        if (data[index].weight == "") {
            ulLG.append(li1);
            ulLG.append(li2);
            ulLG.append(li3);
            ulLG.append(li4);
            ulLG.append(li5);
            ulLG.append(aBB);
        } else {
            ulLG.append(li1);
            ulLG.append(li2);
            ulLG.append(li4);
            ulLG.append(li5);
            ulLG.append(li6);
            ulLG.append(aBB);
        }

        figcaptionI.append(ulLG);

        figureLB.append(imgI);
        if (data[index].ribbon1 != "") {
            let span1 = item(span, 'ribbon1');
            span1.innerHTML = data[index].ribbon1;
            figureLB.append(span1);
        }
        figureLB.append(span2);
        figureLB.append(figcaptionI);

        liLB.append(figureLB);

        divLB.append(h3N);
        divLB.append(liLB);

        return divLB;
    }
});