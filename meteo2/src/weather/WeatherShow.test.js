import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { WeatherShow } from "./WeatherShow";
import { getWeather } from "./weather";

jest.mock("./weather.js");

test("renders weather values", () => {
    getWeather.mockReturnValue({temperature:15, raining:true});
    render(<WeatherShow/>);
    expect(
        screen.getByText("Les previsions meteo du jours : une temperature de 15 degres C et de la pluie"),
    ).toBeInTheDocument();
});

test("renders advice when it's cold and rainy", () => {
    getWeather.mockReturnValue({temperature:15, raining:true});
    render(<WeatherShow/>);
    expect(
        screen.getByText("Mettez un pullover et n'oubliez pas votre parapluie"),
    ).toBeInTheDocument();
});

test("renders advice when it's hot and sunny", () => {
    getWeather.mockReturnValue({temperature:25, raining:false});
    render(<WeatherShow/>);
    expect(
        screen.getByText("Un teeshirt suffira et pas besoin de parapluie "),
    ).toBeInTheDocument();
});

test("shows temperature in farenheit when asked", () => {
    getWeather.mockReturnValue({temperature:15, raining:true});
    render(<WeatherShow/>);

    expect(
        screen.getByText("Les previsions meteo du jours : une temperature de 15 degres C et de la pluie"),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Show temperature in Farenheit"));
    expect(
        screen.getByText("Les previsions meteo du jours : une temperature de 59 degres F et de la pluie"),
    ).toBeInTheDocument();
});
