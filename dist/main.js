document.getElementById("submit-search").addEventListener("click",(function(){!async function(e){const t=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=1f2ee12c8f8994c48f986ab8a9acd1d7",{mode:"cors"});if(404===t.status)console.log("error");else{const e=await t.json();console.log(e),console.log(e.weather[0].main),console.log(e.weather[0].description),console.log(e.name),console.log(e.main.temp),function(e){e.weather[0].main;let t=e.weather[0].description,n=e.name,o=e.main.temp;const{icon:c}=e.weather[0];document.getElementById("weather-description").textContent=t,document.getElementById("weather-location").textContent="in "+n,document.getElementById("weather-degrees").textContent=Math.round(o),document.querySelector(".weather-icon").innerHTML=`<img src="icons/${c}.png">;`}(e)}}(document.getElementById("location-search-input").value)}));