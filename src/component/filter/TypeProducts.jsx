import React, { useState } from "react";
import "./TypeProducts.css";

function TypeProducts() {
    const [showDropdown, setShowDropdown] = useState(true);
    const [selectedOption2, setSelectedOption2] = useState("");
  
    function handleTogglee() {
      setShowDropdown(!showDropdown);
    }
  
    function handleOptionClicke(option) {
      setSelectedOption2(option);
      
    }
  
    return (
      <div className="sort-by-container"> 
        <div className="sort-by-toggle" >
          Type Of Products <span className="arrow" onClick={handleTogglee}>&#9662;</span>
        </div>
        {showDropdown && (
          <div className="sort-options-containerr">
            <div>
          <input
            className="sortinput"
            type="checkbox"
            id="sort-by-option12"
            name="sort-by-option"
            value="option12"
            checked={selectedOption2 === "option12"}
            onClick={() => handleOptionClicke("option12")}
          />
          <label className="sortlabel" htmlFor="sort-by-option12">Tops and tee-shirts</label>
          <br />
          
     
          </div>
          <div>
          <input
            className="sortinput"
            type="checkbox"
            id="sort-by-option22"
            name="sort-by-option"
            value="option22"
            checked={selectedOption2 === "option22"}
            onClick={() => handleOptionClicke("option22")}
          />
          <label className="sortlabel" htmlFor="sort-by-option22">SweatPants</label>
          <br />
     
          </div>
          <div>
          <input
            className="sortinput"
            type="checkbox"
            id="sort-by-option32"
            name="sort-by-option"
            value="option32"
            checked={selectedOption2 === "option32"}
            onClick={() => handleOptionClicke("option32")}
          />
          <label className="sortlabel" htmlFor="sort-by-option32">Trousers</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput"
            type="checkbox"
            id="sort-by-option42"
            name="sort-by-option"
            value="option42"
            checked={selectedOption2 === "option42"}
            onClick={() => handleOptionClicke("option42")}
          />
          <label className="sortlabel" htmlFor="sort-by-option42">Sweaters</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput"
            type="checkbox"
            id="sort-by-option52"
            name="sort-by-option"
            value="option52"
            checked={selectedOption2 === "option52"}
            onClick={() => handleOptionClicke("option52")}
          />
          <label className="sortlabel" htmlFor="sort-by-option52">Dressers</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput"
            type="checkbox"
            id="sort-by-option62"
            name="sort-by-option"
            value="option62"
            checked={selectedOption2 === "option62"}
            onClick={() => handleOptionClicke("option62")}
          />
          <label className="sortlabel" htmlFor="sort-by-option62">Shirts</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput"
            type="checkbox"
            id="sort-by-option72"
            name="sort-by-option"
            value="option72"
            checked={selectedOption2 === "option72"}
            onClick={() => handleOptionClicke("option72")}
          />
          <label className="sortlabel" htmlFor="sort-by-option72">T-shirts</label>
          <br />
      
          </div>
          <div>
          <input
            className="sortinput"
            type="checkbox"
            id="sort-by-option82"
            name="sort-by-option"
            value="option82"
            checked={selectedOption2 === "option82"}
            onClick={() => handleOptionClicke("option82")}
          />
          <label className="sortlabel" htmlFor="sort-by-option82">Hats</label>
          <br />
          
          </div>
        </div>
        
        )}
        {showDropdown ? <hr className="hr4" /> : null}
      </div>
    );
  }

export default TypeProducts;