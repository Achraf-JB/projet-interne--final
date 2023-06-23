import React, { useState } from "react";
import "./Size.css";

function Size() {
    const [showDropdown, setShowDropdown] = useState(true);
    const [selectedOption24, setSelectedOption24] = useState("");
  
    function handleTogglee() {
      setShowDropdown(!showDropdown);
    }
  
    function handleOptionClicke(option) {
      setSelectedOption24(option);
      
    }
  
    return (
      <div className="sort-by-container"> 
        <div className="sort-by-toggle" >
          Size <span className="arrow" onClick={handleTogglee}>&#9662;</span>
        </div>
        {showDropdown && (
          <div className="sort-options-containerrr">
            <div>
          <input
            className="sortinput"
            type="radio"
            id="sort-by-option12"
            name="sort-by-option4"
            value="option12"
            checked={selectedOption24 === "option12"}
            onClick={() => handleOptionClicke("option12")}
          />
          <label className="sortlabel" htmlFor="sort-by-option12">S</label>
          <br />
          
     
          </div>
          <div>
          <input
            className="sortinput"
            type="radio"
            id="sort-by-option22"
            name="sort-by-option4"
            value="option22"
            checked={selectedOption24 === "option22"}
            onClick={() => handleOptionClicke("option22")}
          />
          <label className="sortlabel" htmlFor="sort-by-option22">M</label>
          <br />
     
          </div>
          <div>
          <input
            className="sortinput"
            type="radio"
            id="sort-by-option32"
            name="sort-by-option4"
            value="option32"
            checked={selectedOption24 === "option32"}
            onClick={() => handleOptionClicke("option32")}
          />
          <label className="sortlabel" htmlFor="sort-by-option32">L</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput"
            type="radio"
            id="sort-by-option42"
            name="sort-by-option4"
            value="option42"
            checked={selectedOption24 === "option42"}
            onClick={() => handleOptionClicke("option42")}
          />
          <label className="sortlabel" htmlFor="sort-by-option42">XL</label>
          <br />
      
   
        </div>
        </div>
        
        )}
        {showDropdown ? <hr className="hr2" /> : null}
      </div>
    );
  }

export default Size;