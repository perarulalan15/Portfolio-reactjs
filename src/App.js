import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
