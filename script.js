let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-from-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.togagle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});




formBtn.addEventListener('click', () =>{
    loginform.classList.add('active');
});

formclose.addEventListener('click', () =>{
    loginform.classList.remove('active');
});



videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});





var swiper = new Swiper(".review-slider", {
    spaceBetween: 120,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerViem: 1,
        },
        768: {
            slidesPerViem: 2,
        },
        1024: {
            slidesPerViem: 3,
        },
    },

});

// var swiper = new Swiper(".brand-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         450: {
//             slidesPerViem: 2,
//         },
//         768: {
//             slidesPerViem: 3,
//         },
//         991: {
//             slidesPerViem: 4,
//         },
//         1200: {
//             slidesPerViem: 5,
//         },
//     },

// });

