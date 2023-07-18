import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { getWeather } from "./weather/weather.js"

import { App } from "./app.js";





jest.mock("./weather/weather.js");






test("renders outfits for temperature =8 and raining = true", () => {

    getWeather.mockReturnValue({ temperature: 8, raining: true });

    render(<App />);

    expect(

        screen.getByText("Bonjour, il fait 8 °C et il pleut"),

    ).toBeInTheDocument();

    expect(

        screen.getByText("Manteau imperméable et Bottes imperméables"),

    ).toBeInTheDocument();

});




test("renders outfits for temperature =9  and raining = false", () => {

    getWeather.mockReturnValue({ temperature: 9, raining: false });

    render(<App />);

    expect(

        screen.getByText("Bonjour, il fait 9 °C et il fait beau"),

    ).toBeInTheDocument();

    expect(

        screen.getByText("Manteau et chaussures de sport"),

    ).toBeInTheDocument();

});




test("renders outfits for temperature =18  and raining = true", () => {

    getWeather.mockReturnValue({ temperature: 18, raining: true });

    render(<App />);

    expect(

        screen.getByText("Bonjour, il fait 18 °C et il pleut"),

    ).toBeInTheDocument();

    expect(

        screen.getByText("Veste légère et jean"),

    ).toBeInTheDocument();

});




test("renders outfits for temperature =18  and raining = false", () => {

    getWeather.mockReturnValue({ temperature: 18, raining: false });

    render(<App />);

    expect(

        screen.getByText("Bonjour, il fait 18 °C et il fait beau"),

    ).toBeInTheDocument();

    expect(

        screen.getByText("bottes imperméables et jean"),

    ).toBeInTheDocument();

});




test("renders outfits for temperature =18  and raining = false", () => {

    getWeather.mockReturnValue({ temperature: 45, raining: false });

    render(<App />);

    expect(

        screen.getByText("Bonjour, il fait 45 °C et il fait beau"),

    ).toBeInTheDocument();

    expect(

        screen.getByText("T-shirt léger et short"),

    ).toBeInTheDocument();

});




test("renders outfits for temperature =18  and raining = false", () => {

    getWeather.mockReturnValue({ temperature: 45, raining: false });

    render(<App />);

    expect(

        screen.getByText("Bonjour, il fait 45 °C et il fait beau"),

    ).toBeInTheDocument();

    expect(

        screen.getByText("T-shirt léger et short"),

    ).toBeInTheDocument();

});