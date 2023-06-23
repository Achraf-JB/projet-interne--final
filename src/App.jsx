
import Navbar from './component/navbar-footer/Navbar';
import Footer from'./component/navbar-footer/Footer';
 import AnimatedRoutes from './component/animate';
 import React from "react";
 import BackToTop from './component/BackToTop';

import './App.css' ;

function App() {
  return (
    <>
    <Navbar />
    <BackToTop/>
     <AnimatedRoutes/>
      <Footer />
   </>
  )
}

export default App
