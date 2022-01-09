export const USER_INITIAL_STATE = {
  token: window.localStorage.getItem("bookworld-token"),
  user: JSON.parse(window.localStorage.getItem("bookworld-user")),
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
  userRegistered: null,
};

const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_LOGOUT": {
      return {
        ...state,
        user: null,
      };
    }

    case "USER_LOGIN": {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
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
    case "RESET_REGISTER_PROMISE": {
      return {
        ...state,
        registerPromise: { isPending: false, isFulfilled: false, isErrorOccured: false },
      };
    }

    case "USER_REGISTER": {
      return {
        ...state,
        userRegistered: action.payload,
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
