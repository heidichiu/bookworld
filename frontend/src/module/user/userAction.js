import { login, registerApi } from "./userService";

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_PENDING" });
    // post request to api and get the token
    const response = await login(email, password);
    // save jwt token inside local storage
    window.localStorage.setItem("bookworld-token", response.data.token);
    // dispatch action
    dispatch({
      type: "USER_LOGIN",
      payload: response.data,
    });
    dispatch({ type: "USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_ERROR" });
  }
};

export const registerAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });

    const response = await registerApi(user);

    dispatch({
      type: "USER_REGISTER",
      payload: {
        id: response.data,
        ...user,
      },
    });

    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_ERROR" });
  }
};

export const resetRegisterPromiseAction = () => (dispatch) => {
  dispatch({ type: "RESET_REGISTER_PROMISE" });
};
