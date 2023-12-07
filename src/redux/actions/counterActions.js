import { INCREMENT, DECREMENT, ADD, DELETE, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const increase = () => {
  return {
    type: INCREMENT,
  };
};

const decrease = () => {
  return {
    type: DECREMENT,
  };
};

const add = () => {
  return {
    type: ADD,
  };
};

const deleted = () => {
  return {
    type: DELETE,
  };
};

const addItem = () => ({
  type: ADD_ITEM
});

const updateItem = () => ({
  type: UPDATE_ITEM
});

const deleteItem = () => ({
  type: DELETE_ITEM
});
export { increase, decrease, add, deleted, addItem, updateItem, deleteItem };