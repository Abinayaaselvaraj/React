//EVENT HANDLING
//STATE
import React from "react";
import "../../Style.css/styling.css"
class StateComponent extends React.Component{
constructor(){ //kind of function 
    super()
        this.state ={
            name:"Abinaya",
            course: "MERN"

        }
}
ChangeState =()=>{ //should use arrow function only
    console.log("Kongu Engineering College")
}
render(){
    return(
        
        <div >
            {/* EVENT HANDLING LINE 1 */}
            <button onClick={this.ChangeState}>Click me to change state</button>
            <h2>Hello, {this.state.name}<br></br>This is {this.state.course} class </h2>
            <h2>I am changing the state of {this.state.name} to {this.ChangeState()}</h2>
           
        </div> 
    )
    }
}
export default StateComponent