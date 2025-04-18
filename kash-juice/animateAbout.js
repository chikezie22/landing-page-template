'use strict'
//handle animations for the 


const about = document.getElementById('about')

//parent elment that contains texts we are animating
const parent= about.children[1].children
const animatedBottle = about.children[0]
console.log(animatedBottle.children)


window.onscroll = handleScroll

function handleScroll(){
    for(let i=0; i<5; i++){
        handleAnimation(parent[i], i)
    }
}

function handleAnimation (element, id){
    const rect = element.getBoundingClientRect()
    const headerHeight= document.getElementById('header').offsetHeight
    const animationPropArr=[
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
        'rotate(0deg)',
    ]

    if(rect.top >= headerHeight && rect.bottom <= window.innerHeight  ){
        // ceror here on purpose
        console.error('error for here')
        id == 1 ? null : element.style.transform= animationPropArr[id]
    }else{
        id == 1 ? null : element.style.transform= ''
    }
}