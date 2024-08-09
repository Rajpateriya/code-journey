import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserProfilePage from "./components/Leetcode/UserProfilePage";
import './index.css';
import UserProfilegfg from "./components/gfg/UserProfilegfg";
import CodeChefProfile from "./components/codechef/CodeChefProfile";
import SignUp from "./components/Register/SignUp";
import Login from "./components/login/Login";





function App() {



  return (
    
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/gfg' element={<UserProfilegfg/>}></Route>
            <Route path='/codechef' element={<CodeChefProfile/>}></Route>
           
            
             <Route path='/leetcode' element={<UserProfilePage/>}></Route>
            
            
            
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
