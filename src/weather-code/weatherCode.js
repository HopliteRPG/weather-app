import { createWeatherGrid } from "./weatherCodeHtml";

export { getLocationWeather };
async function getLocationWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=FXHXA475Z37NLG25UUNEYVTVK&contentType=json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const weatherData = await response.json();
    console.log(weatherData);
    createWeatherGrid(weatherData.days);
  } catch (error) {
    console.error(error);
    alert("Location not found try a different one");
  }
}
