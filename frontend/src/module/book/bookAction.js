import { getBooksService, getBooksByTitleService, getBookService, postBookReviewService } from "./bookService";

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

export const getBookAction = (bookId) => async (dispatch) => {
  try {
    dispatch({ type: "BOOK_PENDING" });

    const book = await getBookService(bookId);
    dispatch({
      type: "GET_BOOK",
      payload: book.data,
    });
    dispatch({ type: "BOOK_FULFILLED" });
  } catch (error) {
    dispatch({ type: "BOOK_ERROR" });
  }
};

export const postBookReviewAction = (bookId, bookReview) => async (dispatch) => {
  try {
    dispatch({ type: "POST_BOOK_REVIEW_PENDING" });

    const response = await postBookReviewService(bookId, bookReview);
    dispatch({ type: "POST_BOOK_REVIEW_FULFILLED" });
  } catch (error) {
    dispatch({ type: "POST_BOOK_REVIEW_ERROR" });
  }
};
