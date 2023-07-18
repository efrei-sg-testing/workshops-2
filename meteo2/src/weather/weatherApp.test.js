import React from "react";

import { render, screen } from "@testing-library/react";

import WeatherApp from "./weatherApp";

import { getWeather } from "./weather";




// Mock the getWeather function

jest.mock("./weather.js")

test("renders weather information correctly", () => {

  getWeather.mockReturnValue({temperature:15, raining:true});

  render(<WeatherApp />);

    expect(

      screen.getByText(/Temperature:/)).toBeInTheDocument();

  });


