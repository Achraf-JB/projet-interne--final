import './Header.css'
import { Link } from "react-router-dom";
function Header(){
  return (
    <div className="section">
      <div className='pn'><h3>Popular now</h3></div>
      <div> <Link className='va'to='/Articles'>View All</Link>
      </div>
    </div>
  )
}
export default Header;