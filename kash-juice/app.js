


//handle text change



const slideTexts= document.querySelector('#slide-text');
const changedText= document.querySelector('#changed-text');
console.log(changedText);
const height= slideTexts.parentElement.offsetHeight;

let index=1
console.log(slideTexts, height);
setInterval(() => {
    changedText.innerText=slideTexts.children[index].innerText;
    console.log(changedText.innerText);
    slideTexts.style.transform=`translateY(-${height *index}px)`;
    index == 2 ? index=0 :index++;
    // index++
}, 5000);