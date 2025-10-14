import { connect } from "react-redux";

// props coming from connect
function App(props) {
    return (<div>
      <h1>
        Welcome {props.display}
      </h1>
      {
          props.contactList.map(contact => <div key={contact.email}>
              {contact.name}, {contact.email} &nbsp;
              <button type="button">Delete</button>
          </div>)
        }
    </div>)
}

function mapStateToProps(state) {
  return {
    display: state => state.profile.name,
    contactList: state => state.contacts
  }
}

function mapDispatchToProps(dispatch) {

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
