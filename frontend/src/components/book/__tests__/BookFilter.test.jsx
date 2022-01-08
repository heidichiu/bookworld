import { fireEvent, screen } from "@testing-library/react";
import { getBooksByTitleAction } from "../../../module/book/bookAction";
import renderWithRedux from "../../../util/testUtil";
import BookFilter from "../BookFilter";

jest.mock("../../../module/book/bookAction");
describe("BookFilter", () => {
  it("should fire getBooksByTitlte action on click of search button", () => {
    getBooksByTitleAction.mockImplementation(() => (dispatch) => {});
    renderWithRedux(<BookFilter />, {});

    const textField = screen.getByLabelText("Enter book title");

    const inputValue = "test title";
    fireEvent.change(textField, { target: { value: inputValue } });

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    expect(getBooksByTitleAction).toHaveBeenCalledWith(inputValue);
  });
});
