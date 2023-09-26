/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App component", () => {
  test("displays the details of a featured puppy when clicked", () => {
    // Render the App component
    render(<App />);

    // Find the puppy with name "Sir Waggington"
    const puppyName = screen.getByText("Sir Waggington");

    // Simulate a click on the puppy
    fireEvent.click(puppyName);

    // Assert that the featured puppy's name is displayed
    const featuredPuppyName = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(featuredPuppyName).toBeInTheDocument();

    // Assert that the featured puppy's age is displayed
    const featuredPuppyAge = screen.getByText(/Age: \d+/);
    expect(featuredPuppyAge).toBeInTheDocument();

    // Assert that the featured puppy's email is displayed
    const featuredPuppyEmail = screen.getByText(/Email: \S+/);
    expect(featuredPuppyEmail).toBeInTheDocument();
  });

  // TODO
  test("does not display the details of a featured puppy initially", () => {
    // Render the App component
    render(<App />);
    // Assert that the featured puppy's name is not displayed
    //make sure that the heading is NOT visible:  
    const featuredPuppyName = screen.queryByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(featuredPuppyName).toBe(null);
    // Assert that the featured puppy's age is not displayed
    //make sure there is no list
     const featuredPuppyAge = screen.queryByRole("list", {
       age: /5/i,
     });
    expect(featuredPuppyAge).toBe(null);
    // Assert that the featured puppy's email is not displayed
       const featuredPuppyEmail = screen.queryByRole("list", {
         email: /sir-wag@email.com/i,
       });
    expect(featuredPuppyEmail).toBe(null);
  });

  // TODO
  test("does not change the featured puppy when the same puppy is clicked twice", () => {
    // Render the App component
    render(<App />);
    // Find the puppy with name "Sir Waggington"
    const puppyName = screen.getByText("Sir Waggington");
    // Simulate a click on the puppy
    fireEvent.click(puppyName);
    // Assert that the initial featured puppy's name is displayed
     const featuredPuppyClick1 = screen.getByRole("heading", {
       name: /Sir Waggington/i,
     });
     expect(featuredPuppyClick1).toBeInTheDocument();
    // Simulate another click on the same puppy
    fireEvent.click(puppyName);
    // Assert that the featured puppy's name is still displayed and is the same as the initial featured puppy
    const featuredPuppyClick2 = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(featuredPuppyClick2).toBeInTheDocument();
  });

  // TODO
  test("displays the details of a featured puppy when clicked", () => {
    // Render the App component
    render(<App />);
    // Find the puppy with name "Miss Furbulous"
    const puppyName = screen.getByText("Miss Furbulous");
    // Simulate a click on the puppy
    fireEvent.click(puppyName);
    // Assert that the featured puppy's name is displayed
    const featuredPuppyName = screen.getByRole("heading", {
      name: /Miss Furbulous/i,
    });
    expect(featuredPuppyName).toBeInTheDocument();
    // Assert that the featured puppy's age is displayed
     const featuredPuppyAge = screen.getByText(/Age: \d+/);
     expect(featuredPuppyAge).toBeInTheDocument();
    // Assert that the featured puppy's email is displayed
    const featuredPuppyEmail = screen.getByText(/Email: \S+/);
    expect(featuredPuppyEmail).toBeInTheDocument();
  });
});
