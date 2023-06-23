import React, { useState, useEffect } from "react";
import { useRef } from "react";

import "./navbar.css";
import { BiSearch } from "react-icons/bi";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import {Link, useLocation} from "react-router-dom";

function Navbar(){
    const dropdownmenu = useRef ();
    const toggleBtn = useRef ();

    const location = useLocation();
    const [activeLink, setActiveLink] = useState("Home");

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveLink(getActiveLink(currentPath));
    }, [location.pathname]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const getActiveLink = (path) => {
        if (path === "/") {
        return "Home";
        } else if (path === "/articles") {
        return "Products";
        } else if (path === "/contact") {
        return "Contact";
        } else {
        return "Home";
        }
    };
    const showNavbar = () => {
		dropdownmenu.current.classList.toggle(
			"open"
		);
        }
    ;
    const [isClicked, setIsClicked] = useState(false);
    const handleIconClick = () => {
        setIsClicked(!isClicked);
      };
      
    
    return(
       <header className="header-navbar">
        <div id="navbar">
        <div className="logo"><h5>LOGO</h5></div>
   
        <ul id="links" ref={dropdownmenu}>
          <li className="nav-item">
            <Link to="/" className={activeLink === "Home" ? "nav-link active" : "nav-link"} onClick={() => handleLinkClick("Home")}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/articles" className={activeLink === "Products" ? "nav-link active" : "nav-link"} onClick={() => handleLinkClick("Products")}>Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={activeLink === "Contact" ? "nav-link active" : "nav-link"} onClick={() => handleLinkClick("Contact")}>Contact Us</Link>
          </li>
        </ul>

    <div className="search">
    <input type="text" placeholder="  Search" required/> 
    <BiSearch className="icon" />
   
    </div>
    <div className="toggle_btn" ref={toggleBtn} onClick={showNavbar} >
    {isClicked ? (
  <FaTimes onClick={handleIconClick} />
  ) : (
  <FaBars onClick={handleIconClick} />
)}
    </div>
        </div>
       

       </header>


    )
}
 
export default Navbar;