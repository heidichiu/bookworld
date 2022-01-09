import { screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import Header from "../Header";
import * as redux from "react-redux";

describe("Header", () => {
  it("should display user welcome message and logout when logged in", async () => {
    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue({ id: "50704da4-13bb-4fad-adbc-04d4ef22653a", name: "peter", email: "peter@gmail.com" });
    renderWithRedux(<Header />, {});

    expect(await screen.findByText("Welcome, peter")).toBeInTheDocument();
    expect(await screen.findByText("Logout")).toBeInTheDocument();
  });
});
