import { SEARCH_DATA } from "./types";
import store from "../store";

const searchData = (query) => (dispatch) => {
  const data = store.getState().formData;
  dispatch({ type: SEARCH_DATA, payload: { query, data } });
};

export default searchData;
