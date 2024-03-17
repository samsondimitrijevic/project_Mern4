/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import Header from "../components/Header";

describe("Header", () => {
  test("Logo should have the correct alt class", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Vite Icon");
  });
  test("Heading should have the correct alt class", () => {
    render(<Header />);
    expect(screen.getByTestId("title")).toHaveTextContent("");
  });
});
