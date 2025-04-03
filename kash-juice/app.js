
const root = document.documentElement
const rootStyles = getComputedStyle(root);
// const dynamicBtnBorderColor = rootStyles.getPropertyValue('--dynamic-btn-border-color').trim();
// const dynamicHeroBgColor = rootStyles.getPropertyValue('--dynamic-hero-bg-color').trim();

const btnBorderColors=[
    '--btn-border-orange',
    '--btn-border-strawberry',
    '--btn-border-blueberry',
]
const btnBorderHex= btnBorderColors.map(color=>rootStyles.getPropertyValue(color).trim())

const heroBgColors=[
    '--hero-bg',
    '--strawberry-text',
    '--blueberry-text',
]
const heroBgHex= heroBgColors.map(color=>rootStyles.getPropertyValue(color).trim())

const juiceSlides= document.querySelector('#juice-slides');
const juiceSlideWidth= juiceSlides.offsetWidth;
console.log(juiceSlideWidth);
const parentText= document.querySelector('#parent-text');
const slidesWrapper= document.querySelector('#slides-wrapper').offsetHeight;
const slides= document.querySelector('#slides');
const slideElementsWidth= Array.from(slides.children).map(child=>child.offsetWidth);
// const heroTryItBtn= document.querySelector('#hero-try-it-btn');
// const heroTransitionedBg= document.querySelector('#hero-transitioned-bg');

parentText.firstElementChild.innerText= ''
parentText.style.paddingLeft= `${slideElementsWidth[0]}px`;
setTimeout(() => {
    parentText.style.transition=`padding 1s ease-in-out`;
}, 1000)

const height= slides.parentElement.offsetHeight;
console.log(slideElementsWidth);
let index=1
console.log(slides, height);
setInterval(() => {
    slides.style.transform=`translateY(-${height *index}px)`;
    parentText.style.paddingLeft= `${slideElementsWidth[index]}px`;
    document.documentElement.style.setProperty('--dynamic-hero-bg-color', heroBgHex[index]);
    document.documentElement.style.setProperty('--dynamic-btn-border-color', btnBorderHex[index]);
    juiceSlides.c
    juiceSlides.style.transform=`translateX(-${juiceSlides.parentElement.offsetWidth *index}px)`;

    
    index == 2 ? index=0 :index++;
}, 5000);