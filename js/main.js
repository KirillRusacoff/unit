//работа с иконкой и меню на меньшем экране

const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
} );

//работа над ссылками

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        navIcon.classList.remove('nav-icon--active');
        nav.classList.remove('nav--active');
    });
});

// форма поиска

const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__btn');

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    searchForm.classList.toggle('search--visible');   
});

//слайдер-карусель

var owl = $('.slider');
owl.owlCarousel({
    items: 1,
    loop: true
});

$('.slider__arrow--right').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__arrow--left').click(function() {
    owl.trigger('prev.owl.carousel');
})