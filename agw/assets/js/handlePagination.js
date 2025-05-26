'use strict'
// handle adding functionality to the paginaton section

import { paginationParameter } from "./populateBlogPosts.js";
const paginationLinks = document.querySelectorAll('#pages a') ;


//add class for styling  to the current paginated page
const setActiveClass = (target='')=>{
    const {limit, skip} = paginationParameter()
    const supposedLinkText = parseInt(skip/limit) +1
    console.log(supposedLinkText)
    paginationLinks.forEach(link =>{
        link.textContent == supposedLinkText ? link.classList.add('active-page') : link.classList.remove('active-page')
    })
}
setActiveClass()


const setNextAndPrevParameters = ()=> {
    const {limit, skip} = paginationParameter()
    const prevLink = document.querySelector('#prev').href = `/blog?limit=${limit}&skip=${skip - limit == -skip ? 0 : skip - limit }` 
    const nextLink = document.querySelector('#next').href = `/blog?limit=${limit}&skip=${skip+limit }` 
    if(postLength <= skip + limit){
        document.querySelector('#next').classList.add('disabled')

    }else{
        document.querySelector('#next').classList.remove('disabled')
    }

    if(skip - limit < 0){
        document.querySelector('#prev').classList.add('disabled')
    }
    else{
        document.querySelector('#prev').classList.remove('disabled')
    }
}




setNextAndPrevParameters
// const fecthPosts = (target) =>{
    //     const params = new URLSearchParams(target.href)
    //     const limit= params.get('limit') || 10
    //     const skip = params.get('skip')   || 0
    //     console.log(params, limit, skip)
    // }
    
    function handlePagination(e=''){
        // setActiveClass() 
    }



    handlePagination()