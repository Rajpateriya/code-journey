import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserProfilePage from "./components/Leetcode/UserProfilePage";
import './index.css';
import UserProfilegfg from "./components/gfg/UserProfilegfg";





function App() {



  return (
    
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/gfg' element={<UserProfilegfg/>}></Route>
           
            
             <Route path='/leetcode' element={<UserProfilePage/>}></Route>
            
            
            
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
