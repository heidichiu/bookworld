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

    default: {
      return state;
    }
  }
};

export default userReducer;
