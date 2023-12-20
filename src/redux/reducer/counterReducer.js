import { INCREMENT, DECREMENT, DELETE, ADD, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  counter: 0,
  numbers: [],
  postdata : []
  // postdata: [{
  //   id: '',
  //   name: '',
  //   description: '',
  // }],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };

    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    case ADD:
      const arr = state.numbers
      if (arr.length > 0) {
        arr.push(arr[arr.length - 1] + 1)
      } else {
        arr.push(1)
      }

      return {
        ...state,
        numbers: [...arr]
      };
    case DELETE:
      const arr2 = state.numbers
      arr2.pop()
      return {
        ...state,
        numbers: [...arr2]
      };

      case ADD_ITEM:
        // const submittedText = `${state.postdata} `;
        //   return {
        //     ...state,
        //     submittedText,
        //   };

          //  const addData = state.postdata
            // if (addData.length > 0) {
            //     addData.push(addData[addData.length - 1] + 1)
            // } else {
            //    addData.push(1)
            // }
            return {
                ...state,
                postdata: [...state.postdata, action.payload],
            };
            

        case UPDATE_ITEM:
            return {
                ...state,
                postdata: state.postdata.map((item) =>
                    item === action.payload ? action.payload : item
                ),
            };

        case DELETE_ITEM:

            const deletedata = state.numbers
            deletedata.pop()
            return {
                ...state,
                postdata: [...deletedata]
            };

    default:
      return state;
  }
};

export default counterReducer;

