import bookReducer, { INITIL_BOOK_REDUCER_STATE } from "../bookReducer";

describe("bookReducer", () => {
  it("should return correct new state", () => {
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
});
