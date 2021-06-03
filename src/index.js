// Global bindings
const searchButton = document.getElementById('submit-search');


// Get current weather of location
async function getWeather(location) {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=1f2ee12c8f8994c48f986ab8a9acd1d7', {mode: 'cors'})
  if (response.status === 404) {
   console.log('error');
 } else {
  const data = await response.json();
  console.log(data);
  // main weather status
  console.log(data.weather[0].main);
  // weather description 
  console.log(data.weather[0].description);
  // location
  console.log(data.name);
  // tempature
  console.log(data.main.temp);

  displayWeather(data)
 }
}

// display weather
function displayWeather(data) {
  let weatherStatus = data.weather[0].main;
  let weatherDescription = data.weather[0].description
  let location = data.name;
  let tempature = data.main.temp;
  const {icon} = data.weather[0];

  let weatherSummary = document.getElementById('weather-description');
  weatherSummary.textContent = weatherDescription;

  // let weatherType = document.getElementById('weather-type');
  // weatherType.textContent = weatherStatus;

  let weatherLocation = document.getElementById('weather-location');
  weatherLocation.textContent = "in" + " " + location;

  let weatherTempature = document.getElementById('weather-degrees');
  weatherTempature.textContent = Math.round(tempature);

  let locationIcon = document.querySelector('.weather-icon');
  locationIcon.innerHTML = `<img src="icons/${icon}.png">;`

}
 

// Send location
searchButton.addEventListener('click', function(){
  let location = document.getElementById('location-search-input').value;
  getWeather(location)
});
