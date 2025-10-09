import React, { Component } from 'react'

export default class CustomerRow extends Component {
  render() {
    let {id, firstName, lastName} = this.props.customer; // destructuring
    return (
      <div>
        {firstName} {lastName} &nbsp;
        <button>Delete</button>
      </div>
    )
  }
}
