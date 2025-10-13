import React from 'react'

 function NameComponent({name, updateName}) {
    console.log("NameComponent Rendered");
  return (
    <div>In NameComponent: {name}
    <button onClick={updateName}>Change Name</button>
    </div>
  )
}

export default React.memo(NameComponent);