import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {describe, expect, test} from "vitest";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText("Ready to code!")).toBeInTheDocument();
  });
});