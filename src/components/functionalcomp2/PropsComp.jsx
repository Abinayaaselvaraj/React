import React from "react";
function PropsComp(props){
    const styleattrs={
        backgroundColor:"Aqua",color:"green"
    }
    return(
        <div style={styleattrs}>
            <h3>Hello,{props.name}<br></br> This is again {props.course} class<br></br></h3>                                                                                                               
        </div>
    )

}
export default PropsComp;