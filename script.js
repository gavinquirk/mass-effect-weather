document.addEventListener('DOMContentLoaded', () => {
  console.log('working...');

  // API Query
  const weatherApiKey = config.weatherApiKey;

  const userLocation = 'Carlsbad';

  const queryUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${userLocation}&aqi=no`;

  const fetchWeatherData = async (url) => {
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  };

  const updateWeatherData = async (data) => {
    // Elements
    const thermostat = document.getElementById('thermostat');
    thermostat.innerText = data.current.temp_f;
  };

  fetchWeatherData(queryUrl).then((data) => updateWeatherData(data));
});
