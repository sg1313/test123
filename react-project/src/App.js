import React from "react";
import Navigation from "./components/Navigation";
import Router from "./components/Router";
import "./style/common.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      리액트로 만든 App.js 페이지 입니다 ~~ cd react-project 해야지 이
      페이지가뜸
      <Router />
    </div>
  );
}

export default App;
