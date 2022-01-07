import { screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";

jest.mock("../BookList");
describe("BookContainer", () => {
  beforeAll(() => {
    BookList.mockImplementation(() => <div>mock booklist component</div>);
  });

  it("should render without error", () => {
    const books = [
      {
        id: 1,
        title: "test title",
        description: "desc",
        releaseYear: 2020,
      },
    ];
    renderWithRedux(<BookContainer />, {
      initialState: {
        bookReducer: {
          books,
        },
      },
    });

    expect(BookList).toHaveBeenCalledWith({ books }, {});
  });
});
