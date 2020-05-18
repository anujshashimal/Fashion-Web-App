import React ,{Component}  from 'react';
import  {Link}  from  'react-router-dom';
import Logo from '../CommonComponents/img/logoHeader.gif'
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
       storemanagerid : this.props.managerid,
       storemanagerusername  :this.props.managername
     })
     // console.log(this.props.managerid)
   }
  
   Onsubmit(e)
   {
     window.location = '/Storemanagerlogin'
   }


  render() {
    return (
      
     <nav className = "navbar fixed-top navbar-expand-lg navbar-dark  red darken-3 scrolling-navbar">
       <img src={Logo} width="7%" />
       <Link to ="" className="navbar-brand"></Link>
       <div className="collpase navbar-collapse">
         <ul className="navbar-nav mr-auto" >
             <li className="navbar-item">
            
              <Link to ={"/Products/"+this.state.storemanagerid} style={{color:"#ffffff",fontSize:'large'}} className="nav-link">Products List</Link>
             </li>
             <li className="navbar-item">
               <Link to ={"/Product/Add/"+this.state.storemanagerid}style={{color:"#ffffff",fontSize:'large'}}  className="nav-link">Add Product</Link>
             </li>
          </ul>  

                               <li className="nav-item">
                                    <div className="nav-link waves-effect" style={{color:"#ffffff"}}> 
                                        
                                        {(this.props.managername != '' && this.props.managername != undefined && this.props.managername != "undefined") ?(
                                            <span>
                                                <i id="navbar-static-cart" alt="Cart" className="fas fa-user"></i>
                                             <b>{this.props.managername}</b>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* <Link to={"/viewProduct?username="+""} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-sign-out-alt"></i>Logout</Link> */}
                                            <button  onClick ={this.Onsubmit} style={{color: "black" }}><i id="navbar-static-cart" alt="Cart" className="fas fa-sign-out-alt"></i>Logout</button>
                                           
                                            {/* <button className="btn btn-outline-white btn-sm my-0" type="">Logout</button> */}
                                            </span>
                                        ) : (
                                            <span>
                                            <Link to={'/Storemanagerlogin'} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-user"></i>Login</Link>
                                            {window.location = '/Storemanagerlogin'}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            
                                            {/* <Link to={'/Register'} style={{color: "white"}}><i id="navbar-static-cart" alt="Cart" className="fas fa-user-plus"></i>Singup</Link> */}
                                            </span>
                                        )}
                                        {/* {props.username}
                                            <button class="btn btn-outline-white btn-sm my-0" type="submit">Logout</button>
                                        <span className="sr-only"> Cart </span></div></li>  */}
                                    </div>
                                </li>



















      
       </div>
     </nav>
    )
  }
}

export default StoreManagerNavbar
