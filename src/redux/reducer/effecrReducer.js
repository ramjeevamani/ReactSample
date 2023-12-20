const initialState = {
    data: null,
  };
  
  const effectReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EFFECT_DATA':
        return {
          ...state,
          data: action.payload.products,
        };
      default:
        return state;
    }
  };
  
  export default effectReducer;