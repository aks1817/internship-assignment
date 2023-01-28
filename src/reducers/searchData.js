import { SEARCH_DATA } from "../actions/types";

const initialState = [];

const searchData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_DATA:
      const { data, query } = payload;
      const newData = data.filter((item) => item.data.firstName === query);
      return newData.length > 0 ? newData : [];
    default:
      return state;
  }
};
export default searchData;
