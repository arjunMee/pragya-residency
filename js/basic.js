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

// ===================
// slider
// ==================
let totalSlide = document.getElementsByClassName('slider');

function removeAll(){
     for(let i=0; i < totalSlide.length; i++){
        totalSlide[i].classList.remove('slider__active');
     }
}
let current = 0;
let right = document.getElementById('right').addEventListener('click', function(){
    removeAll()
    if(current === totalSlide.length - 1)
    {
        current = 0;
    }else{
        current++;
    }
    totalSlide[current].classList.add('slider__active');
})

let left = document.getElementById('left').addEventListener('click', function(){
    removeAll()
    if(current === 0)
    {
        current = totalSlide.length - 1;
    }else{
        current--;
    }
    totalSlide[current].classList.add('slider__active');
})



const mySwiper1 = new Swiper('.block-2', {
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