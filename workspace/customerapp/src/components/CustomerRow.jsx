import React, { Component } from 'react'

export default class CustomerRow extends Component {
  deleteRow(id) {
    console.log("Delete customer with id: " + id);
    this.props.delEvt(id);  
  }

  render() {
    let {id, firstName, lastName} = this.props.customer; // destructuring
    return (
      <div>
        {firstName} {lastName} &nbsp;
        <button onClick={() => this.deleteRow(id)}>Delete</button>
      </div>
    )
  }
}
