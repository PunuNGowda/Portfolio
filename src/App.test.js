import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("axios", () => ({
  post: jest.fn().mockResolvedValue({ data: {} }),
}));

test("renders the portfolio with the owner's name", () => {
  render(<App />);
  const nameElements = screen.getAllByText("Punu N Gowda");
  expect(nameElements.length).toBeGreaterThan(0);
});