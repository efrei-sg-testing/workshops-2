import { useState } from "react";
import { getWeather } from "./weather";

function getDress(tempGetWeather){
    const mytemp = tempGetWeather;
    if (mytemp.temperature==18){
        return "Mettre un pull"
    }else if(mytemp.temperature <18){
        return "Mettre une doudoune";
    }else {
        return "Mettre T-shirt";
    }
}

export function AdviseUserToDress() {
  //const [showInDollars, setShowInDollars] = useState(false);
  //const gasPriceInEuroCents = getGasPriceInEuroCents();
  //const gasPriceInDollarCents = gasPriceInEuroCents * 1.2;
  //const displayedGasPrice =
    //(showInDollars ? gasPriceInDollarCents : gasPriceInEuroCents) / 100;
    const tempGetWeather = getWeather().temperature;
    const rainGetWeather = getWeather().raining;
    let myDress= getDress(tempGetWeather)
    

    return (
    <>
      <h1>
        La température est de {tempGetWeather}, le ciel :{rainGetWeather ? "il pleut": "il pleut pas"}
        
      </h1>
      <div>Selon la temparature ci-dessus, tu mets {myDress}</div>
   {/*    <label htmlFor="dollarToggle">Show price in dollars</label>
      <input
        data-testid="dollarToggle"
        id="dollarToggle"
        type="checkbox"
        checked={showInDollars}
        onChange={(event) => setShowInDollars(event.target.checked)}
      /> */}
    </>
  );
}
