import "./styles.css";
async function getLocationWeather() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york%20city?unitGroup=us&key=FXHXA475Z37NLG25UUNEYVTVK&contentType=json",
  );
  const weatherData = await response.json();

  console.log(weatherData.currentConditions);
}

getLocationWeather();
