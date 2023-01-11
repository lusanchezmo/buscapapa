
function fn_index_register(){
    location.href="register.html";
}

function fn_index_login(){
    location.href="login.html";
}


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
carritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}



const productList = []
productList.push({
    name: 'Papa pastusa',
    price: 125000,
    imagen: 'https://organicosysaludables.com/wp-content/uploads/2019/04/Papa-pastusa-organica.jpg',
});
productList.push({
    name: 'Papa Diacol capiro',
    price: 160000,
    imagen: 'https://www.eje21.com.co/site/wp-content/uploads/2020/10/papas-mercaldas.png',
});
productList.push({
    name: 'Papa criolla',
    price: 80000,
    imagen: 'https://vaquitaexpress.com.co/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/3/234.jpg',
});

productList.push({
    name: 'Papa Tocarreña',
    price: 210000,
    imagen: 'https://wamifu.com/wp-content/uploads/papa-sabanera-1-600x600.png',
});
productList.push({
    name: 'Papa Nevada',
    price: 160000,
    imagen: 'https://carulla.vtexassets.com/arquivos/ids/5943052/PAPA-NEVADA-UNIDAD-1601988_a.jpg?v=637672555669300000',
});
productList.push({
    name: 'Papa suprema',
    price: 125000,
    imagen: 'https://selecpacol.com/img/papa/2.png',
});

productList.push({
    name: 'Papa -Unica',
    price: 110000,
    imagen: 'https://s.cornershopapp.com/product-images/4452695.jpg?versionId=.8oh9khbgUxXr2Paf26ZJWiH6dnv6qgI',
});
productList.push({
    name: 'Papa Icahuila',
    price: 180000,
    imagen: 'https://www.eltiempo.com/contenido-dj/historias/IMAGEN/IMAGEN-16882516-2.jpg',
});
productList.push({
    name: 'Papa pastusa-superior',
    price: 125000,
    imagen: 'https://lagranjamarket.com.co/wp-content/uploads/2021/07/PAPAPASTUSA.jpg',
});

productList.push({
    name: 'Papa Tocarreña',
    price: 210000,
    imagen: 'https://wamifu.com/wp-content/uploads/papa-sabanera-1-600x600.png',
});
productList.push({
    name: 'Papa Nevada',
    price: 160000,
    imagen: 'https://carulla.vtexassets.com/arquivos/ids/5943052/PAPA-NEVADA-UNIDAD-1601988_a.jpg?v=637672555669300000',
});
productList.push({
    name: 'Papa suprema',
    price: 125000,
    imagen: 'https://www.papaunc.com/sites/default/files/img_upload/Web_Suprema_tub2.JPG',
});

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.imagen);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './assets/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}