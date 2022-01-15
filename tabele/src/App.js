import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import GetUsers from "./components/GetUsers";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";



function App () {
  return (
  <div>
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<GetUsers />} />
        <Route path="/:id" element={<UserInfo />} /> 
      </Routes>
    </div>
  </div>)
}

export default App;
