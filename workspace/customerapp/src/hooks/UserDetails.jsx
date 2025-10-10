import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function UserDetails({uid}) {

  let [user,setUser] = useState();

  // componentDidUpdate
  useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
    .then( res => res.json())
    .then( data => setUser(data))
  }, [uid]);

  return (
    <div>
        <h1>User Details</h1>
        {
            user && <div>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>City: {user.address.city}</p>
                <p>Company: {user.company.name}</p>
            </div>
        }
</div>
  )
}
