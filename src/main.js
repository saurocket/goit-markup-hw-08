"use strict";
window.addEventListener('DOMContentLoaded', () => {
//     const navMenu = document.querySelector('.backdrop');
//     window.addEventListener('resize',function(){
//         console.log(document.body.clientWidth);
//         if (document.body.clientWidth > 768) {
//             navMenu.style.display = 'none';
//     }    
// });
    function addActive() {
        const link = document.querySelectorAll('.nav-list-link li');
        link.forEach(item => {
            item.classList.remove('active-link'); 
        });
        link[0].classList.add('active-link');
    }
    addActive(); 
    function modal(trigger, modal, close) {
        console.log('modal');
        const btnOpen = document.querySelector(trigger),
            backdrop = document.querySelector(modal),
            btnClose = document.querySelector(close);
        
        btnOpen.addEventListener('click', (event) => {
            event.preventDefault();
            backdrop.classList.remove('is-hidden');
        });
        
           
        btnClose.addEventListener('click', () => {
            backdrop.classList.add('is-hidden');
        });
    }   
    
    modal('.modal-open', '.backdrop', '.btn-close');



    // Open nav-menu
    const navBtn = document.querySelector('.header-btn');
    let countClass = 0;
    function openMenu() {
        navBtn.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav'),
                burgerIcon = document.querySelector('.icon-burger'),
                closeIcon = document.querySelector('.icon-close');
            if (countClass === 0) {
                navMenu.style.display = 'block';
                burgerIcon.style.display = 'none';
                closeIcon.style.display = '';
                countClass = 1;
            }
            else {
                navMenu.style.display = 'none';
                burgerIcon.style.display = '';
                closeIcon.style.display = 'none';
                countClass = 0;
            }
        });
    }
    openMenu();

});