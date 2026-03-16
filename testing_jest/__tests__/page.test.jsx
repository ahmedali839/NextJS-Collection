import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("renders a paragraph", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 3 });

    // // Alternatives
    // const paragraph = screen.getByRole("paragraph");
    const paragraph = screen.getByText("This is not a paragraph ?");

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it("renders about link", () => {
    render(<Page />);

    const link = screen.getByRole("link", { name: "About" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
  });
});
