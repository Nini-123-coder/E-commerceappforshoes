import React, { useState } from "react";
import "./Header.css";
import { FaUserPlus } from "react-icons/fa6";
import { FaDiceFour } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";



const Header = () => {

    const Nav = useNavigate();

  return (
    <div className="headerMain">
      <div className="headerInner">
        <div className="logo">
        <FaDiceFour /><h1>ninihub</h1>
        </div>
        <div className="logo2">
            <p><NavLink to = '/'>Home</NavLink></p>
            <p ><NavLink to = '/category'>Category</NavLink></p>
            <p><NavLink to = '/details'>Details</NavLink></p>
            <p><NavLink to = '/cart'>Cart</NavLink></p>
        </div>
        <div className="userprofile">
            <button onClick={()=> Nav("/login")}>Login</button>
            <button onClick={()=> Nav("/signUp")}>Sign Up</button>
            <h5>$290</h5>
      
  
         
        </div>
      </div>
    </div>
  );
};

export default Header;
