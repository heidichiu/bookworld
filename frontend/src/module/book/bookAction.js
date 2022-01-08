import { getBooksService, getBooksByTitleService } from "./bookService";

export const getBooksByTitleAction = (title) => async (dispatch) => {
  try {
    dispatch({ type: "BOOKLIST_PENDING" });
    const books = await getBooksByTitleService(title);
    dispatch({ type: "BOOKS_BY_TITLE", payload: books.data });
    dispatch({ type: "BOOKLIST_FULFILLED" });
  } catch (error) {
    dispatch({ type: "BOOKLIST_ERROR" });
  }
};

export const getBooksAction = () => async (dispatch) => {
  try {
    dispatch({ type: "BOOKLIST_PENDING" });

    const books = await getBooksService();
    dispatch({
      type: "BOOKLIST",
      payload: books.data,
    });
    dispatch({ type: "BOOKLIST_FULFILLED" });
  } catch (error) {
    dispatch({ type: "BOOKLIST_ERROR" });
  }
};
