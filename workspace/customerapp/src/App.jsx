import { useState } from "react"
import CustomerList from "./components/CustomerList"
import UserDetails from "./hooks/UserDetails"
import Users from "./hooks/Users"

// functional component retuns JSX
function App() {
  let [uid, setUid] = useState(1);
 return (
   <div>
     {/* <h1>Customer Application</h1>
     <CustomerList /> */}
     <div className="row">
      <div className="col-sm-12 col-md-6 ">
          <Users setUid={setUid}/>
      </div>
      <div  className="col-sm-12 col-md-6">
        <UserDetails uid={uid}/>
      </div>
     </div>
  
   </div>
  )
}

export default App
