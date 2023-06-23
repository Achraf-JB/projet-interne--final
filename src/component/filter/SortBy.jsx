import React, { useState } from "react";
import "./SortBy.css";

 export default function SortBy() {
    const [showDropdown, setShowDropdown] = useState(true);
    const [selectedOption1, setSelectedOption1] = useState("");
  
    function handleToggle() {
      setShowDropdown(!showDropdown);
    }
  
    function handleOptionClick(option) {
      setSelectedOption1(option);
      
    }
  
    return (
      <div className="sort-by-container">
        <div className="sort-by-toggle" >
          Sort By <span className="arrow" onClick={handleToggle}>&#9662;</span>
        </div>
        {showDropdown && (
          <div className="sort-options-container">
          <input
            className="sortinput"
            type="radio"
            id="sort-by-option11"
            name="sort-by-option1"
            value="option11"
            checked={selectedOption1 === "option11"}
            onClick={() => handleOptionClick("option11")}
          />
          <label className="sortlabel" htmlFor="sort-by-option11">Our Picks</label>
          <br />
          <hr />
          <input
            className="sortinput"
            type="radio"
            id="sort-by-option21"
            name="sort-by-option1"
            value="option21"
            checked={selectedOption1 === "option21"}
            onClick={() => handleOptionClick("option21")}
          />
          <label className="sortlabel" htmlFor="sort-by-option21">Price low to high</label>
          <br />
          <hr />
          <input
            className="sortinput"
            type="radio"
            id="sort-by-option31"
            name="sort-by-option1"
            value="option31"
            checked={selectedOption1 === "option31"}
            onClick={() => handleOptionClick("option31")}
          />
          <label className="sortlabel" htmlFor="sort-by-option31">Price High to Low</label>
          <br />
          <hr className="hr3" />
        </div>
        )}
      </div>
    );
  }

// export default SortBy;