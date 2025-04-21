import { render, screen } from "@testing-library/react"
import App from "./App"
import {test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

test("renders count is link", () => {
  render(<App/>);
  const titleElement = screen.getByText("Vite + React");
  expect(titleElement).toBeInTheDocument();
})