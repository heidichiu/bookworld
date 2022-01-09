import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import axios from "axios";

import { getBookAction, getBooksAction, getBooksByTitleAction } from "../bookAction";

jest.mock("axios");
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("Book", () => {
  const mockAxiosGetBookList = () =>
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: "1",
            title: "test title",
            description: "test description",
            releaseYear: 2021,
          },
        ],
      })
    );

  it("should able to dispatch success getbooks action", async () => {
    const store = mockStore({});
    mockAxiosGetBookList();
    await store.dispatch(getBooksAction());
    const actions = store.getActions();
    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "BOOKLIST",
      payload: [
        {
          id: "1",
          title: "test title",
          description: "test description",
          releaseYear: 2021,
        },
      ],
    });
  });

  it("should able to dispatch getbookbytitle action", async () => {
    const store = mockStore({});
    mockAxiosGetBookList();
    await store.dispatch(getBooksByTitleAction("test title"));
    const actions = store.getActions();

    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "BOOKS_BY_TITLE",
      payload: [
        {
          id: "1",
          title: "test title",
          description: "test description",
          releaseYear: 2021,
        },
      ],
    });
  });

  it("should able to dispatch getBook action", async () => {
    const store = mockStore({});

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          id: "1",
          title: "test title",
          description: "test description",
          releaseYear: 2021,
        },
      })
    );

    await store.dispatch(getBookAction("bookId"));
    const actions = store.getActions();

    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "GET_BOOK",
      payload: {
        id: "1",
        title: "test title",
        description: "test description",
        releaseYear: 2021,
      },
    });
  });

  const axiosErrorMock = () => {
    throw new Error();
  };

  it("should able to dispatch getBooksByTitle error action", async () => {
    const store = mockStore({});

    axios.get.mockImplementation(axiosErrorMock);
    await store.dispatch(getBooksByTitleAction("test title"));

    const actions = store.getActions();
    expect(actions.length).toEqual(2); // number of actions dispatch in getBooksByTitleAction
    expect(actions[1]).toEqual({
      type: "BOOKLIST_ERROR",
    });
  });

  it("should able to dispatch getBooks error action", async () => {
    const store = mockStore({});

    axios.get.mockImplementation(axiosErrorMock);
    await store.dispatch(getBooksAction("test title"));

    const actions = store.getActions();
    expect(actions.length).toEqual(2);
    expect(actions[1]).toEqual({
      type: "BOOKLIST_ERROR",
    });
  });
});
