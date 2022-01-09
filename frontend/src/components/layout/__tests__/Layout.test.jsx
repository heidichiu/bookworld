import { screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import Layout from "../Layout";

describe("Layout", () => {
  it("should render layout component", () => {
    renderWithRedux(
      <Layout>
        <div>test component</div>
      </Layout>,
      {}
    );

    expect(screen.getByText("test component")).toBeInTheDocument();
  });
});
