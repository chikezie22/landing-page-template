'use strict'


// style active link
const activeLink = document.querySelectorAll('#header ul li a');
console.log(activeLink)
activeLink.forEach((link) => {
    console.log(link.href, window.location.href)
    if (link.href === window.location.href) {
        link.classList.add('link-active');
    }
})
