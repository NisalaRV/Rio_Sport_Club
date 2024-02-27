import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./Pages/Home/Home";
import {About} from "./Pages/About/About";
import {Program} from "./Pages/Program/Program";
import Plans from "./Pages/Plans/Plans";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (

      <BrowserRouter>
          <Routes>
              <Route
                  path="/"
                  element={

                      <main>

                          <div id="home">
                              <Home />
                          </div>

                          <div id="about">
                              <About />
                          </div>
                          <div id="program">
                              <Program />
                          </div>

                          <div id="plan">
                              <Plans />

                          </div>

                      </main>

                  }

              />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/program" element={<Program/>} />
              <Route path="/plan" element={<Plans/>} />
          </Routes>
          <Navbar/>
          <Footer/>
      </BrowserRouter>


)

}

export default App;
