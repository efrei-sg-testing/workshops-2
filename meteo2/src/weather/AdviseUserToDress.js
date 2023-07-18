import { useState } from "react";
import { getWeather } from "./weather";

function getDress({temperature,raining}) {

    if (temperature === 18 && !raining) {
        return "Pull et une chapeau";
    } else if (temperature < 18 && raining) {
        return "Doudoune et un bonet";
    } else {
        return "T-Shirt et une Casquette";
    }
}

export function AdviseUserToDress() {

    const temperatureGetWeather = getWeather().temperature;
    const rainingGetWeather = getWeather().raining;

    const [selectedUnit, setSelectedUnit] = useState("celsius");
    const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
    };

    const convertTemperature = (temperature, unit) => {
    switch (unit) {
        case "celsius":
            return temperature + "°C";
        case "fahrenheit":
            temperature = ((temperature * 9) / 5 + 32).toFixed(2)
            return  temperature+ "°F";
        case "kelvin":
            temperature = (temperature + 273.15).toFixed(2)
            return temperature + "°K";
        default:
            return temperature + "°C";
    }
    };


    let myDressIs = getDress({ temperature: temperatureGetWeather,raining: rainingGetWeather}); // Pass the temperature as an object

    return (
        <>  
            <h1>
                La température est de: {temperatureGetWeather}°, Le ciel: {rainingGetWeather ? "il pleut" : "il pleut pas"}
            </h1>
            <h2>Selon la température ci-dessus tu dois mettre un {myDressIs}</h2>
            <div>
                <button onClick={() => handleUnitChange("celsius")}>
                {selectedUnit === "celsius" ? convertTemperature(temperatureGetWeather,"celsius") : "Celsius"}
                </button>
                <br />
                <button onClick={() => handleUnitChange("fahrenheit")}>
                {selectedUnit === "fahrenheit" ? convertTemperature(temperatureGetWeather,"fahrenheit") : "Fahrenheit"}
                </button>
                <br />
                <button onClick={() => handleUnitChange("kelvin")}>
                {selectedUnit === "kelvin" ? convertTemperature(temperatureGetWeather,"kelvin") : "Kelvin"}
                </button>
            </div>

        </>
    );
}
