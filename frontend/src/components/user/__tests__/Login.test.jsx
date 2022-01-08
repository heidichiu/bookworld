import renderWithRedux from "../../../util/testUtil";
import Login from "../Login";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { loginAction } from "../../../module/user/userAction";

jest.mock("../../../module/user/userAction");
describe("Login test", () => {
  it("should show required error message for email and password", async () => {
    renderWithRedux(<Login />, {});
    const submitBtn = await screen.findAllByText("Login");
    fireEvent.submit(submitBtn[0]);

    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
  });

  it("should show email and password invalid message", async () => {
    renderWithRedux(<Login />, {});
    const submitBtn = await screen.findAllByText("Login");
    const passwordField = screen.getByLabelText("Enter password");
    const emailField = screen.getByLabelText("Enter email address");

    fireEvent.change(passwordField, { target: { value: "wrog" } }); // a password less than 8 charcaters is invalid
    fireEvent.change(emailField, { target: { value: "invalid" } }); // a email without @ is invalid

    fireEvent.submit(submitBtn[0]);

    expect(await screen.findByText("Enter a valid email")).toBeInTheDocument();
    expect(await screen.findByText("Password should be of minimum 8 character length")).toBeInTheDocument();
  });

  it("should call login action when  email and password is valid", async () => {
    loginAction.mockImplementation(() => (dispatch) => {});
    renderWithRedux(<Login />, {});
    const submitBtn = await screen.findAllByText("Login");
    const passwordField = screen.getByLabelText("Enter password");
    const emailField = screen.getByLabelText("Enter email address");

    fireEvent.change(passwordField, { target: { value: "validpassword" } }); // a password less than 8 charcaters is invalid
    fireEvent.change(emailField, { target: { value: "valid@gmail.com" } }); // a email without @ is invalid

    fireEvent.submit(submitBtn[0]);
    await waitFor(() => expect(loginAction).toHaveBeenCalledWith("valid@gmail.com", "validpassword"));
  });
});
