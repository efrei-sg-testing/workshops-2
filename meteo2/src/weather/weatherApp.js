import React, { useState, useEffect } from "react";

import { getWeather } from "./weather"; // Import the fictional weather module



const WeatherApp = () => {

  const [temperature, setTemperature] = useState(null);

  const [isRaining, setIsRaining] = useState(null);




  useEffect(() => {

    // Fetch weather data

    const weatherData = getWeather();

    setTemperature(weatherData.temperature);

    setIsRaining(weatherData.isRaining);

  }, []);




  const getOutfit = () => {

    if (temperature >= 30 && !isRaining) {

      return "Wear light clothes and sunglasses.";

    } else if (temperature >= 20 && !isRaining) {

      return "Wear a t-shirt and shorts.";

    } else if (temperature >= 10 && !isRaining) {

      return "Wear a light jacket.";

    } else if (temperature >= 10 && isRaining) {

      return "Wear a raincoat and carry an umbrella.";

    } else if (temperature < 10 && !isRaining) {

      return "Wear a warm jacket and hat.";

    } else {

      return "Stay indoors.";

    }

  };




  return (

    <div>

      <h1>Today's Weather</h1>

      {temperature && (

        <div>

          <p>Temperature: {temperature}°C</p>

          <p>Is it raining? {isRaining ? "Yes" : "No"}</p>

          <p>Outfit suggestion: {getOutfit()}</p>

        </div>

      )}

    </div>

  );

};




export default WeatherApp;