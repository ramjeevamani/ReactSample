const initialState = {
    smartphones: [],
    error: null,
};

const smartphonesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SMARTPHONES_REQUEST':
            return { ...state, error: null };
        case 'FETCH_SMARTPHONES_SUCCESS':
            return { ...state, smartphones: action.payload.products };
        case 'FETCH_SMARTPHONES_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default smartphonesReducer;