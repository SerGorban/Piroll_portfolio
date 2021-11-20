amountSlides = document.querySelectorAll('.slider-quotes__item').length;
centralSlide = Math.ceil(amountSlides/2 - 1);
new Swiper('.slider-quotes', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    touchRatio: 2,
    autoHeight: true,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: centralSlide,
    loop: true,
    speed: 800,
});

new Swiper('.project', {
    navigation: {
        nextEl: '.switch__button_right',
        prevEl: '.switch__button_left'
    },
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    speed: 800,
});