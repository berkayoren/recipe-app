import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const backtoHome = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="logo" onClick={backtoHome}>
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
      <div className="menu" style={{ maxHeight: open ? "15rem" : "0" }}>
        <div className="menuLink">About</div>
        <div className="menuLink">Github</div>
        <div className="menuLink">Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
