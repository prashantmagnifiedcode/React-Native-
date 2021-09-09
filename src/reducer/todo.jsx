const initialdata = {
  list: [],
};
const TodoReducer = (state = initialdata, action) => {
  switch (action.type) {
    case "add_todo":
      const { id, data } = action.payload;
      if (data.length > 2) {
        return {
          ...state,

          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }

    case "delete_todo":
      const newlist = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,

        list: newlist,
      };
    case "remove_todo":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default TodoReducer;
