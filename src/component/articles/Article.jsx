import './Article.css';
function Article({cover,id,title,price}){

  return (
  <div className="Article">
      <div className="cover"><img src={cover} alt={`image of ${title}`} /></div>
      <h2 className="title">
          {title}
      </h2>
      <h3 className="price"> TND {price}</h3>
      <button className='seeMore'>See more</button>
  </div>)

}

export default Article;