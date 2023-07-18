import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { GasPrice } from "./GasPrice";
import { getGasPriceInEuroCents } from "./gas";

jest.mock("./gas.js");

test("renders a gas price", () => {
  getGasPriceInEuroCents.mockReturnValue(700);
  render(<GasPrice />);
  expect(
    screen.getByText("Le prix de l'essence est de 7€"),
  ).toBeInTheDocument();
});

test("renders a different gas price", () => {
  getGasPriceInEuroCents.mockReturnValue(150);
  render(<GasPrice />);
  expect(
    screen.getByText("Le prix de l'essence est de 1.5€"),
  ).toBeInTheDocument();
});

test("shows the price in dollars when asked", () => {
  getGasPriceInEuroCents.mockReturnValue(100);
  render(<GasPrice />);

  expect(
    screen.getByText("Le prix de l'essence est de 1€"),
  ).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText("Show price in dollars"));
  expect(
    screen.getByText("Le prix de l'essence est de 1.2$"),
  ).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("dollarToggle"));
  expect(
    screen.getByText("Le prix de l'essence est de 1€"),
  ).toBeInTheDocument();
});
