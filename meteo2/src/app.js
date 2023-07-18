import { useState } from "react"

import { getWeather } from "./weather/weather.js"





function outfits(currentweather) {


    const temperature = currentweather.temperature

    const raining = currentweather.raining

    return (

        <h1>

            {temperature < 10 && raining ? (

                <div>Manteau imperméable et Bottes imperméables</div>

            ) : temperature < 10 && !raining ? (

                <div>Manteau et chaussures de sport</div>

            ) : temperature < 20 && raining ? (

                <div>Veste légère et jean</div>

            ) : temperature < 20 && !raining ? (

                <div> bottes imperméables et jean</div>

            ) : temperature < 30 && raining ? (

                <div>jean et  t-shirt</div>

            ) : temperature < 30 && !raining ? (

                <div>t-shirt et sandales</div>

            ) : <div>T-shirt léger et short</div>}

        </h1>

    );

}


export function Application() {

    const currentweather = getWeather()


    const handleClickTemperature = (e) => {

        e.target.value == "C" && setDisplayTemperature(temperature) && setDisplayTemperatureSymbol("C")
        e.target.value == "F" && setDisplayTemperature(temperatureFarenheit) && setDisplayTemperatureSymbol("F")
        e.target.value == "K" && setDisplayTemperature(temperatureKelvin) && setDisplayTemperatureSymbol("K")

        e.target.value == "C" && setDisplayTemperatureSymbol("C")
        e.target.value == "F" && setDisplayTemperatureSymbol("F")
        e.target.value == "K" && setDisplayTemperatureSymbol("K")

    };

    const temperatureFarenheit = (currentweather.temperature * 3 / 5) + 32

    const temperatureKelvin = currentweather.temperature + 273

    const temperature = currentweather.temperature

    const raining = currentweather.raining

    const outfit = outfits(currentweather)

    const [displayTemperature, setDisplayTemperature] = useState(temperature)
    const [displayTemperatureSymbol, setDisplayTemperatureSymbol] = useState("C")
    return (

        <>
            <h2>

                Bonjour, il fait {displayTemperature} {displayTemperatureSymbol} et {currentweather.raining ? "il pleut" : "il fait beau"}

            </h2>

            <div>

                tu devrais porter :

            </div>

            {outfit}

            <div>

                <button value="C" onClick={handleClickTemperature}>Celsius</button>

                <button value="F" onClick={handleClickTemperature}>Fahrenheit</button>

                <button value="K" onClick={handleClickTemperature}>Kelvins</button>

            </div>
        </>

    )




}