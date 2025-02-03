
const navLinks = document.querySelector('.navLink');
const menuButton = document.querySelector('.menubutton');

function onToggleMenu(e){
  e.name = e.name === 'menu' ? 'close': 'menu'
  navLinks.classList.toggle('left-[0%]')
}

const swiper = new Swiper('.swiper', {
   grabCursor: true,
   spaceBetween: 30,
   loop: true,
   
   pagination: {
       el: '.swiper-pagination',
       clickable: true
     },
   
   autoplay: {
       delay: 3000,
       disableOnInteraction: false,
},  

   breakpoints: {
      
       900: {
           slidesPerView: 2
       }
   }  
});

