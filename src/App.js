import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="header-line"><hr/></div>
      <Section />
      <div className="footer-line"><hr/></div>
      <Footer/>
    </div>
  );
}

export default App;
