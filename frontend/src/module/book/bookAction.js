import getBooksService from "./bookService";

const getBooksAction = () => async (dispatch) => {
  try {
    dispatch({ type: "BOOKLIST_PENDING" });

    const books = await getBooksService();
    dispatch({
      type: "BOOKLIST",
      payload: books.data,
    });
    dispatch({ type: "BOOKLIST_FULFILLED" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "BOOKLIST_ERROR" });
  }
};

export default getBooksAction;
