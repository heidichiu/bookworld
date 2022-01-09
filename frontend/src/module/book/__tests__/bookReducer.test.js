import bookReducer, { INITIL_BOOK_REDUCER_STATE } from "../bookReducer";

describe("bookReducer", () => {
  it("should return correct new state for BOOKLIST action", () => {
    const action = {
      type: "BOOKLIST",
      payload: [
        {
          id: 1,
          title: "test title",
          description: "des",
          releaseYear: 2018,
        },
      ],
    };

    const newState = bookReducer(INITIL_BOOK_REDUCER_STATE, action);

    expect(newState).toEqual({
      ...INITIL_BOOK_REDUCER_STATE,
      books: [
        {
          id: 1,
          title: "test title",
          description: "des",
          releaseYear: 2018,
        },
      ],
      promise: { isPending: false, isFulfilled: false, isErrorOccured: false },
    });
  });

  it("should return correct new state for BOOKS_BY_TITLE Action", () => {
    const action = {
      type: "BOOKS_BY_TITLE",
      payload: [
        {
          id: "2",
          title: "second book",
          description: "des",
          releaseYear: 2018,
        },
      ],
    };

    const newState = bookReducer(INITIL_BOOK_REDUCER_STATE, action);

    expect(newState).toEqual({
      ...INITIL_BOOK_REDUCER_STATE,
      books: [
        {
          id: "2",
          title: "second book",
          description: "des",
          releaseYear: 2018,
        },
      ],
      promise: { isPending: false, isFulfilled: false, isErrorOccured: false },
    });
  });

  it("should return correct new state for GET_BOOK Action", () => {
    const action = {
      type: "GET_BOOK",
      payload: {
        id: "2",
        title: "second book",
        description: "des",
        releaseYear: 2018,
      },
    };

    const newState = bookReducer(INITIL_BOOK_REDUCER_STATE, action);

    expect(newState).toEqual({
      ...INITIL_BOOK_REDUCER_STATE,
      book: {
        id: "2",
        title: "second book",
        description: "des",
        releaseYear: 2018,
      },
    });
  });
});
