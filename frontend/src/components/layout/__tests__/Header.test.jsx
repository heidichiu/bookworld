import { screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import Header from "../Header";
import * as redux from "react-redux";
import { fireEvent, waitFor } from "@testing-library/react";
import { logoutAction } from "../../../module/user/userAction";

jest.mock("../../../module/user/userAction");
describe("Header", () => {
  it("should display user welcome message and logout when logged in", async () => {
    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue({ id: "50704da4-13bb-4fad-adbc-04d4ef22653a", name: "peter", email: "peter@gmail.com" });
    renderWithRedux(<Header />, {});

    expect(await screen.findByText("Welcome, peter")).toBeInTheDocument();
    expect(await screen.findByText("Logout")).toBeInTheDocument();
  });

  it("should dispatch logout action when logout button is clicked", async () => {
    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue({ id: "50704da4-13bb-4fad-adbc-04d4ef22653a", name: "peter", email: "peter@gmail.com" });
    logoutAction.mockImplementation(() => (dispatch) => {});

    renderWithRedux(<Header />, {});

    fireEvent.click(await screen.findByText("Logout"));

    expect(logoutAction).toBeCalledTimes(1);
  });
});
