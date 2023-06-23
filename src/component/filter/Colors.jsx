import React, { useState } from "react";
import "./Colors.css";

function Colors() {
    const [showDropdown, setShowDropdown] = useState(true);
    const [selectedOption3, setSelectedOption3] = useState("");
  
    function handleToggleee() {
      setShowDropdown(!showDropdown);
    }
  
    function handleOptionClickee(option) {
      setSelectedOption3(option);
      
    }
  
    return (
      <div className="sort-by-container"> 
        <div className="sort-by-toggle" >
          Colors <span className="arrow" onClick={handleToggleee}>&#9662;</span>
        </div>
        {showDropdown && (
          <div className="sort-options-containerr">
            <div>
          <input
          
            className="sortinput3"
            type="radio"
            id="sort-by-option13"
            name="sort-by-option"
            value="option13"
            checked={selectedOption3 === "option13"}
            onClick={() => handleOptionClickee("option13")}
          />
          <label className="sortlabel" htmlFor="sort-by-option13">white</label>
          <br />
          
     
          </div>
          <div>
          <input
            className="sortinput3"
            type="radio"
            id="sort-by-option23"
            name="sort-by-option"
            value="option23"
            checked={selectedOption3 === "option23"}
            onClick={() => handleOptionClickee("option23")}
          />
          <label className="sortlabel" htmlFor="sort-by-option23" >Orange</label>
          <br />
     
          </div>
          <div>
          <input
            className="sortinput3"
            type="radio"
            id="sort-by-option33"
            name="sort-by-option"
            value="option33"
            checked={selectedOption3 === "option33"}
            onClick={() => handleOptionClickee("option33")}
          />
          <label className="sortlabel" htmlFor="sort-by-option33">Beige</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput3"
            type="radio"
            id="sort-by-option43"
            name="sort-by-option"
            value="option43"
            checked={selectedOption3 === "option43"}
            onClick={() => handleOptionClickee("option43")}
          />
          <label className="sortlabel" htmlFor="sort-by-option43">Pink</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput3"
            type="radio"
            id="sort-by-option53"
            name="sort-by-option"
            value="option53"
            checked={selectedOption3 === "option53"}
            onClick={() => handleOptionClickee("option53")}
          />
          <label className="sortlabel" htmlFor="sort-by-option53">Black</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput3"
            type="radio"
            id="sort-by-option63"
            name="sort-by-option"
            value="option63"
            checked={selectedOption3 === "option63"}
            onClick={() => handleOptionClickee("option63")}
          />
          <label className="sortlabel" htmlFor="sort-by-option63">Purple</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput3"
            type="radio"
            id="sort-by-option73"
            name="sort-by-option"
            value="option73"
            checked={selectedOption3 === "option73"}
            onClick={() => handleOptionClickee("option73")}
          />
          <label className="sortlabel" htmlFor="sort-by-option73">Green</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput3"
            type="radio"
            id="sort-by-option83"
            name="sort-by-option"
            value="option83"
            checked={selectedOption3 === "option83"}
            onClick={() => handleOptionClickee("option83")}
          />
          <label className="sortlabel" htmlFor="sort-by-option83">Red</label>
          <br />
      
          </div>
          
        </div>
        
        
        )}
      {showDropdown ? <hr  className="hr1"/> : null}
      </div>
          
    );
  }

export default Colors;