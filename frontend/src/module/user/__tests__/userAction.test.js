import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import axios from "axios";
import { loginAction, logoutAction, registerAction, resetRegisterPromiseAction } from "../userAction";

jest.mock("axios");
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("login action", () => {
  beforeEach(() => {
    axios.post.mockImplementation(() => {
      return Promise.resolve({
        data: {
          token: "mock jwt token",
          user: {
            id: "50704da4-13bb-4fad-adbc-04d4ef22653a",
            name: "peter",
            email: "peter@gmail.com",
          },
        },
      });
    });
  });

  it("should able to dispatch and save in local storage", async () => {
    const store = mockStore({});
    await store.dispatch(loginAction("email", "password"));
    const actions = store.getActions();

    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "USER_LOGIN",
      payload: {
        token: "mock jwt token",
        user: {
          id: "50704da4-13bb-4fad-adbc-04d4ef22653a",
          name: "peter",
          email: "peter@gmail.com",
        },
      },
    });
    expect(window.localStorage.getItem("bookworld-token")).toEqual("mock jwt token");
  });

  it("should dispatch register action", async () => {
    const store = mockStore({});
    axios.post.mockImplementation(() => {
      return Promise.resolve({
        data: "uuid",
      });
    });
    await store.dispatch(
      registerAction({
        name: "name",
        email: "email@email.com",
        password: "password",
      })
    );
    const actions = store.getActions();

    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "USER_REGISTER",
      payload: {
        id: "uuid",
        name: "name",
        email: "email@email.com",
        password: "password",
      },
    });
  });

  it("should dispatch reset register action", () => {
    const store = mockStore({});
    store.dispatch(resetRegisterPromiseAction());
    const actions = store.getActions();
    expect(actions.length).toEqual(1);

    expect(actions[0]).toEqual({ type: "RESET_REGISTER_PROMISE" });
  });

  it("should dispatch logout action", () => {
    window.localStorage.setItem("bookworld-token", "token");
    window.localStorage.setItem("bookworld-user", "user");
    const store = mockStore({});
    store.dispatch(logoutAction());
    const actions = store.getActions();
    expect(actions.length).toEqual(1);

    expect(actions[0]).toEqual({ type: "USER_LOGOUT" });
    expect(window.localStorage.getItem("bookworld-token")).toBeNull();
    expect(window.localStorage.getItem("bookworld-user")).toBeNull();
  });
});
