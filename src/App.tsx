import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Program} from "./components/Program/Program";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
       <About/>
        <Program/>

    </div>
  );
}

export default App;
