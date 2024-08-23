import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GitHubProfile from "./components/Github/GitHubProfile";
import Home from "./components/Home";
import UserProfilePage from "./components/Leetcode/UserProfilePage";
import Login from "./components/login/Login";
import SignUp from "./components/Register/SignUp";
import "./index.css";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile/:username" element={<Home />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/leetcode" element={<UserProfilePage />} />
      <Route path="/github" element={<GitHubProfile />} />
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
