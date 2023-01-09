
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
    price: 80000,
    imagen: './assets/bulto.png',
});
productList.push({
    name: 'Papa pastusa',
    price: 80000,
    imagen: './assets/bulto.png',
});
productList.push({
    name: 'Papa pastusa',
    price: 80000,
    imagen: './assets/bulto.png',
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