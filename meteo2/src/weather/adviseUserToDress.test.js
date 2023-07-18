import React from "react";
import { render, screen } from "@testing-library/react";
import { AdviseUserToDress } from "./AdviseUserToDress";
import { getWeather } from "./weather";
jest.mock("./weather.js");

test("Render the temperature and raining", () => {
    getWeather.mockReturnValue({ temperature: 18, raining: false});
  render(<AdviseUserToDress />);
  expect(
    screen.getByText("La température est de: 18°, Le ciel: il pleut pas"),
  ).toBeInTheDocument();
});

test("Render the temperature and raining under 18°", () => {
    getWeather.mockReturnValue({ temperature: 5, raining: true});
  render(<AdviseUserToDress />);
  expect(
    screen.getByText("La température est de: 5°, Le ciel: il pleut"),
  ).toBeInTheDocument();
});

test("Render the temperature and raining over 18°", () => {
    getWeather.mockReturnValue({ temperature: 40, raining: false});
  render(<AdviseUserToDress />);
  expect(
    screen.getByText("La température est de: 40°, Le ciel: il pleut pas"),
  ).toBeInTheDocument();
});

test("Render the temperature and raining over 18°", () => {
    getWeather.mockReturnValue({ temperature: 4, raining: true});
  render(<AdviseUserToDress />);
  expect(
    screen.getByText("La température est de: 4°, Le ciel: il pleut"),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Selon la température ci-dessus tu dois mettre un Doudoune et un bonet"),
  ).toBeInTheDocument();
});