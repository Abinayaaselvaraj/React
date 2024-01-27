
//use STATE
import React from "react"
import "../../Style.css/styling.css"
import { useState } from "react"//hooks

const About = ()=>{
    const[college,updateCollege]=useState("KEC")//HOOKS
    const updatingClg=()=>{
        updateCollege("Kongu Enginneering College")
    }
    return(
        <div class="project">
            <h1>Welcome to {college}</h1>
            {/* //EVENT handling */}
            <button onDoubleClick={(updatingClg)}>Update College Name</button>
        </div>
    )
}
export default About