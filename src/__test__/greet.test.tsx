import { render, screen } from "@testing-library/react"
import Greet from "../components/greet/greet"
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";

describe("Greet", () => {

  it("renders correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    it("renders with a name", () => {
      render(<Greet name="Prakash"/>)
      const textElement = screen.getByText("Hello Prakash");
      expect(textElement).toBeInTheDocument();
    });
  })
})