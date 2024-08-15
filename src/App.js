import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import SignUp from "./components/Register/SignUp";
import { AuthProvider, useAuth } from "./components/AuthContext";
import "./index.css";
import UserProfilePage from "./components/Leetcode/UserProfilePage";
import LeetCodeProfile from "./components/Leetcode/LeetcodeProfile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile/:username" element={<Home />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/leetcode" element={<UserProfilePage />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
