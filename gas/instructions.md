# Meteo exercise

## Frontend unit testing

## App goal

- The goal here is to implement a small frontend app which will advise the user on how to dress depending on the weather.
- The webapp will use a fictional weather API provided by the module weather.js
  This API returns information about the current temperature and whether it's raining.
- The weather.js file is voluntarily obfuscated : it's an external piece of code you have no control over
- You will have to be able to advise for at least 6 different outfits depending on the weather

## Testing goals

- Unit test all the react components you create
- Unit test the code that determines what to wear depending on the weather.
- (bonus) Add a buttons to see the weather in celsius, fahrenheit, or kelvins, and test them

## The weather module

- weather.js exports a `getWeather` function which will give you an object with the temperature and whether it's raining

## Resources

- Launch the app with `npm start`
- Launch the tests with `npm test`
- Jest documentation : https://jestjs.io
