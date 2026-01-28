export { getLocationWeather };
async function getLocationWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=FXHXA475Z37NLG25UUNEYVTVK&contentType=json`;
  const response = await fetch(url);
  const weatherData = await response.json();

  console.log(weatherData.currentConditions);
}
