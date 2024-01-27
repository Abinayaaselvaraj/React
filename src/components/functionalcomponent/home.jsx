import React from "react"
import "../../Style.css/styling.css"
import "../../Style.css/login.css"
const Home = ()=>{
    return(
        <body>
         <div >
            <br></br>
            <h1>You can login through this page</h1><br></br><br></br><br></br><br></br>
            <div class="login-box">  
            <form >
            <label >Enter Name: </label>
            <input type="text"></input><br></br><br></br>
            <label >Email: </label>
            <input type="text"></input><br></br><br></br>
            <button>Login</button>
            </form>
            </div>
        </div>
        </body>
    )
}
export default Home