import React, { createContext, useContext, useState } from "react";
import { LOGO_LINK } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";
// import Usercontext from "../utils/Usercontext";
// import { Firstname } from "../App";

const Navbar = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const loginbutton = () => {
    console.log(loginbtn);
    loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
  };

  const onlinestatus = useOnlineStatus();

  const { logged } = useContext(Usercontext);

  return (
    <div className="nav">
      <img className="logoimg" src={LOGO_LINK} alt="" />
      <ul>
        <li>Online Status:{onlinestatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>Cart</li>

        <button
          style={{
            width: "150px",
            border: "none",
            backgroundColor: "lightgreen",
            fontSize: "20px",
            borderRadius: "3px",
          }}
          onClick={loginbutton}
        >
          {loginbtn}
        </button>

        <li>{logged}</li>
      </ul>
    </div>
  );
};

export default Navbar;
