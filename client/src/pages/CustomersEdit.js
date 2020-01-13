// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import CustomersActions from "../redux/actions/CustomersActions";

// END IMPORT ACTIONS

/** APIs

* actionsCustomers.create
*	@description CRUD ACTION create
*
* actionsCustomers.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsCustomers.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class CustomersEdit extends Component {
  // Init customers
  constructor(props) {
    super(props);
    this.state = {
      customers: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCustomers.loadCustomers(this.props.match.params.id);
    }
    
  }

  // Insert props customers in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      customers: props.customers
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.customers._id) {
      this.props.actionsCustomers.saveCustomers(this.state.customers).then(data => {
        this.props.history.push("/customerses/");
      });
    } else {
      this.props.actionsCustomers.createCustomers(this.state.customers).then(data => {
        this.props.history.push("/customerses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Customers Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="email"
            label="Email"
            value={this.state.customers.email || ""}
            onChange={Utils.handleChange.bind(this, "customers")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.customers.name || ""}
            onChange={Utils.handleChange.bind(this, "customers")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.customers.name && this.state.customers.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="phone"
            label="Phone"
            value={this.state.customers.phone || ""}
            onChange={Utils.handleChange.bind(this, "customers")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/customerses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsCustomers: bindActionCreators(CustomersActions, dispatch),
  };
};

// Validate types
CustomersEdit.propTypes = { 
  actionsCustomers: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    customers: state.CustomersEditReducer.customers
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomersEdit);
