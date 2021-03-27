// ===================
// nav toggle
// ==================
let nav = document.getElementById('nav-bar');
document.getElementById('nav-button').addEventListener('click',function(){
    nav.classList.toggle('nav__toggle');
})

// ===================
// nav toggle (on Click turn Of)
// ==================

let navItem = Array.from(document.getElementsByClassName('nav__item'));
navItem.forEach((e)=>{
    e.addEventListener('click',function(){
        nav.classList.remove('nav__toggle');
    })
}) 

/*===== SWIPER CAROUSEL =====*/ 
const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    // effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },

})