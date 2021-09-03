document.addEventListener('DOMContentLoaded', () => {
  // Prompt user for location data
  const successfulLookup = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`
    ).then((response) => response.json().then(console.log));
  };

  window.navigator.geolocation.getCurrentPosition(
    successfulLookup,
    console.log
  );

  // console.log(successfulLookup);

  console.log('working...');

  // API Query
  const fetchWeatherData = async (url) => {
    const weatherApiKey = config.weatherApiKey;
    // const userCoordinates =
    const queryUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${lat},${lng}&aqi=no`;
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
