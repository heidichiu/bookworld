import { login } from "./userService";

export const loginAction = (email, password) => async (dispatch) => {
  // post request to api and get the token
  const response = await login(email, password);
  // save jwt token inside local storage
  window.localStorage.setItem("bookworld-token", response.data.token);
  // dispatch action
  dispatch({
    type: "USER_LOGIN",
    payload: response.data,
  });
};
