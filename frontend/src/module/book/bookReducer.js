export const INITIL_BOOK_REDUCER_STATE = {
  books: [],
  promise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
};

const bookReducer = (state = INITIL_BOOK_REDUCER_STATE, action) => {
  switch (action.type) {
    case "BOOKLIST": {
      return {
        ...state,
        books: action.payload,
      };
    }

    case "BOOKS_BY_TITLE": {
      return {
        ...state,
        books: action.payload,
      };
    }

    case "BOOKLIST_PENDING": {
      return {
        ...state,
        promise: { isPending: true, isFulfilled: false, isErrorOccured: false },
      };
    }

    case "BOOKLIST_ERROR": {
      return {
        ...state,
        promise: { isPending: false, isFulfilled: false, isErrorOccured: true },
      };
    }

    case "BOOKLIST_FULFILLED": {
      return {
        ...state,
        promise: { isPending: false, isFulfilled: true, isErrorOccured: false },
      };
    }

    default: {
      return state;
    }
  }
};

export default bookReducer;
