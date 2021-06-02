async function getWeather() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=lodon&units=metric&appid=1f2ee12c8f8994c48f986ab8a9acd1d7', {mode: 'cors'})
  if (response.status === 404) {
   console.log('error');
 } else {
  const data = await response.json();
  console.log(data);
 }
}
 

getWeather()