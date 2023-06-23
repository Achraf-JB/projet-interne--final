import React from "react";
import "./footer.css";
import{AiOutlineInstagram} from  "react-icons/ai";
import{FaFacebookF} from "react-icons/fa" ;
import{BsTwitter} from "react-icons/bs" ;
import{AiFillLinkedin,AiOutlineMail} from "react-icons/ai" ;
import{ MdLocationPin} from "react-icons/md";

 function Footer(){
    return(

      <div className="footer">
        <div className="map">
            <iframe style={{
                width:"100%",height:"400px"
            }} src="https://www.google.com/maps/embed/v1/place?q=ENSI,+Manouba,+Tunisia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                </iframe>
                {/* <div className="location">
                  <div className="email">
                    <a href=""><AiOutlineMail  size={"20px"}/> </a>  Contact@brandshoes.com
                    </div> 
                  <div className="lieu">
                    <div className="sous-lieu">
                       <h3><MdLocationPin />  Manouba office </h3>
                       <span>Lorem ipsum, dolor sit amet conse</span>  
                       <span>Lorem ipsum, dolor sit amet conse</span>  
                       <span>Lorem ipsum, dolor sit amet conse</span>  
                          <span>horaire:</span>
                          <div className="time">
                             <h4>Monday,wednesday & friday</h4>
                             <span>09.00 am to 05.00 pm</span>
                          </div>
                          <div className="time">
                             <h4>Tuesday,Thursday & Saturday</h4>
                             <span>09.00 am to 04.00 pm</span>
                          </div>
                          <h4>Closed on Sundays</h4>

                    </div>
                    </div> 
                </div> */}
        </div>
        <div className="link">
            <h3>FOLLOW US</h3>
            <ul>
                <li><a href=""><AiOutlineInstagram  size={"30px"}/></a></li>
                <li><a href=""><FaFacebookF size={"25px"}/></a></li>
                <li><a href=""><BsTwitter size={"30px"}/></a></li>
                <li><a href=""><AiFillLinkedin size={"30px"}/></a></li>
            </ul>

        </div>
      </div>
     
    )
}
export default Footer;