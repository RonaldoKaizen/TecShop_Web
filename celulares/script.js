


let loginFormContainer = document.getElementById('login-form-container');
let loginBtn = document.getElementById('login-btn');
let closeLoginBtn = document.getElementById('close-login-btn');
loginBtn.onclick = () => {
    loginFormContainer.classList.add('active');
}

closeLoginBtn.onclick = () => {
    loginFormContainer.classList.remove('active');
}





/* NAVBAR SECRETO------------------ */
document.getElementById('toggle-navbar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.getElementById('secret-navbar').classList.toggle('visible');
});




let swiperCards = new Swiper('.card__content', {
    // Optional parameters
    
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600:{
            slidesPerView: 2,
        },
        968:{
            slidesPerView: 3,
        },
    },
});



$(document).ready(function() {
    $('#carouselExampleCaptions').carousel({
        interval: 4000,
        pause: 'hover'
    });

    $('.carousel-control-prev, .carousel-control-next').on('click', function() {
        $('#carouselExampleCaptions').carousel('cycle');
    });
});





