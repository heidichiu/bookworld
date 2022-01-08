import { INITIL_BOOK_REDUCER_STATE } from "../book/bookReducer";

export const USER_INITIAL_STATE = {
  token: "",
  promise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
};

const userReducer = (state = INITIL_BOOK_REDUCER_STATE, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        ...state,
        token: action.payload.token,
      };
    }

    case "USER_PENDING": {
      return {
        ...state,
        promise: { isPending: true, isFulfilled: false, isErrorOccured: false },
      };
    }
    case "USER_SUCCESS": {
      return {
        ...state,
        promise: { isPending: false, isFulfilled: true, isErrorOccured: false },
      };
    }
    case "USER_ERROR": {
      return {
        ...state,
        promise: { isPending: false, isFulfilled: false, isErrorOccured: true },
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
