import React ,{Component}  from 'react';
import  {Link}  from  'react-router-dom';
const queryString = require('query-string');


export class StoreManagerNavbar extends Component {

    constructor(props)
   {
      super(props);
      this.state ={
          storemanagerid : '',
          storemanagerusername : '',
      }
   }
   componentDidMount()
   {       
     this.setState({
       storemanagerid : this.props.managerid
     })
      console.log(this.props.managerid)
   }

  render() {
    return (
      
     <nav className = "navbar fixed-top navbar-expand-lg navbar-dark  deep-purple darken-1 scrolling-navbar">
       <Link to ="" className="navbar-brand">Product Store</Link>
       <div className="collpase navbar-collapse">
         <ul className="navbar-nav mr-auto" >
             <li className="navbar-item">
            
              <Link to ={"/Products/"+this.state.storemanagerid} className="nav-link">Products List</Link>
             </li>
             <li className="navbar-item">
               <Link to ={"/Product/Add/"+this.state.storemanagerid}className="nav-link">Add Product</Link>
             </li>
          </ul>  
       </div>
     </nav>
    )
  }
}

export default StoreManagerNavbar
