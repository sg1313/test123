import React from "react";
// import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import "../style/navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <Nav className="justify-content-center" as="ul">
      {/* <ul
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0",
        }}
      > */}
        <Nav.Item as="li">
          <Nav.Link href="/">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/discography">DISCOGRAPHY</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/board">BOARD</Nav.Link>
        </Nav.Item>
      {/* </ul> */}
      </Nav>
    </div>
  );
};

export default Navigation;
