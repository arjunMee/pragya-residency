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