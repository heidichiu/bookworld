import { screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";

describe("BookContainer", () => {
  it("should render without error", () => {
    renderWithRedux(<BookContainer />, {
      initialState: {
        bookReducer: {
          book: [
            {
              id: 1,
              title: "test title",
              description: "desc",
              releaseYear: 2020,
            },
          ],
        },
      },
    });

    expect(screen.getByText("Display all books")).toBeInTheDocument();
  });
});
