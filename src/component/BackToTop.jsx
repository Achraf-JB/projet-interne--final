import React, { useState ,useEffect} from "react";
import {BsArrowUpSquare} from "react-icons/bs";
function BackToTop() {
  const [position, setPosition] = useState(false);
useEffect(() => {
    window.addEventListener('scroll', () => {
        if( window.scrollY > 200 ){
            setPosition(true);
        }
        else{
            setPosition(false);
        }
  
  })
},[])
 
const scrollTop =() =>{
    window.scrollTo({top:0, behavior:'smooth'});
}

 return (
    <div>
 {position && (
    <div className="Btn" style={{
        position: 'fixed',bottom: '50px',right: '20px',zIndex:1,cursor:'pointer'
    }} onClick={scrollTop}>
    <BsArrowUpSquare size={"35px"}/>
    </div>
    
 ) }
 </div>
 )
 
}
export default BackToTop;

