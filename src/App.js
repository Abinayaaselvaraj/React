
import logo from './logo.svg';
import './App.css';

import Testcomp from './components/functionalcomponent/testfunction';
import ClassComp from './components/classcomponents/testclass';
import ClassEx from './components/classcomponents/testclass1';
function App() {
  return (
    <div className="App">
      < ClassEx></ClassEx>
      <Testcomp></Testcomp>
      <header className="App-header">
      <Testcomp></Testcomp>
      <ClassComp></ClassComp>
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
      </header>
    </div>
  );
}

export default App;
