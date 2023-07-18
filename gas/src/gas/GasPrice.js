import { useState } from "react";
import { getGasPriceInEuroCents } from "./gas";

export function GasPrice() {
  const [showInDollars, setShowInDollars] = useState(false);
  const gasPriceInEuroCents = getGasPriceInEuroCents();
  const gasPriceInDollarCents = gasPriceInEuroCents * 1.2;
  const displayedGasPrice =
    (showInDollars ? gasPriceInDollarCents : gasPriceInEuroCents) / 100;
  return (
    <>
      <h1>
        Le prix de l'essence est de {displayedGasPrice}
        {showInDollars ? "$" : "€"}
      </h1>
      <label htmlFor="dollarToggle">Show price in dollars</label>
      <input
        data-testid="dollarToggle"
        id="dollarToggle"
        type="checkbox"
        checked={showInDollars}
        onChange={(event) => setShowInDollars(event.target.checked)}
      />
    </>
  );
}
