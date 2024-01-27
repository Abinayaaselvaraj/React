
//import logo from './logo.svg';

import './App.css';
//import PropsComp from './components/functionalcomp2/PropsComp';
//import StateComponent from './components/functionalcomp2/StateComp';
import NavBar from './components/functionalcomponent/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/functionalcomponent/home';
import About from './components/functionalcomponent/about';
import Project from './components/functionalcomponent/Projects';
import Login from './components/functionalcomponent/loginn';
import Footer from './components/functionalcomponent/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />} ></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <footer/>                             
      {/* <PropsComp name= "Abinaya" course="MERN"/> */}
      {/* <header className="App-header">
      
       <img src={logo} className="App-logo" alt="logo" />
        
       <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
         {/* <StateComponent></StateComponent> */}
      {/* </header> */}
      <Footer></Footer>
    </div>

  );

}


export default App;
