import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: [],
};

/**
 * Reducer
 *
 * @export
 */
export default function (state = initialState, {type, payload }) {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.result
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
