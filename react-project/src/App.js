import React from "react";
import Navigation from "./components/Navigation";
import Router from "./components/Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/common.css";

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
