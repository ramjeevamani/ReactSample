import axios from 'axios';

const fetchSmartphonesRequest = () => ({
  type: 'FETCH_SMARTPHONES_REQUEST',
});

const fetchSmartphonesSuccess = (smartphones) => ({
  type: 'FETCH_SMARTPHONES_SUCCESS',
  payload: smartphones,
});

const fetchSmartphonesFailure = (error) => ({
  type: 'FETCH_SMARTPHONES_FAILURE',
  payload: error,
});

export const fetchSmartphones = () => {
  return async (dispatch) => {
    dispatch(fetchSmartphonesRequest());
    try {
      const response = await axios.get('https://dummyjson.com/products/category/smartphones');
      dispatch(fetchSmartphonesSuccess(response.data));
    } catch (error) {
      dispatch(fetchSmartphonesFailure(error.message));
    }
  };
};