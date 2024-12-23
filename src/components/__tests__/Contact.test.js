import {
  getAllByRole,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";
test("Should load contact us page", () => {
  render(<ContactUs />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
test("Should load Button Inside Contact us page", () => {
  render(<ContactUs />);

  const Button = screen.getByText("Submit");

  expect(Button).toBeInTheDocument();
});

test("should load 2 input boxes on Contact Page", () => {
  render(<ContactUs />);
  const inputBoxes = screen.getAllByRole("textbox");

  //expect(inputBoxes)
});
