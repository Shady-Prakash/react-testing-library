import { render, screen } from "@testing-library/react"
import Greet from "./greet"
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";

describe("Greet", () => {

  test("renders correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("renders with a name", () => {
      render(<Greet name="Prakash"/>)
      const textElement = screen.getByText("Hello Prakash");
      expect(textElement).toBeInTheDocument();
    });
  })
})