// import './Buttons.css';
// import "./Button.css";
// function Buttons(){
   
//     return (
//         <div>
//         <button className='deletee'>Delete</button>
//         <button className='show'>Show The results</button>
//         </div>
     
//     );
// } 

// export default Buttons ;
import './Button.css'
import * as Colors from './Colors';
import deleteClickee from './Colors'


/*const handleDeleteSelection = () => {
    
    deleteClickee("option13");
    


  };
*/
 
function Button(){
    
    const handleClick = () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          checkbox.checked = false;
        });
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.checked = false;
        });
      };
      
       
    return (
        <div>
        <button  className='deletee' onClick={handleClick}>Delete</button>
        <button className='show'>Show The results</button>
        </div>
     
    );
} 

export default Button ;