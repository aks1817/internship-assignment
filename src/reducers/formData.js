import { ADD_DATA, REMOVE_DATA, SORT_DATA } from "../actions/types";
const initialState = [];

const formData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATA:
      return [...state, payload];
    case REMOVE_DATA:
      return state.filter((task) => task.id !== payload);
    case SORT_DATA:
      return state.sort(payload);
    default:
      return state;
  }
};
export default formData;
