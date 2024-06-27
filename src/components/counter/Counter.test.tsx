import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
    test("renders correctly", () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();

        const incrementButton = screen.getByRole("button", {
            name: "Increment",
        });
        expect(incrementButton).toBeInTheDocument();
    });

    test("renders a count of 0", () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    });
    // testing mouse event interaction
    test("renders a count of 1 after clinkin g on the incremant button", async () => {
        render(<Counter />);
        const incrementButton = screen.getByRole("button", {
            name: "Increment",
        });

        await user.click(incrementButton);
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("1")
    });

    test("renders count of 2 when cliked on the increment butten twice", async ()=> {
      render(<Counter/>)
      const incrementButton = screen.getByRole("button", {
        name: "Increment"
      })

      await user.dblClick(incrementButton)
      const countElement = screen.getByRole("heading")
      expect(countElement).toHaveTextContent("2")

    })


    // test tab events
    test("elements are focused in the right order", async ()=> {
      user.setup()
      render(<Counter/>)
      const amountInput = screen.getByRole("spinbutton")
     
      const setButton = screen.getByRole("button", {
        name: "Set"
      })
      const incrementButton = screen.getByRole("button", {
        name: "Increment"
      })
      await user.tab()
      expect(incrementButton).toHaveFocus()

      await user.tab()
      expect(amountInput).toHaveFocus()

      await user.tab()
      expect(setButton).toHaveFocus()
    })

});
