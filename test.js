// Sort action
const sortData = (field, order) => {
  return {
    type: "SORT_DATA",
    field,
    order,
  };
};

// Reducer
const initialState = {
  data: [],
  sortField: "name",
  sortOrder: "asc",
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "SORT_DATA":
      return {
        ...state,
        sortField: action.field,
        sortOrder: action.order,
        data: state.data.sort((a, b) => {
          if (action.order === "asc") {
            return a[action.field] > b[action.field] ? 1 : -1;
          } else {
            return a[action.field] < b[action.field] ? 1 : -1;
          }
        }),
      };
    default:
      return state;
  }
}
