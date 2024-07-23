import { useEffect, useState } from "react";

function Three(){
    //const count=0;
    const [count,setCount]=useState(1);
    //const [showControls, setShowControls] = useState(false);
    useEffect(()=>{
        setCount(0);
        console.log("Use effect is called");},[]);
        const btu=()=>{
            if(count>=0){
            setCount(count+1);
        }
            
        }
        const btu1=()=>{
            if(count>0){
            setCount(count-1);
            }
        }
        const addToCart=()=>{
            setCount(1);
        }
        
    return(
        <div>
            {
                (count===0) ?
                <button className="btn btn-success"onClick={addToCart}>AddToCart</button>
                :
                <div style={{display:'flex'}}>
                    <button className="btn btn-light"onClick={btu1}>-</button>
                    {count}
                    <button className="btn btn-light"onClick={btu}>+</button>
                </div>
            }</div>

      
    
    );
}
export default Three;