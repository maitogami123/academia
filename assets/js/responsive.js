// Sub Navbar

let subNavBtn = document.querySelector('.sub-nav__btn');
let subNav = document.querySelector('.sub-nav__items');

subNavBtn.onclick = () => {
    subNav.classList.toggle('active');
}