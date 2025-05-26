 window.addEventListener('DOMContentLoaded', async() => {
    let cord= [51.505, -0.09]
    

    try {
        const json= await fetch("https://ipapi.co/json/")
        const data = await json.json();
        cord = [data.latitude, data.longitude]; 
    }catch(err){
        console.log(err)
    }

    
    console.log('DOM fully loaded and parsed');
    const map = L.map('map').setView(cord, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    var marker = L.marker(cord).addTo(map);

        
});