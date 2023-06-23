import {React,useState} from 'react'
import { Sliderdata } from './Sliderdata'
// import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import {AiOutlineArrowLeft ,AiOutlineArrowRight} from 'react-icons/ai'
// import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import Typewriter from 'typewriter-effect';


export default function ImageSlider({slides}) {
    const[Current,setCurrent]=useState(0)
    const length=slides.length
    const nextSlide = ()=>{
      setCurrent(Current === length -1 ? 0 : Current+1);
    };
    const prevSlide =() =>{
      setCurrent(Current===0 ? length-1: Current -1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
      return null 
    }
   
  return (
    
    <section className='slider'>
        <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
        
    {Sliderdata.map((slide,index)=>{
        return(
          <div className={ index === Current ? 'slideactive' : 'slide'} key={index}>
           <div className='titlle'>
            <h1 id='title1'> 
            <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    strings:"Welcome to"
                }}
                  />
             </h1>
                <h1 id='title2'> 
                  Shoes Center
                </h1>
                <button className='button1'><b>learn more </b> </button> 
                </div>
          {index === Current&&( <img src={slide.image} className="image" />)}
          </div>
           
        )
    }
    )}
    <AiOutlineArrowRight className="right-arrow"  onClick={nextSlide}/>
    </section>

  )
}