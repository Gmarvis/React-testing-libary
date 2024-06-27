import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
    const skills = ["HTML", "CSS", "JavaScript"];
    test("renders correctly", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("renders a list of skills", () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    });

    test("renders Login button", () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();
    });

    test("start leaning butten is not rendered", () => {
        render(<Skills skills={skills} />);
        const startLearningButten = screen.queryByRole("button", {
            name: "Start learning",
        });

        expect(startLearningButten).not.toBeInTheDocument();
    });

    test("start learning is eventualy displayed", async () => {
        const view = render(<Skills skills={skills} />);
        // logRoles(view.container)
        // screen.debug()
        const startLearningButten = await screen.findByRole("button", {
            name: "Start learning",
        },{
          timeout: 2000
        });
        // screen.debug()
        expect(startLearningButten).toBeInTheDocument();
    });
});
