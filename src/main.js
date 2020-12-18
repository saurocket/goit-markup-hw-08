"use strict";
window.addEventListener('DOMContentLoaded', () => {
    

    function modal(trigger, modal, close) {
        console.log('modal');
        const btnOpen = document.querySelector(trigger),
            backdrop = document.querySelector(modal),
            btnClose = document.querySelector(close);
        
        btnOpen.addEventListener('click', (event) => {
            event.preventDefault();
            backdrop.classList.remove('is-hidden');
        });
        // backdrop.addEventListener('click', () => {
        //     backdrop.classList.add('is-hidden');
        // });
           
        btnClose.addEventListener('click', () => {
            backdrop.classList.add('is-hidden');
        });
    }   
    //     const chengedClass = (selector) => {
    //         selector.addEventListener('click', (e) => {
    //             if (e.cancelable && e.target.classList.contains('modal-open')) {
    //                 e.preventDefault();
    //             }
    //             backdrop.classList.toggle('is-hidden');
    //         });
    //     };
        
    //     chengedClass(btnOpen);
    //     chengedClass(backdrop);
    //     chengedClass(btnClose);

    // }
    modal('.modal-open', '.backdrop', '.btn-close');

});