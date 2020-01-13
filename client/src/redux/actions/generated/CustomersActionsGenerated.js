/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN CustomersActionsGenerated.js PLEASE EDIT ../CustomersActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import CustomersApi from "../../../api/CustomersApi";

let actionsFunction = {

  //CRUD METHODS

  // Create customers
  createCustomers: function(customers) {
    return function(dispatch) {
      return CustomersApi
        .createCustomers(customers)
        .then(customers => {
          dispatch(actionsFunction.createCustomersSuccess(customers));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createCustomersSuccess: function(customers) {
    return { type: types.CREATE_CUSTOMERS_SUCCESS, payload: customers };
  },


  // Delete customers
  deleteCustomers: function(id) {
    return function(dispatch) {
      return CustomersApi
        .deleteCustomers(id)
        .then(customers => {
          dispatch(actionsFunction.deleteCustomersSuccess(customers));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteCustomersSuccess: function(customers) {
    return { type: types.DELETE_CUSTOMERS_SUCCESS, payload: customers };
  },


  // Get customers
  loadCustomers: function(id) {
    return function(dispatch) {
      return CustomersApi
        .getOneCustomers(id)
        .then(customers => {
          dispatch(actionsFunction.loadCustomersSuccess(customers));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCustomersSuccess: function(customers) {
    return { type: types.GET_CUSTOMERS_SUCCESS, payload: customers };
  },

  // Load  list
  loadCustomersList: function() {
    return function(dispatch) {
      return CustomersApi
        .getCustomersList()
        .then(list => {
          dispatch(actionsFunction.loadCustomersListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCustomersListSuccess: function(list) {
    return { type: types.LIST_CUSTOMERS_SUCCESS, payload: list };
  },

	
  // Save customers
  saveCustomers: function(customers) {
    return function(dispatch) {
      return CustomersApi
        .saveCustomers(customers)
        .then(customers => {
          dispatch(actionsFunction.saveCustomersSuccess(customers));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveCustomersSuccess: function(customers) {
    return { type: types.UPDATE_CUSTOMERS_SUCCESS, payload: customers };
  },


};

export default actionsFunction;
