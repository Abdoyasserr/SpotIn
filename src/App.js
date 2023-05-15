import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Login from "./Pages/Login"
import Home from './Pages/Home';
import Addemp from './Pages/Addemp';
import Branches from './Pages/Branches';
import { UnknownURL } from './Pages/UnknownURL';
import RequireAuth from './Pages/RequireAuth';
import Reports from './Pages/Reports';


function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }, [])
  return (

    <div className='load'>
      {
        loading ?
          <div>
            <div class="loader_logo"></div>
            <div class="loader">
              <div class="loader-text">Loading...</div>
              <div class="loader-bar"></div>
            </div>
          </div>
          :

          <BrowserRouter>
            <Routes>

              {/* Public Route  */}
              <Route path="/" element={<Login />} />

              {/* Protected Route */}
              <Route path='/Home' element={<RequireAuth><Home /></RequireAuth>} />

              <Route path='/Addemp' element={<RequireAuth><Addemp /></RequireAuth>} />
              <Route path='/Branches' element={<RequireAuth><Branches /></RequireAuth>} />
              <Route path='/Reports' element={<RequireAuth><Reports/></RequireAuth>} />

              {/* Other */}
              <Route path='*' element={<UnknownURL />} />

            </Routes>
          </BrowserRouter >
      }
    </div>

  );
}

export default App;