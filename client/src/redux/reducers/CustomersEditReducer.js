// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  customers: {}
};

// Reducer
export default function CustomersEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CUSTOMERS_SUCCESS:
      return { ...state, customers: action.payload };
    case types.GET_CUSTOMERS_SUCCESS:
      return { ...state, customers: action.payload };
    case types.UPDATE_CUSTOMERS_SUCCESS:
      return { ...state, customers: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}