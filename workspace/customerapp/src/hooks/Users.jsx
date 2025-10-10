import React from 'react'
import { useEffect } from 'react';

export default function Users({setUid}) {
  let [users, setUsers] = React.useState(); // initial value

  // componentDidMount = []
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.json())
    .then( data => setUsers(data))
  }, []);

  return (
    <div>
        <h1>Users List</h1>
        {
            users && (users.map( user => <div key={user.id} onMouseEnter={ () => setUid(user.id)}>
                {user.id} --- {user.name} --- {user.email}
            </div>) )
        }
    </div>
  )
}
