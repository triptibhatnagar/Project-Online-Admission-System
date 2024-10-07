const header = document.querySelector('header');
const menuBtn = document.querySelector('#menu-icon');
const closeMenuBtn = document.querySelector('#close-menu-btn');

closeMenuBtn.addEventListener("click" , () => {
    header.classList.toggle('show-mobile-menu');
})

menuBtn.addEventListener("click" , () => {
    menuBtn.click();
})