import React from 'react'

export default function Counter() {
  let [count, setCount] = React.useState(0); 
  let [name, setName] = React.useState("Roger");

  return (
    <div>
        Counter : {count}
        <button onClick={ () => setCount(count+1)}>+</button>
        <button onClick={ () => setCount(count-1)}>-</button>
        <br/>    
    </div>
  )
}
