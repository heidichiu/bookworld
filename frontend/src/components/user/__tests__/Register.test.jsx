import { findByText, fireEvent, screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import Register from "../Register";

describe("Register from", () => {
  it("should have name, email, password field, and register button", () => {
    renderWithRedux(<Register />, {});

    expect(screen.getByLabelText("Enter email address")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter password")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter username")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  it("should show required error message when register is clicked", async () => {
    renderWithRedux(<Register />, {});

    fireEvent.submit(screen.getByText("Register"));

    expect(await screen.findByText("Email is required")).toBeInTheDocument();

    expect(await screen.findByText("Username is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
  });
});
