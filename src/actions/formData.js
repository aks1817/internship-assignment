import { ADD_DATA, REMOVE_DATA, SORT_DATA } from "./types";
import { v4 as uuid } from "uuid";

const addData = (data) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: ADD_DATA,
    payload: { data, id },
  });
};

const removeData = (id) => (dispatch) => {
  dispatch({ type: REMOVE_DATA, payload: id });
};

const sortData = (sortFunc) => (dispatch) => {
  dispatch({ type: SORT_DATA, payload: sortFunc });
};

export { addData, removeData, sortData };
