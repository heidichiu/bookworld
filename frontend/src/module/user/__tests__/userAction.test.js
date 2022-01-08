import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import axios from "axios";
import { loginAction, registerAction } from "../userAction";

jest.mock("axios");
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("login action", () => {
  beforeEach(() => {
    axios.post.mockImplementation(() => {
      return Promise.resolve({
        data: {
          token: "mock jwt token",
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
      },
    });
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
});
