import { connect } from "react-redux";

// props coming from connect
function App(props) {
    function handleSubmit(formData) {
      let contact = {
        name: formData.get("name"),
        email: formData.get("email")
      }
      props.addContact(contact);
    }
    return (<div>
      <h1>
        Welcome {props.display}
      </h1>
      <form action={handleSubmit}>
        Name <input type="text" name="name" /> <br />
        Email <input type="email" name="email" /> <br />
        <button type="submit">Add Contact</button>
      </form>
      {
          props.contactList.map(contact => <div key={contact.email}>
              {contact.name}, {contact.email} &nbsp;
              <button type="button" onClick={() => props.removeContact(contact.email)}>Delete</button>
          </div>)
        }
    </div>)
}

function mapStateToProps(state) {
  return {
    display:  state.profile.name,
    contactList:  state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: contact => dispatch({type:'ADD_CONTACT', payload: contact}),
    removeContact: email => dispatch({type: 'REMOVE_CONTACT', payload: email})
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

