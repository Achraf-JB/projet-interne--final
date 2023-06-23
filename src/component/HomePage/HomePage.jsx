import Cart from "../popular/Cart";
import Send from "../send/send";
import Home from "../Home/Home";
import Cards from '../cards/cards';
import './HomePage.css';
import{AnimatePresence} from "framer-motion";
import { useLocation} from "react-router-dom";
import BackToTop from "../BackToTop";
 
    
 
      

function HomePage(){
  const location = useLocation(); 
  return (  
    <AnimatePresence>
    <div className="container">
       <Home className="Home" />
        <Cart  className="Cart"/>
        <Cards className="cards" />
        <Send className="send"/>
        <BackToTop />
    </div>  
     </AnimatePresence>
  )

}


export default HomePage;