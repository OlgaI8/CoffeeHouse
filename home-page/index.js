// burger menu

const overlayMenu = document.querySelector('.menu-overlay');
const menu = document.querySelector('.nav-list');
const menuMenuLink = document.querySelector('.header__link.menu-link');
const menuBtn = document.querySelector('.burger-menu-btn');
const navItems = Array.from(menu.children);

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('burger-menu_open');
    menuMenuLink.classList.toggle('burger-menu_open-menu-link');
    menuMenuLink.classList.remove('disabled');    
    menuBtn.classList.toggle('burger-menu-btn_close');
});

navItems.forEach((navItem) => {
    navItem.addEventListener('click', closeMenuOnClick);
});

menuMenuLink.addEventListener('click', closeMenuOnClick);

function closeMenuOnClick() {
    if (menu.classList.contains('burger-menu_open') &&
        menuMenuLink.classList.contains('burger-menu_open-menu-link') &&
        menuBtn.classList.contains('burger-menu-btn_close')) {
        menu.classList.remove('burger-menu_open');
        menuMenuLink.classList.remove('burger-menu_open-menu-link');
        menuBtn.classList.remove('burger-menu-btn_close');
    }
}

// slider

const prevBtn = document.querySelector('.carousel__prev-btn');
const nextBtn = document.querySelector('.carousel__next-btn');
const items = document.querySelectorAll('.carousel__item');
const slidesLine = document.querySelector('.carousel__line');

let count = 0;
let width;


function init() {
    width = slidesLine.offsetWidth;
    slidesLine.style.width = width * items.length + 'px';
}

init();

const autoRollSlide = setInterval(() => { nextBtn.click() }, 5000);

nextBtn.addEventListener('click', function () {
    nextSlide();
});

prevBtn.addEventListener('click', function () {
    prevSlide();
});

const nextSlide = () => {
    count++;
    if (count > items.length - 1) {
        count = 0;
    }
    rollSlide();
}

const prevSlide = () => {
    count--;
    if (count < 0) {
        count = items.length - 1;
    }
    rollSlide();
}

const rollSlide = () => {
    slidesLine.style.transform = 'translate(-' + count * width + 'px)';
}





