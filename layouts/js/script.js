// Qari Modal
window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('#overlay')
    const productBtn = document.querySelector('#project-1')
    const closeBtn = document.querySelector('#close-modal')
    const exitBtn = document.querySelector('#exit-modal')
    
    //Refactored JS version to make a variable that contains a event listener function
    const toggleModal = () => {
      overlay.classList.toggle('hidden')
      overlay.classList.toggle('flex')
    }
    
    productBtn.addEventListener('click', toggleModal)
    exitBtn.addEventListener('click', toggleModal)
    //Non-Refactored way of using arrow function for event listener
    closeBtn.addEventListener('click', () => {
      overlay.classList.toggle('hidden')
      overlay.classList.toggle('flex')
      
    })
    
    const overlay2 = document.querySelector('#overlay2')
    const productBtn2 = document.querySelector('#project-2')
    const closeBtn2 = document.querySelector('#close-modal2')
    const exitBtn2 = document.querySelector('#exit-modal2')
    
    //Refactored JS version to make a variable that contains a event listener function
    const toggleModal2 = () => {
      overlay2.classList.toggle('hidden')
      overlay2.classList.toggle('flex')
    }
    
    productBtn2.addEventListener('click', toggleModal2)
    exitBtn2.addEventListener('click', toggleModal2)
    //Non-Refactored way of using arrow function for event listener
    closeBtn2.addEventListener('click', () => {
      overlay2.classList.toggle('hidden')
      overlay2.classList.toggle('flex')
      
    })

    const overlay3 = document.querySelector('#overlay3')
    const productBtn3 = document.querySelector('#project-3')
    const closeBtn3 = document.querySelector('#close-modal3')
    const exitBtn3 = document.querySelector('#exit-modal3')
    
    //Refactored JS version to make a variable that contains a event listener function
    const toggleModal3 = () => {
      overlay3.classList.toggle('hidden')
      overlay3.classList.toggle('flex')
    }
    
    productBtn3.addEventListener('click', toggleModal3)
    exitBtn3.addEventListener('click', toggleModal3)
    //Non-Refactored way of using arrow function for event listener
    closeBtn3.addEventListener('click', () => {
      overlay3.classList.toggle('hidden')
      overlay3.classList.toggle('flex')
      
    })

    const overlay4 = document.querySelector('#overlay4')
    const productBtn4 = document.querySelector('#project-4')
    const closeBtn4 = document.querySelector('#close-modal4')
    const exitBtn4 = document.querySelector('#exit-modal4')
    
    //Refactored JS version to make a variable that contains a event listener function
    const toggleModal4 = () => {
      overlay4.classList.toggle('hidden')
      overlay4.classList.toggle('flex')
    }
    
    productBtn4.addEventListener('click', toggleModal4)
    exitBtn4.addEventListener('click', toggleModal4)
    //Non-Refactored way of using arrow function for event listener
    closeBtn4.addEventListener('click', () => {
      overlay4.classList.toggle('hidden')
      overlay4.classList.toggle('flex')
      
    })

    
})



const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})