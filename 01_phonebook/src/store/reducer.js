import { ADD_CONTACT, DELETE_CONTACT, UPDATE_DATA } from "./constant";
import { v4 as uuidv4 } from "uuid";

export const initState = {
  name: "",
  phone: "",
  searchText: "",
  list: [
    { name: "Nguyen Van A", phone: "0889998989", id: uuidv4() },
    { name: "Nguyen Thi B", phone: "0998888888", id: uuidv4() },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        list: [
          ...state.list,
          { name: state.name, phone: state.phone, id: uuidv4() },
        ],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case UPDATE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw Error("Invalid action");
  }
};

export default reducer;
