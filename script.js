console.log('working...')

// Elements
const thermostat = document.querySelector('#thermostat');

// API Query
const weatherApiKey = config.weatherApiKey

const userLocation = 'Carlsbad'

const queryUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${userLocation}&aqi=no`

const weatherData = fetch(queryUrl)
  .then(response => response.json())
  .then(data => console.log(data));
