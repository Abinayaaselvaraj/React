import "../../Style.css/NavBar.css"
import { Link } from "react-router-dom"
const NavBar=()=>{
    return(
        // <nav>Home  Projects About Login
        // </nav>
        <ol style={{backgroundColor:" rgb(80, 134, 27);"}}>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to ="/Project">Project</Link></li>
            <li><Link to ="/Login">Login</Link></li>
        </ol>
        
    )

}
export default NavBar