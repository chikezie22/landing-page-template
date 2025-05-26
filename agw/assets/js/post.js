

        //toggle favpurite button
        const favs = document.querySelectorAll('#favourite img');
        const toggleHiddenClass = ()=>{
            favs.forEach(fav =>fav.classList.toggle('hidden'))
            console.log(favs);
        }
        favs.forEach(fav =>fav.onclick=  toggleHiddenClass)


        //copy post link to clipboard
        const shareButton = document.querySelector('#share');
        const copyToClipboard = async  () => {
            const alertToolTip = document.querySelector('#alert-tooltip');
            const text = window.location.href;
            try{
                await navigator.clipboard.writeText(text)
                alertToolTip.classList.toggle('hidden');
                setTimeout(() => {
                    alertToolTip.classList.toggle('hidden');
                }, 2000);
            }catch(err){
                console.error('Failed to copy: ', err);
            }
        };   

        shareButton.onclick = copyToClipboard;