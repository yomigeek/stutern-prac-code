import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from "../actionTypes";
import {getAllStories} from "../api/data";

export const fetchAllData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_DATA_REQUEST,
    });
    const response = await getAllStories();
    console.log(response.data.data);
    if (response.status === 200) {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: {
          result: response.data.data,
        },
      });
    } else {
      dispatch({
        type: GET_DATA_FAILURE,
        payload: {
          error: "Failed to get data",
        },
      });
    }
  } catch (error) {
    dispatch({
      type: GET_DATA_FAILURE,
      payload: {
        error,
      },
    });
  }
};
