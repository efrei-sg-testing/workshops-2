import React from "react";
import { render, screen } from "@testing-library/react";
import { AdviseUserToDress} from "./AdviseUserToDress";
import { getWeather } from "./weather";

jest.mock("./weather.js");

test("renders temperature and raining", () => {
  getWeather.mockReturnValue({ temperature: 18, raining: false });
  render(<AdviseUserToDress />);
  expect(
    screen.getByText("La température est de 18, le ciel :il pleut pas")
  ).toBeInTheDocument();
});

test("renders temperature and raining over 18", () => {
    getWeather.mockReturnValue({ temperature: 25, raining: true });
    render(<AdviseUserToDress />);
    expect(
      screen.getByText("La température est de 25, le ciel :il pleut")
    ).toBeInTheDocument();
  });

  test("renders temperature and raining over 18", () => {
    getWeather.mockReturnValue({ temperature: 40, raining: false });
    render(<AdviseUserToDress />);
    expect(
      screen.getByText("La température est de 5, le ciel :il pleut")
    ).toBeInTheDocument();
  });