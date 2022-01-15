import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import GetUsers from "./components/GetUsers";
import Login from "./components/Login";



function App () {
  return (
  <div>
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<GetUsers />} />
      </Routes>
    </div>
  </div>)
}

export default App;
