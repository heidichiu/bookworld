import { screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";
import { getBooksAction } from "../../../module/book/bookAction";

jest.mock("../BookList");
jest.mock("../../../module/book/bookAction");
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

    getBooksAction.mockImplementation(() => (dispatch) => {
      dispatch({
        type: "BOOKLIST",
        payload: books,
      });
      dispatch({
        type: "BOOKLIST_FULFILLED",
      });
    });

    renderWithRedux(<BookContainer />, {});

    expect(BookList).toHaveBeenCalledWith({ books }, {});
  });

  it("should show loading when isPending is true", () => {
    getBooksAction.mockImplementation(() => ({
      type: "BOOKLIST_PENDING",
    }));

    renderWithRedux(<BookContainer />, {});
    expect(screen.getByTestId("book-loader")).toBeInTheDocument();
  });

  it("should show error message when error occured", () => {
    getBooksAction.mockImplementation(() => ({
      type: "BOOKLIST_ERROR",
    }));

    renderWithRedux(<BookContainer />, {});
    expect(screen.getByTestId("book-error-message")).toBeInTheDocument();
  });
});
