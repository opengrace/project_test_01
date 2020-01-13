import CustomersModelGenerated from "./generated/CustomersModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CustomersModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CustomersModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CustomersModelGenerated,
  ...customModel
};
