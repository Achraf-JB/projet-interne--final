import './Articles.css';
import Products from './Products';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import  FilterBy from '../filter/FilterBy';
import img1 from "../../assets/4.jpg";
import JsonData from "../../MOCK_DATA.json";
import{motion} from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

function Articles() {
  
  useEffect(()=>{
    Aos.init({duration:1000});
   })
  
  const [sortedData, setSortedData] = useState([]);
  const [articles, setArticles]=useState(JsonData.slice(0,30));
  const [pageNumber, setPageNumber]= useState(0);

  const articlesPerPage=6;
  const pagesVisited = pageNumber * articlesPerPage;
  function handleFilteredData(data) {
    setSortedData(data);
  }

  useEffect(() => {
    fetch("/MOCK_DATA.json")
      .then((response) => response.json())
      .then((data) => setSortedData(data));
  }, []);


  const displayArticles = sortedData.slice(pagesVisited, pagesVisited + articlesPerPage).map((article)=>{
    return (

      <div className='Article1'>
        <img src={img1}/>
        <div className='title'>{article.title}</div>
        <div className='price'>Price : {article.price}</div>
        <button className='seeMore'>See more</button>    
      </div>
    );
  });
  const pageCount = Math.ceil(articles.length/
  articlesPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  }
  return (
    <motion.div className="Appx"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    data-aos = "fade-right">
       <Products/>
       <div className='dix'>
      <h2 className='bbb'>Showing all products</h2>
      <FilterBy onSort={handleFilteredData} className="btnxx"></FilterBy>
      </div>
    
      <div className='displayArticles'>
      {displayArticles}
      </div>
      <br/>
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationButtons"}
      previousLinkClassName={'nextButton'}
      activeClassName={"paginationActive"}
      />
    </motion.div>
  );
     
}

export default Articles;