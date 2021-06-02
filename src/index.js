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
 }
}
 

// Send location
searchButton.addEventListener('click', function(){
  let location = document.getElementById('location-search-input').value;
  getWeather(location)
});
