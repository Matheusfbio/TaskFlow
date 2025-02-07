import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { describe, it } from "node:test";

describe("Should be render home page", () => {
  it("Should be render home page", () => {
    render(<Home />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
