
function fn_index_register(){
    location.href="register.html";
}

function fn_index_login(){
    location.href="login.html";
}



const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}



//Para el carrito de compras
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

carritoIcon.addEventListener('click', toggleCarritoAside);


function toggleCarritoAside() {
    aside.classList.toggle('inactive');
}