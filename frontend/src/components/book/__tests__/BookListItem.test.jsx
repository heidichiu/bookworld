import { render, screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import BookListItem from "../BookListItem";

describe("BookListItem", () => {
  it("should render BookListItem without error", () => {
    const book = {
      id: "1",
      title: "test title",
      description: "desc",
      releaseYear: 2020,
    };
    renderWithRedux(<BookListItem book={book} />);
    expect(screen.getAllByText("test title")[0]).toBeInTheDocument();
    expect(screen.getByText("desc")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
  });
});
