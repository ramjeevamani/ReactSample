import { INCREMENT, DECREMENT } from "../actionTypes/actionTypes";

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

export { increase, decrease };