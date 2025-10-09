import React, { Component } from 'react'
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
  name = "Roger"; // state not considered for reconciliation
  age = 30; // state not considered for reconciliation

  state = {
    customers: [
        {"id":1, "firstName": "Chandler", "lastName": "Bing"},
        {"id":2, "firstName": "Rache", "lastName": "Green"},
        {"id":3, "firstName": "Moinca", "lastName": "Geller"},
        {"id":4, "firstName": "Phobhe", "lastName": "Buffay"},
        {"id":5, "firstName": "Ross", "lastName": "Geller"},
        {"id":6, "firstName": "Joey", "lastName": "Tribuanni"},
    ]
  }

  // return JSX
  render() {
    
    return (
      <div>
        Name: {this.name} <br />
        {
            this.state.customers.map(cust => <CustomerRow customer={cust}/>)
        }
      </div>
    )
  }
}
