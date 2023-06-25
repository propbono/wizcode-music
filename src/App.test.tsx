import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Main screen tests", async () => {
  it("should have a title", async () => {
    render(<App />);

    const h1 = await screen.findByText("Wizcode Music App");

    expect(h1).toBeInTheDocument();
  });

  it("should have a footer", async () => {
    render(<App />);

    const footer = await screen.findByText("© 2023 by propbono");

    expect(footer).toBeInTheDocument();
  });
});
