import  {blogPosts} from './blogPosts.js'

export const paginationParameter = ()=>{
   const params = new URLSearchParams(window.location.search)
    const limit= params.get('limit') || 10
    const skip = params.get('skip')   || 0

    return {firstPost:Number(skip), lastPost: Number(limit) + Number(skip), limit: Number(limit), skip:Number(skip), postsLength: blogPosts.length}
}


const postsHtml = (post)=>{
    return `<a class="flex flex-col gap-4 overflow-clip" href="/post.html?id=${post.id}" >
                <div class="w-full h-[200px] overflow-clip">
                    <img src="${post.image}" class="w-full h-full object-cover object-center rounded-xl">
                </div>
                <p class="text-primary text-sm font-semibold">${post.author} • ${post.date}</p>
                <p class="text-lg font-medium text-black">${post.title}</p>
                <p class="text-sm text-[var(--grey-2)]">${post.description}</p>    
                <div class="flex gap-8">
                    ${post.tags.map(tag=>`<p class="text-primary text-sm bg-[var(--bg-prm-transparent)] bg-opacity-10 p-3 rounded-xl">${tag}</p>`).join('')}
                   
                 </div>
            </a>
    `
}


const postHtml = (post)=>{
    
    const innerPost =`
    <div id="post" class="relative  h-[50svh] rounded-xl overflow-clip ">
        <img src=${post.image} alt=${post.title} class="object-cover object-center w-full h-full">
    </div>
    <div class="flex flex-col gap-6 my-8">
            <p class="text-primary text-sm font-semibold">${post.author} • ${post.date}</p>
            <p class="text-lg font-medium text-black">${post.title}</p>
            <p class="text-sm text-[var(--grey-2)]">${post.description}</p>
            <div class="flex gap-8">
               ${post.tags.map(tag=>`<p class="text-primary text-sm bg-[var(--bg-prm-transparent)] bg-opacity-10 p-3 rounded-xl">${tag}</p>`).join('')}
            </div>
        </div>
    </div>
    <div id="content" class="flex flex-col gap-8 text-black">
        ${post.content.map(item=>{
            const heading = Object.keys(item)[0]
            const subsection = heading.toLowerCase() !== 'introduction' ? `<h2 class="text-xl font-semibold">${heading}</h2>` : ''
            const pararagraph = `<p class="text-base text-[var(--grey-2)]">${item[heading]}</p>`
            return `<div class='space-y-2'> ${subsection + "\n" + pararagraph} \n</div>` 
            
        }).join('')}
    </div>
    `
    return innerPost
}
export const attachPosts = ()=>{
    const {firstPost, lastPost} = paginationParameter()
    const paginatedPosts= blogPosts.slice(firstPost, lastPost)
    const postSecion = document.getElementById('posts')
    const posts = paginatedPosts.map(blogPost=> postsHtml(blogPost) )
    postSecion.innerHTML= posts.join('')
   
  firstPost > 0 ? setTimeout(()=> window.scrollTo( {top:postSecion.getBoundingClientRect().top + window.scrollY +32 } ), 0) : null
}
// attachPosts()


export const loadPost = (blogPosts)=>{
    const params = new URLSearchParams(window.location.search)
    const postid = params.get('id')
    const post = blogPosts.find(post=> post.id == postid)
    console.log(post);

    const postHtmlSructure = postHtml(post)
    attachPost(postHtmlSructure)
    
}


const attachPost = (post)=>{ 
    const postsection = document.getElementById('post')
    postsection.innerHTML = post
}