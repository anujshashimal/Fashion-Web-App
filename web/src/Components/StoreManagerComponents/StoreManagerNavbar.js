import React ,{Component}  from 'react';
import  {Link}  from  'react-router-dom';



export class StoreManagerNavbar extends Component {
  render() {
    return (
     <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
       <Link to ="" className="navbar-brand">Product Store</Link>
       <div className="collpase navbar-collapse">
         <ul className="navbar-nav mr-auto" >
             <li className="navbar-item">
              <Link to ="/Products/:id" className="nav-link">Products List</Link>
             </li>
             <li className="navbar-item">
               <Link to ="/Product/Add" className="nav-link">Add Product</Link>
             </li>
          </ul>  
       </div>
     </nav>
    )
  }
}

export default StoreManagerNavbar
