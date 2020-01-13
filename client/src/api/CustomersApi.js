import CustomersApiGenerated from "./generated/CustomersApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CustomersApi extends CustomersApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Customers List
  static getCustomersList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/customerss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CustomersApi;