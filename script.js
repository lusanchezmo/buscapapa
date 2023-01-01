
function fn_index_register(){
    location.href="register.html";
}

function fn_index_login(){
    location.href="login.html";
}



const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//Para el carrito de compras
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


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