
import React, { useState ,useEffect} from "react";
import "./Colors.css";
import{motion} from "framer-motion";
import "./TypeProducts.css";
import "./Button.css";
import './FilterBy.css'
import "./SortBy.css"
import Aos from "aos";
import "aos/dist/aos.css";


function FilterBy({ onSort }) {
  useEffect(()=>{
    Aos.init({duration:1000});
   })
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const [showDropdown, setShowDropdown] = useState(true);
  const [selectedOption1, setSelectedOption1] = useState("");

  function handleToggle() {
    setShowDropdown(!showDropdown);
  }
  

  function handleOptionClick(option) {
    setSelectedOption1(option);
  }
  const [showDropdown1, setShowDropdown1] = useState(true);
  const [selectedOption2, setSelectedOption2] = useState("");

  function handleTogglee1() {
    setShowDropdown1(!showDropdown1);
  }
  function handleOptionClicke(option) {
    setSelectedOption2(option);
  }
  const [showDropdown2, setShowDropdown2] = useState(true);
  const [selectedOption3, setSelectedOption3] = useState("");

  function handleToggleee2() {
    setShowDropdown2(!showDropdown2);
  }

  function handleOptionClickee(option) {
    setSelectedOption3(option);
  }
  function deleteClickee(option) {
    document.getElementById(option).checked = false;
  }
  const [showDropdown3, setShowDropdown3] = useState(true);
  const [selectedOption24, setSelectedOption24] = useState("");

  function handleTogglee3() {
    setShowDropdown3(!showDropdown3);
  }

  function handleOptionClicke(option) {
    setSelectedOption24(option);
  }
  const [showDropdown4, setShowDropdown4] = useState(true);
  const [selectedOption4, setSelectedOption4] = useState("");

  function handleToggleee() {
    setShowDropdown4(!showDropdown4);
  }

  function handleOptionClickee(option) {
    setSelectedOption4(option);
  }
  function deleteClickee(option) {
    document.getElementById(option).checked = false;
  }
  
  const handleClick = () => {
    
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });
    setSelectedOption1("false");
    setSelectedOption3("");
    setSelectedOption2("");
    setSelectedOption4("");
    
    
  };
  const handleCheckboxClick = (checkbox) => {
    
    var checkboxes = document.getElementsByName('sort-by-option');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkbox) {
        checkboxes[i].checked = false;
      }
    }
  };
  const handleChange = (event) => {
    handleCheckboxClick(event.target);
    setSelectedOption4(event.target.value);
  };
  const [products, setProducts] = useState([]);
  //const [check, setcheck] = useState(false);
  //const makeChecked = () => {setcheck(true)};
  
  useEffect(() => {
    fetch("/MOCK_DATA.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  
  const sortByPrice = () => {
    let filteredProducts = [...products];
  
    // Apply color filter if selected
    if (selectedOption3) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color.toLowerCase() === selectedOption3.toLowerCase()
      );
    }
    // Apply Size filter if selected
    if (selectedOption2) {
      filteredProducts = filteredProducts.filter(
        (product) => product.size.toLowerCase() === selectedOption2.toLowerCase()
      );
    }
    // Apply Type filter if selected
    if (selectedOption4) {
      filteredProducts = filteredProducts.filter(
        (product) => product.title.toLowerCase() === selectedOption4.toLowerCase()
      );
    }
  
    // Sort by price
    if (selectedOption1 === "option21") {
      filteredProducts.sort((a, b) =>
        parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""))
      );
    } else if (selectedOption1 === "option31") {
      filteredProducts.sort((a, b) =>
        parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""))
      );
    }
  
    onSort(filteredProducts);
  };
  
  console.log(selectedOption3);
  return (
    <div >
      <button  className="btx" onClick={handleOpenModal}>Filter By</button>
      {showModal && (
        <motion.div className="modal" 
        initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
     drag >
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Filters</h2>
            <div className="sort-by-container">
              <div className="sort-by-toggle">
                Sort By{" "}
                <span className="arrow" onClick={handleToggle}>
                  &#9662;
                </span>
              </div>
              {showDropdown && (
                <div className="sort-options-container">
                  
                  <input
                    className="sortinput"
                    type="radio"
                    id="sort-by-option21"
                    name="sort-by-option1"
                    value="option21"
                    //checked={selectedOption1 === "option21"}
                    onClick={() => handleOptionClick("option21")}
                  />
                  <label className="sortlabel" htmlFor="sort-by-option21">
                    Price low to high
                  </label>
                  <br />
                  <hr />
                  <input
                    className="sortinput"
                    type="radio"
                    id="sort-by-option31"
                    name="sort-by-option1"
                    value="option31"
                    //checked={selectedOption1 === "option31"}
                    onClick={() => handleOptionClick("option31")}
                  />
                  <label className="sortlabel" htmlFor="sort-by-option31">
                    Price High to Low
                  </label>
                  <br />
                  <hr />
                </div>
              )}
            </div>
            <div className="sort-by-container">
              <div className="sort-by-toggle">
                Type Of Products{" "}
                <span className="arrow" onClick={handleTogglee1}>
                  &#9662;
                </span>
              </div>
              {showDropdown1 && (
                <div className="sort-options-containerr">
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option12"
                      name="sort-by-option"
                      value="Tops"
                      //checked={selectedOption2 === "option12"}
                      onChange={handleChange}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option12">
                      Tops
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option22"
                      name="sort-by-option"
                      value="SweatPants"
                      onclick="handleCheckboxClick(this)"
                      //checked={selectedOption2 === "option22"}
                      onChange={handleChange}
                      
                    />
                    <label className="sortlabel" htmlFor="sort-by-option22">
                      SweatPants
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option32"
                      name="sort-by-option"
                      value="Trousers"
                      //checked={selectedOption2 === "option32"}
                      onChange={handleChange}
                      onclick="handleCheckboxClick(this)"
                    />
                    <label className="sortlabel" htmlFor="sort-by-option32">
                      Trousers
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option42"
                      name="sort-by-option"
                      value="Sweaters"
                      //checked={selectedOption2 === "option42"}
                      onChange={handleChange}
                      onclick="handleCheckboxClick(this)"
                    />
                    <label className="sortlabel" htmlFor="sort-by-option42">
                      Sweaters
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option52"
                      name="sort-by-option"
                      value="Dressers"
                      //checked={selectedOption2 === "option52"}
                      onChange={handleChange}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option52">
                      Dressers
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option62"
                      name="sort-by-option"
                      value="Shirts"
                      //checked={selectedOption2 === "option62"}
                      onChange={handleChange}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option62">
                      Shirts
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option72"
                      name="sort-by-option"
                      value="T-shirts"
                      //checked={selectedOption2 === "option72"}
                      onChange={handleChange}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option72">
                      T-shirts
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="checkbox"
                      id="sort-by-option82"
                      name="sort-by-option"
                      value="Hats"
                      //checked={selectedOption2 === "option82"}
                      onChange={handleChange}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option82">
                      Hats
                    </label>
                    <br />
                  </div>
                </div>
              )}
              {showDropdown1 ? <hr /> : null}
            </div>

            <div className="sort-by-container">
              <div className="sort-by-toggle">
                Colors{" "}
                <span className="arrow" onClick={handleToggleee2}>
                  &#9662;
                </span>
              </div>
              {showDropdown2 && (
                <div className="sort-options-containerr">
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="option13"
                      name="sort-by-option"
                      value="white"
                      //checked={selectedOption4 === "option13"}
                      onChange={(e) => setSelectedOption3(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option13">
                      white
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option23"
                      name="sort-by-option"
                      value="Orange"
                      //checked={selectedOption4 === "option23"}
                      onChange={(e) => setSelectedOption3(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option23">
                      Orange
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option33"
                      name="sort-by-option"
                      value="Beige"
                      //checked={selectedOption4 === "option33"}
                      onChange={(e) => setSelectedOption3(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option33">
                      Beige
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option43"
                      name="sort-by-option"
                      value="Pink"
                      //checked={selectedOption4 === "option43"}
                      onChange={(e) => setSelectedOption3(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option43">
                      Pink
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option53"
                      name="sort-by-option"
                      value="Black"
                      //checked={selectedOption4 === "option53"}
                      onChange={(e) => setSelectedOption3(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option53">
                      Black
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option63"
                      name="sort-by-option"
                      value="Purple"
                      //checked={selectedOption4 === "option63"}
                      onChange={(e) => setSelectedOption3(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option63">
                      Purple
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option73"
                      name="sort-by-option"
                      value="Green"
                      //checked={selectedOption4 === "option73"}
                      onChange={(e) => setSelectedOption3(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option73">
                      Green
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput3"
                      type="radio"
                      id="sort-by-option83"
                      name="sort-by-option"
                      value="Red"
                      //checked={selectedOption4 === "option83"}
                      onChange={(e) => setSelectedOption3(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option83">
                      Red
                    </label>
                    <br />
                  </div>
                </div>
              )}
              {showDropdown2 ? <hr /> : null}
            </div>

            <div className="sort-by-container">
              <div className="sort-by-toggle">
                Size{" "}
                <span className="arrow" onClick={handleTogglee3}>
                  &#9662;
                </span>
              </div>
              {showDropdown3 && (
                <div className="sort-options-containerrr">
                  <div>
                    <input
                      className="sortinput"
                      type="radio"
                      id="sort-by-option12"
                      name="sort-by-option4"
                      value="S"
                      //checked={selectedOption24 === "option12"}
                      onChange={(e) => setSelectedOption2(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option12">
                      S
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="radio"
                      id="sort-by-option22"
                      name="sort-by-option4"
                      value="M"
                      //checked={selectedOption24 === "option22"}
                      onChange={(e) => setSelectedOption2(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option22">
                      M
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="radio"
                      id="sort-by-option32"
                      name="sort-by-option4"
                      value="L"
                      //checked={selectedOption24 === "option32"}
                      onChange={(e) => setSelectedOption2(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option32">
                      L
                    </label>
                    <br />
                  </div>
                  <div>
                    <input
                      className="sortinput"
                      type="radio"
                      id="sort-by-option42"
                      name="sort-by-option4"
                      value="XL"
                      //checked={selectedOption24 === "option42"}
                      onChange={(e) => setSelectedOption2(e.target.value)}
                    />
                    <label className="sortlabel" htmlFor="sort-by-option42">
                      XL
                    </label>
                    <br />
                  </div>
                </div>
              )}
              {showDropdown3 ? <hr /> : null}
            </div>
            
            <div>
              <button className="deletee" onClick={handleClick}>
                Delete
              </button>
              <button className="show" onClick={() => sortByPrice()}>
                Show The results ({selectedOption1 === "option21" ? "asc" : selectedOption1 === "option31" ? "desc" : ""}
)
              </button>
              
              
            </div>
            {/* Add your filtering options here */}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default FilterBy;