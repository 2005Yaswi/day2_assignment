import React from "react";

class Eight extends React.Component{
    name="ReactJS"
    count=0
    constructor(){
        super();
        this.state={number:1};
        console.log("Constructor is called!")
    }
    
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number);
    }

    componentWillUnmount(){
        console.log("Will be Unmounted");
    }

    funcEightBtnClick = () => {
        console.log("Button clicked!");
        console.log(this.count+1);
        this.setState({number:this.state.number+1});

    }
render(){
    return(
        <div>
            <h1>
                This is a Component {this.name} {this.count} {this.state.number}
            </h1>
            <button className="btn btn-primary" onClick={this.funcEightBtnClick}>Click here</button>
        </div>
    );
}
}
export default Eight;