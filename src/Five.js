function F5(){
    const review_name=["yash","harshi","ram","sita","krishna"];
    const describe=["Good","Bad","Awesome","Average","Quality is not good"];
    return (<div className="card">
        
        <h3>Reviews</h3>
        
        {review_name.map((name, index) => (
          <div key={index} className="card-body">
            {name}<br></br>{describe[index]}
            <br></br>
          </div>
        ))}
      
    </div>);
}
export default F5;