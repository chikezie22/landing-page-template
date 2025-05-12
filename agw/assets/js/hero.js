'use strict'
//handle hero section transition

const heroImgUrl =  document.querySelector('#hero')
const bgUrl = window.getComputedStyle(heroImgUrl).backgroundImage;
const newImag = new Image();
newImag.src = bgUrl.slice(5, -2);


console.log(newImag)
newImag.onload = function() {
    console.log('Image loaded successfully!');
    document.getElementById('hero').classList.add('group_hero');
    document.getElementById('header').classList.remove('-top-1/2');
    document.getElementById('header').classList.add('header-top-4');

}

// newImag.complete = function() {
//     document.getElementById('hero').classList.add('group');
// }

    // Add a class to the hero section to trigger the transition