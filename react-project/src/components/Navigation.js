import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   margin: "30px 0",
      // }}
      >
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/discography">DISCOGRAPHY</Link>
        </li>
        <li>
          <Link to="/board">BOARD</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
