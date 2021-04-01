import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: [],
  loginSuccess: false,
  loginError: false,
  errorMessage: ''
};

/**
 * Reducer
 *
 * @export
 */
 const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        loginError: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loginSuccess: true,
        loginError: false,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        loginSuccess: false,
        loginError: true,
        errorMessage: payload.error
      };

    default:
      return state;
  }
}

export default userReducer;
