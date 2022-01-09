import userReducer, { USER_INITIAL_STATE } from "../userReducer";

describe("User Reducer", () => {
  it("should return new state for login user action", () => {
    const newState = userReducer(USER_INITIAL_STATE, {
      type: "USER_LOGIN",
      payload: {
        token: "jwt token",
        user: {
          id: "50704da4-13bb-4fad-adbc-04d4ef22653a",
          name: "peter",
          email: "peter@gmail.com",
        },
      },
    });

    expect(newState).toEqual({
      ...USER_INITIAL_STATE,
      token: "jwt token",
      user: {
        id: "50704da4-13bb-4fad-adbc-04d4ef22653a",
        name: "peter",
        email: "peter@gmail.com",
      },
    });
  });

  it("should return new state for register user action", () => {
    const newState = userReducer(USER_INITIAL_STATE, {
      type: "USER_REGISTER",
      payload: {
        id: "id",
        name: "name",
        email: "email@email.com",
        password: "password",
      },
    });

    expect(newState).toEqual({
      ...USER_INITIAL_STATE,
      userRegistered: {
        id: "id",
        name: "name",
        email: "email@email.com",
        password: "password",
      },
    });
  });

  it("should return new state for user logout action", () => {
    const loginState = {
      token: "token",
      user: {
        id: "uuid",
        name: "name",
        email: "email@email.com",
      },
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
    const newState = userReducer(loginState, {
      type: "USER_LOGOUT",
    });

    expect(newState).toEqual({
      ...loginState,
      user: null,
      token: null,
    });
  });
});
