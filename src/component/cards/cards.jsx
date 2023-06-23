
import { Card } from '../card/card';
import{motion} from "framer-motion";
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './cards.css'
function Cards() {

  useEffect(()=>{
    Aos.init({duration:900});
   })

  return (
    <motion.div className='cards-container'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    data-aos = "fade-left" >
      
     <Card/>
     <Card className="Card-2"/>
     <Card/>
 
    </motion.div>
  );
}

export default Cards;
