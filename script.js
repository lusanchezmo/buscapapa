
function fn_index_register(){
    location.href="register.html";
}

function fn_index_login(){
    location.href="login.html";
}

console.log('dasdas')

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}