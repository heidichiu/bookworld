export const INITIL_BOOK_REDUCER_STATE = {
  book: null,
  books: [],
  promise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
  bookPromise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
  postBookReviewPromise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
};

const bookReducer = (state = INITIL_BOOK_REDUCER_STATE, action) => {
  switch (action.type) {
    case "GET_BOOK": {
      return {
        ...state,
        book: action.payload,
      };
    }

    case "BOOK_PENDING": {
      return {
        ...state,
        bookPromise: { isPending: true, isFulfilled: false, isErrorOccured: false },
      };
    }

    case "BOOK_ERROR": {
      return {
        ...state,
        bookPromise: { isPending: false, isFulfilled: false, isErrorOccured: true },
      };
    }

    case "BOOK_FULFILLED": {
      return {
        ...state,
        bookPromise: { isPending: false, isFulfilled: true, isErrorOccured: false },
      };
    }

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

    case "POST_BOOK_REVIEW_PENDING": {
      return {
        ...state,
        postBookReviewPromise: { isPending: true, isFulfilled: false, isErrorOccured: false },
      };
    }

    case "POST_BOOK_REVIEW_ERROR": {
      return {
        ...state,
        postBookReviewPromise: { isPending: false, isFulfilled: false, isErrorOccured: true },
      };
    }

    case "POST_BOOK_REVIEW_FULFILLED": {
      return {
        ...state,
        postBookReviewPromise: { isPending: false, isFulfilled: true, isErrorOccured: false },
      };
    }

    default: {
      return state;
    }
  }
};

export default bookReducer;
