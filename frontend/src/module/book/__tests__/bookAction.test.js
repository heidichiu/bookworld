import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import axios from "axios";
import { jsxEmptyExpression } from "@babel/types";

import getBooksAction from "../bookAction";

jest.mock("axios");
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("Book", () => {
  it("should able to dispatch success action", async () => {
    const store = mockStore({});

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            title: "test title",
            description: "test description",
            releaseYear: 2021,
          },
        ],
      })
    );

    await store.dispatch(getBooksAction());
    const actions = store.getActions();
    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "BOOKLIST",
      payload: [
        {
          id: 1,
          title: "test title",
          description: "test description",
          releaseYear: 2021,
        },
      ],
    });
  });
});
