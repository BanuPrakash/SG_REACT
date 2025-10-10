import React, { Component } from 'react'
import CustomerRow from './CustomerRow';
import Filter from './Filter';

export default class CustomerList extends Component {
  name = "Roger"; // state not considered for reconciliation
  age = 30; // state not considered for reconciliation

  state = {
    customers: [
        {"id":1, "firstName": "Chandler", "lastName": "Bing"},
        {"id":2, "firstName": "Rachel", "lastName": "Green"},
        {"id":3, "firstName": "Monica", "lastName": "Geller"},
        {"id":4, "firstName": "Phobhe", "lastName": "Buffay"},
        {"id":5, "firstName": "Ross", "lastName": "Geller"},
        {"id":6, "firstName": "Joey", "lastName": "Tribuanni"},
    ]
  }

  // get called once after render method
  componentDidMount() {
    this.setState({
        original: this.state.customers
    });
  }

  deleteCustomer(id) {
    let custs = this.state.customers.filter(c => c.id !== id);
    //this.state.customers = custs; // wrong way to update state
    this.setState({
        customers: custs,
        orignal: custs
    });
  }

  filterCustomers(txt) {
    let custs = this.state.original.filter(c => (c.firstName.toUpperCase().indexOf(txt.toUpperCase()) >= 0)
      || (c.lastName.toUpperCase().indexOf(txt.toUpperCase()) >= 0) );
    
      this.setState({
        customers: custs
    });
  }


  // return JSX
  render() {
    
    return (
      <div>
        Name: {this.name} <br />
        <Filter filterData={(txt) => this.filterCustomers(txt)}/>
        {
            this.state.customers.map(cust => <CustomerRow 
                key = {cust.id}
                customer={cust}
                delEvt={(id) => this.deleteCustomer(id)}
                />)
        }
      </div>
    )
  }
}
