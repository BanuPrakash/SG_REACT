import React from 'react'

 function AgeComponent({age, updateAge}) {
    console.log("AgeComponent Rendered");
  return (
    <div>In AgeComponent: {age}
    <button onClick={updateAge}>Increase Age</button>
    </div>
  )
}

export default React.memo(AgeComponent);