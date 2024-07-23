function CardUI(props){
    //console.log("Props received in CardUI:", props);
    return(
        <div className="card" style={{width:"20rem",margin:"12px"}}>
        
        <div className="card-body" >
        <img src='./profile.jpg'alt='button' width={100} style={{border:"10px",borderRadius:"50px",display:'block',margin:'0 auto'}}/>
        <br></br>
            <h6>{props.program}</h6>
            {props.col}
            <h6>{props.user}</h6>
            <button type="button" className="btn btn-outline-primary">Connect</button>
        </div>
        
        </div>
    );
}
export default CardUI