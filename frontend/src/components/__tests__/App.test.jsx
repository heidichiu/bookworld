import { render } from "@testing-library/react";
import App from "../App";
import renderWithRedux from "../../util/testUtil";

describe("App component", () => {
  it("should render app without error", () => {
    const { asFragment } = renderWithRedux(<App />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
