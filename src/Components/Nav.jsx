import React from "react";
import "../Components/CSS/Nav.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="hero">
        <div className="logo">
          <span className="span">Quiz</span>Realm
        </div>
        {/* <Link to="/">
          <p className="home">Home</p>
        </Link> */}
        <p onClick={()=>navigate("/")} className="home">Home</p>
      </div>
    </div>
  );
}
