import { combineReducers } from "redux";

// START IMPORT REDUCERS
import CustomersEditReducer from "./CustomersEditReducer";
import CustomersListReducer from "./CustomersListReducer";
import HomeReducer from "./HomeReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	CustomersEditReducer,
	CustomersListReducer,
	HomeReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
