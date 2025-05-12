'use strict'


// style active link
const activeLink = document.querySelectorAll('#header ul li a');
    const linkRegex = new RegExp(`^${window.location.pathname.replace(/\.html$/, '')}(\.html)?$`)
activeLink.forEach((link) => {
    const newLink = new URL(link.href).pathname
    if (linkRegex.test(newLink)) {
        link.classList.add('link-active');
    }
})
