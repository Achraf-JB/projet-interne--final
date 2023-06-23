
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Cart.css';
import ProductInfo from "./ProductInfo.jsx";
import Header from "./Header.jsx";
import React, { useEffect } from 'react';
import{motion} from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

    
    
       
const products = [
  {
    id: 1,
    title: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    price: '$10.00',
    image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-1_large.png?format=jpg&quality=90&v=1530129113'
  },
  {
    id: 2,
    title: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    price: '$20.00',
    image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png?format=jpg&quality=90&v=1530129318'
  },
  {
    id: 3,
    title: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    price: '$30.00',
    image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-3_large.png?format=jpg&quality=90&v=1530129341'
  },
  {
    id: 4,
    title: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    price: '$40.00',
    image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-4_large.png?format=jpg&quality=90&v=1530129177'
  }
];

function Cart() {
  useEffect(()=>{
    Aos.init({duration:900});
   })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '10',
    margin: 20,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          margin: 5,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          margin: 10,
        }
      }
    ]
  };
  
  

  return (
        <motion.div className="ProductCarouselContainer" 
        initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    data-aos = "fade-right">
        <Header/>
        <div className="container">
        <Slider {...settings}>
          {products.map((product) => (
            <div className="products" key={product.id}>
              <div className="pic">
              <img src={product.image} alt={product.title} className="imgx" />
              </div>
              <ProductInfo title={product.title} price={product.price} description={product.description}/>
            </div>
          ))}
        </Slider>
        </div>
    </motion.div>
  );
};

export default Cart;
