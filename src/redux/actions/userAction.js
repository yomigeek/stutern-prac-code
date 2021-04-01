import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../actionTypes";
import {loginApi} from "../api/users";

export const loginData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    const response = await loginApi(data);
    console.log(response, "res");
    if (response.status === 200) {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          result: response.data,
        },
      });
      localStorage.setItem("x-access-token", response.data.token);
      const userInfo = JSON.stringify({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });
      localStorage.setItem("userInfo", userInfo);
    } else {
      console.log("err2");
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: {
          error: "Failed to get data",
        },
      });
    }
  } catch (error) {
    const status = error.response.status;
    console.log(error.response.status, "err1");
    if (status === 404) {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: {
          error: "Username or Password is incorrect!",
        },
      });
    } else {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: {
          error: "Something went wrong! Try again",
        },
      });
    }
  }
};
