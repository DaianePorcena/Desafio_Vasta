// Menu
const menuMobile = document.querySelector(".menu__mobile");
const menuList = document.querySelector(".menu__list");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.toggle('active')
    menuList.classList.toggle('active')
})

// About

const showMoreButton = document.querySelector('.show__more');
const hiddenCard = document.querySelector('.about__card_hidden');

showMoreButton.addEventListener('click', () => {
  hiddenCard.classList.toggle('about__card_visible');
});

// Portfólio


// Depoimentos