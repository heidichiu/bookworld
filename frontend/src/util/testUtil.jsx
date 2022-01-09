import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import reduxThunk from "redux-thunk";
import reducers from "../module/reducers";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const renderWithRedux = (ui, { initialState, store = createStoreWithMiddleware(reducers, initialState) }) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>{ui}</SnackbarProvider>
      </BrowserRouter>
    </Provider>
  ),
});

export default renderWithRedux;
