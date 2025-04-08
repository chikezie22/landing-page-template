'use strict'
const root = document.documentElement
const rootStyles = getComputedStyle(root);


const btnBorderColors=[
    '--btn-border-orange',
    '--btn-border-strawberry',
    '--btn-border-blueberry',
]
const btnBorderHex= btnBorderColors.map(color=>rootStyles.getPropertyValue(color).trim()) //hex values

const heroBgColors=[
    '--hero-bg',
    '--strawberry-text',
    '--blueberry-text',
]
const heroBgHex= heroBgColors.map(color=>rootStyles.getPropertyValue(color).trim()) //hex values

const juiceSlides= document.querySelector('#juice-slides');
const juiceSlideWidth= juiceSlides.offsetWidth;
const parentText= document.querySelector('#parent-text');
const slidesWrapper= document.querySelector('#slides-wrapper').offsetHeight;
const slides= document.querySelector('#slides');
const slideElementsWidth= Array.from(slides.children).map(child=>child.offsetWidth);


parentText.style.position='absolute';
parentText.style.paddingLeft= `${slideElementsWidth[0]+10}px`;
setTimeout(() => {
}, 300)

setTimeout(() => {
    parentText.style.top=0;
    parentText.style.left=0;
    parentText.style.transition=`padding 700ms ease-in-out`;
}, 3000)

let newArray;
const height= slides.parentElement.offsetHeight;
let index=1
setInterval(() => {
    console.log(Array.from(juiceSlides.children).map(slide=>slide))
    parentText.style.paddingLeft= `${slideElementsWidth[index] +10}px`;
    slides.style.transform=`translateY(-${height *index}px)`;
    document.documentElement.style.setProperty('--dynamic-hero-bg-color', heroBgHex[index]);
    document.documentElement.style.setProperty('--dynamic-btn-border-color', btnBorderHex[index]);


    juiceSlides.children[0].style.transition=`opacity 100ms ease-in-out`;
    console.log(juiceSlideWidth)
    // juiceSlides.children[0].style.opacity=0;
    juiceSlides.style.transform=`translateX(-${juiceSlideWidth}px)`;
    
    // console.log('main')
    // //
    setTimeout(()=>{
        // juiceSlides.children[1].style.opacity=1;
        console.log('main2')
    }, 1000)
    
    setTimeout(()=>{
        //take the first item to the first position
        newArray= newArray || Array.from(juiceSlides.children)
        const firstItem= newArray.shift()
        newArray.push(firstItem)
      
        juiceSlides.style.transition='none'
        juiceSlides.style.transform= `translateX(0)`
        juiceSlides.innerHTML= newArray.map(item=>item.outerHTML).join('')
       
        console.log('main3')
        setTimeout(()=>{
            juiceSlides.style.transition=`transform 500ms ease-in-out`
        }, 1500)
        console.log('main3.1')

    }, 2000)

    
    index == 2 ? index=0 :index++;
}, 5000);