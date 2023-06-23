import './ProductInfo.css';
function ProductInfo(props){
  return (
  <div className='Info'>
    <div className="Name-price">
      <h3 className='title'>{props.title}</h3>
      <p className='price'>{props.price}</p>
    </div>
    <div className="Desc">
         <p>{props.description}</p>
    </div>
  </div>
)}
export default ProductInfo