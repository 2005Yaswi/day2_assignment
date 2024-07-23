function One(){
    const names=['name1','name2','name3','name4','name5','name6']
    //const width=300;
    return (
        <div>
            
            {names.map((name,index)=>
            <div key='index'>
                <img src="./profile.jpg" alt="describe" width={300}
                style={{border:"10px",borderRadius:"50px"}}/><h2>{name}</h2>
            </div>
                )}
        </div>
    );
}
export default One;