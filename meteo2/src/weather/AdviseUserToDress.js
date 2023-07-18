import { getWeather } from "./weather";

function getDress(temperature,raining) {

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
    let myDressIs = getDress({ temperature: temperatureGetWeather,raining: rainingGetWeather}); // Pass the temperature as an object

    return (
        <>  
            <h1>
                La température est de: {temperatureGetWeather}°, Le ciel: {rainingGetWeather ? "il pleut" : "il pleut pas"}
            </h1>
            <h2>Selon la température ci-dessus tu dois mettre un {myDressIs}</h2>
        </>
    );
}
