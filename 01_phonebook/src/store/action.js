import { ADD_CONTACT, DELETE_CONTACT, UPDATE_DATA } from "./constant";

export const addContact = () => {
  return {
    type: ADD_CONTACT,
  };
};

export const deleteContact = (payload) => {
  return {
    type: DELETE_CONTACT,
    payload: payload,
  };
};

export const updateData = (payload) => {
  return {
    type: UPDATE_DATA,
    payload: payload,
  };
};
