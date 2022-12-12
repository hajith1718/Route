import React,{ Components } from "react";

export default class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comments:0,
        }
    }
    handleClick=()=>{
        this.setState({
            likes:this.state.likes+1
        })
    }
    render(){
        return(
            <div>
                {this.state.comments}<or/>
                <button onClick={this/this.handleClick}>Add Comment</button>
            </div>
        )
    }
}