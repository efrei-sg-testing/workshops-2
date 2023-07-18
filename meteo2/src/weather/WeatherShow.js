import { useState } from "react";
import { getWeather } from "./weather";


export function WeatherShow() {
  const [showInFarenheit, setShowInFarenheit] = useState(false);
  const weatherNow = getWeather();
  const displayedTemp =
    (showInFarenheit ? (weatherNow.temperature*9/5)+32 : weatherNow.temperature);
  return (
    <>
      <h1>
        Les previsions meteo du jours : une temperature de {displayedTemp}  
        {showInFarenheit ? " degres F " : " degres C " }
        et {weatherNow.raining ? " de la pluie" : " du soleil"}
      </h1>
      <h1>
        {weatherNow.temperature <= 20 ? "Mettez un pullover " : " Un teeshirt suffira"}
        et 
        {weatherNow.raining ? " n'oubliez pas votre parapluie" : " pas besoin de parapluie"}
      </h1>
      <label htmlFor="farToggle">Show temperature in Farenheit</label>
      <input
        data-testid="farToggle"
        id="farToggle"
        type="checkbox"
        checked={showInFarenheit}
        onChange={(event) => setShowInFarenheit(event.target.checked)}
      />
    </>
  )};