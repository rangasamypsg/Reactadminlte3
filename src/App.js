import React, {  } from "react";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";
 import Menu from "./Components/Menu";


function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
