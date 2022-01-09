import { findByText, fireEvent, screen, waitFor } from "@testing-library/react";
import { registerAction, resetRegisterPromiseAction } from "../../../module/user/userAction";
import renderWithRedux from "../../../util/testUtil";
import Register from "../Register";

jest.mock("../../../module/user/userAction");
describe("Register from", () => {
  it("should have name, email, password field, and register button", () => {
    renderWithRedux(<Register />, {});

    expect(screen.getByLabelText("Enter email address")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter password")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter username")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  it("should show required error message when no input", async () => {
    renderWithRedux(<Register />, {});

    fireEvent.click(screen.getByText("Register"));

    expect(await screen.findByText("Email is required")).toBeInTheDocument();

    expect(await screen.findByText("Username is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
  });

  it("should show invalid error message for password and email when input is invalid", async () => {
    renderWithRedux(<Register />, {});

    fireEvent.change(screen.getByLabelText("Enter email address"), { target: { value: "invalid email" } });
    fireEvent.change(screen.getByLabelText("Enter password"), { target: { value: "pass" } });
    fireEvent.change(screen.getByLabelText("Enter username"), { target: { value: "valid username" } });

    fireEvent.click(screen.getByText("Register"));

    expect(await screen.findByText("Enter a valid email")).toBeInTheDocument();

    expect(await screen.findByText("Password should be of minimum 8 character length")).toBeInTheDocument();
  });

  it("should call user register action when inputs are valid", async () => {
    renderWithRedux(<Register />, {});
    registerAction.mockImplementation(() => (dispatch) => {
      dispatch({ type: "USER_REGISTER_SUCCESS" });
    });
    resetRegisterPromiseAction.mockImplementation(() => (dispatch) => {});

    fireEvent.change(screen.getByLabelText("Enter email address"), { target: { value: "email@email.com" } });
    fireEvent.change(screen.getByLabelText("Enter password"), { target: { value: "password" } });
    fireEvent.change(screen.getByLabelText("Enter username"), { target: { value: "valid username" } });

    fireEvent.click(screen.getByText("Register"));

    await waitFor(() => {
      expect(registerAction).toHaveBeenCalledWith({
        name: "valid username",
        email: "email@email.com",
        password: "password",
      });
    });
    expect(resetRegisterPromiseAction).toHaveBeenCalled();
  });
});
