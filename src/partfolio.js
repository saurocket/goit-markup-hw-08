"use strict";
window.addEventListener('DOMContentLoaded', () => {
   
 function addActive() {
        const link = document.querySelectorAll('.nav-list-link li');
        link.forEach(item => {
            item.classList.remove('active-link'); 
        });
        link[1].classList.add('active-link');
    }
addActive();


    function filter(navlist, container) {
        const btnList = document.querySelector(navlist),
            exampls = document.querySelectorAll(container);
            btnList.addEventListener('click', (e) => {
            let target = e.target;
            const btn = btnList.querySelector('.active');
            btn.classList.remove('active');
            target.classList.add('active');
        if (target && target.tagName === ('LI')) {
            let classFilter = target.classList.item(0);
            exampls.forEach(item => {
                // let classItem = item.classList.item(0);
                if (item.classList.contains(classFilter)) {
                    item.style.display = "block";
                } else 
                    if (classFilter == 'all') {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
            });
        }
    });
    }
   
    filter('.partfolio-nav', '.partfolio-examples-list li');

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


