import { useState } from "react";
//import Four from "./Four";
import Log from "./Login";
import Register from "./Register";
function First(){
    const [active,setActive]=useState('Login');
    const Content =()=>{
        if(active==='Login'){
            return <Log/>
        }
        else if(active==='Register'){
            return <Register/>
        }
    }
    return(
        <div className="card">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <button className="nav-link active" onClick={()=>setActive("Login")}>Login</button>
      </li>
      <li className="nav-item">
        <button className="nav-link active" onClick={()=>setActive("Register")}>Register</button>
      </li>
      
    </ul>
    
    {Content()}
  </div>
  {
    
  }
</div>
    );
}
export default First;