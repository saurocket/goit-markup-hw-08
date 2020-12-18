"use strict";
window.addEventListener('DOMContentLoaded', () => {
   
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
});


