// import React from "react"
// import "../../Style.css/styling.css"
// const Project = ()=>{
//     return(
//         <div class="abi">
//             <h1>This page is Project ur Details</h1>
//         </div>
//     )
// }
// export default Project

//USE EFFECTES
import React from "react"
import "../../Style.css/styling.css"
import { useState } from "react"//hooks
import { useEffect } from "react"

const Project = ()=>{
    const[tabName,setTabName]=useState("Welcome to the Hospital")//HOOKS
    const updateTablet=()=>{
        setTabName("You are Completely cured,Thankyou for Choosing us,Take care for your Health")
    }
    const updateTablet1=()=>{
        setTabName("You can take a Tablet called DOLO,then you will be Okay:-)")
    }
//use effects
useEffect(()=>{
    console.log("sideeffects--> sleepy,tired")
},[tabName])

    return(
        <div class="project">
            <h1>{tabName}</h1>
            {/* //EVENT handling */}
            <button onDoubleClick={(updateTablet1)}>Update if you have cold</button>
            <button onDoubleClick={(updateTablet)}>Update if you cured</button>
           
        </div>
    )
}
export default Project