
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

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

ScrollReveal().reveal('.shadow', { delay: 500 }); 


/* this is the scroll reveal
const sr = scrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
})
sr.reveal(".home_data")*/

/* this is scrill section active link

const activeLink = () => {
    const sections = document.querySelector('section')
    const navLinks = document.querySelectorAll('.nav-link')

    let current = 'home'

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute('id')
        }

    })

    navLinks.forEach(item => {
        item.classList.remove('active')

        if(item.href.includes(current)){
            item.classList.add('active') 
        } 
    })

} 
window.addEventListener('scroll', activeLink)*/
