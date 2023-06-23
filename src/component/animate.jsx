import HomePage from "./HomePage/HomePage";
import Send from "./send/send";
import Articles from "./articles/Articles";
import{AnimatePresence} from "framer-motion";
import { Routes, Route, useLocation} from "react-router-dom";
 function AnimatedRoutes(){
    const location = useLocation(); 
    return(
       <AnimatePresence>
     <Routes location = {location} key={location.pathname}>
         <Route path="/" element={ <HomePage/> } />
         <Route path="/articles" element={ <Articles/> } />
         <Route path="/contact" element={ <Send/> } />
         <Route path="*" element={<div>404 not found</div>} />
       </Routes>
       </AnimatePresence>
    )
} 
export default AnimatedRoutes; 