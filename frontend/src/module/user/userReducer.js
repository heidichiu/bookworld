import { INITIL_BOOK_REDUCER_STATE } from "../book/bookReducer";

export const USER_INITIAL_STATE = {
  token: window.localStorage.getItem("bookworld-token"),
  promise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
  registerPromise: {
    isPending: false,
    isFulfilled: false,
    isErrorOccured: false,
  },
  user: null,
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

    // register action
    case "USER_REGISTER": {
      return {
        ...state,
        user: action.payload,
      };
    }

    case "USER_REGISTER_PENDING": {
      return {
        ...state,
        registerPromise: { isPending: true, isFulfilled: false, isErrorOccured: false },
      };
    }
    case "USER_REGISTER_SUCCESS": {
      return {
        ...state,
        registerPromise: { isPending: false, isFulfilled: true, isErrorOccured: false },
      };
    }
    case "USER_REGISTER_ERROR": {
      return {
        ...state,
        registerPromise: { isPending: false, isFulfilled: false, isErrorOccured: true },
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
