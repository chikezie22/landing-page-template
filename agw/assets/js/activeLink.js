'use strict'


// style active link
const activeLink = document.querySelectorAll('#header ul li a');
activeLink.forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add('link-active');
    }
})
