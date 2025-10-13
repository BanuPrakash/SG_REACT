import React from 'react'
import { faker } from '@faker-js/faker';
import NameComponent from './NameComponent';
import AgeComponent from './AgeComponent';
import { useCallback } from 'react';

// export default function ParentComponent() {
//   console.log ("ParentComponent Rendered");
//   let [name, setName] = React.useState("Roger");
//   let [age, setAge] = React.useState(24);

//   function updateName(newName) {
//     setName(faker.person.firstName());
//   }
  
//   function updateAge() {
//     setAge(age + 1);
//   }

//   return (
//     <div>
//     <h1>ParentComponent</h1>
//     <button onClick={updateName}>Change Name</button>
//     <button onClick={updateAge}>Increase Age</button>
//     <NameComponent name={name} /> 
//     <AgeComponent age={age} />
//     </div>
//   )
// }




export default function ParentComponent() {
  console.log ("ParentComponent Rendered");
  let [name, setName] = React.useState("Roger");
  let [age, setAge] = React.useState(24);

  const updateName = useCallback(() => {
    setName(faker.person.firstName());
  }, [name] );
  
  const updateAge = useCallback(() => {
    setAge(age + 1);
  },[age] );

  return (
    <div>
    <h1>ParentComponent</h1>
    <NameComponent name={name} updateName={updateName}/> 
    <AgeComponent age={age} updateAge={updateAge}/>
    </div>
  )
}

