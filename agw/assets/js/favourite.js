'use strict';

// change favourite button on click

const favouriteBtns = document.querySelectorAll('.favourite');
console.log(favouriteBtns);
favouriteBtns.forEach(btn => {
    btn.onclick = ToggleOpacity;
})


function ToggleOpacity({target}) {
   const secondSvg = target.nextElementSibling;
   secondSvg.classList.toggle('opacity-0');
}