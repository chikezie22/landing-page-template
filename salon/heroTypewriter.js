'use strict'

const typedText="Discover Beauty in a Sanctuary of Luxury and Style".split('')
console.log(typedText)
const typeWriterTextEl = document.getElementById('typewriter-text')

let iterCount =0;
const delay=100


const typingInterval = setInterval( typeText, delay)

function typeText(){
    console.log(typedText.length);
    
    if( iterCount < typedText.length ){
        const span = document.createElement('span')
        span.className = 'animate-fade-in'
        span.innerText = typedText[iterCount]
        typeWriterTextEl.appendChild(span)

        iterCount++
    }else{
        clearInterval(typingInterval)
        console.log('interval cleared')
    }
}