import { render, screen } from "@testing-library/react";
import Layout from "../Layout";

describe("Layout", () => {
  it("should render layout component", () => {
    render(
      <Layout>
        <div>test component</div>
      </Layout>
    );

    expect(screen.getByText("test component")).toBeInTheDocument();
  });
});
