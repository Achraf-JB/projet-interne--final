import "./send.css";
import{motion} from "framer-motion";
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
function  Send () {
    useEffect(()=>{
        Aos.init({duration:900});
       })
    return ( 
        <motion.div className="send"
        initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    data-aos = "fade-right">
        <form  method="get">
            <h1 className="h111">SEND US A MESSAGE</h1>
            <div className="corps">
                <div className="gauche">
                    <input type="text" placeholder="type here ..." />
                </div>
                <div className="droite">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your email adress" />
                    <button className="buttonxx">Send message</button>
                </div>
            </div>
        </form>
        </motion.div>
     );
}
 
export default Send;