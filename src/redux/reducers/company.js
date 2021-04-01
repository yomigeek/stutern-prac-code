const initialState = {
  loading: false,
  companies: [],
  
};

/**
 *user Reducer
 *
 * @export
 */
export default function (state = initialState, {type, payload}) {
  switch (type) {
    case "GET_COMPANY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_COMPANY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_COMPANY_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "ADD_COMPANY_FAILURE":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
