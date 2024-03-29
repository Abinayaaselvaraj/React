// //usereducer example
// import "../../Style.css/styling.css"
// const Loginn =()=>{
//     return(
//     <div class="ahk">
//         <h1>this is usereducer example</h1>
//         <button>Subtract</button>
//         <button>Add</button>
//         <button>Reset</button>
//     </div>
//     )
// }
// export default Loginn

import { useReducer } from "react"
const value = { count: 0 }
function countFunction(state, action) {
    switch (action.type) {
        case 'sub': {
            return { count: state.count - 1 }
        }
        case 'add': {
            return { count: state.count + 1 }
        }
        case 'reset': {
            return { count: value.count }
        }
        default: {
            return { count: value.count }
        }

    }

}
const Login = () => {
    const [countVal, updateCount] = useReducer(countFunction, value)
    return (<div class="loginn">
        <h1>
            This is useReducer example
        </h1>
        <h2>Count:{countVal.count} </h2>
        <button onClick={() => updateCount({ type: "sub" })}>Subtract</button>
        <button onClick={() => updateCount({ type: "add" })}>Add</button>
        <button onClick={() => updateCount({ type: "reset" })}>Reset</button>
    </div>);
};


export default Login
