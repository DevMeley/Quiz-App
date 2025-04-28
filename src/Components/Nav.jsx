import React from "react";
import "../Components/CSS/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="hero">
        <div className="logo">
          <span className="span">Quiz</span>Realm
        </div>
        {/* <Link to="/">
          <p className="home">Home</p>
        </Link> */}
        <p className="home">Home</p>
      </div>
    </div>
  );
}
