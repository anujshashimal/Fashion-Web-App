import React , {Component} from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import  StorManagerNavBar  from  './StoreManagerNavbar';
import  Storemanagerlogin   from  './Storemanagerlogin';
import  ProductList from './ProductList';
import  EditProduct from './EditProduct';
import  AddProduct  from  './AddProduct';
import Home  from '../UserComponents/Home'
import Footer  from  '../CommonComponents/footer'
import './Product.css';
const queryString = require('query-string');

class MainProduct extends Component {

  constructor(props)
  {
     super(props);
     this.state ={
         storemanagerid : '',
         storemanagerusername : '',
     }
  }
 
  render(){
    var values = queryString.parse(this.props.location.search)
  return (
    <Router>
    <div className="mainwidth">  
      <div className="container">  
        <StorManagerNavBar  managerid = {values.storemanagerid} managername ={values.storenamagerusername} /> 
         <div className="jumbotron">
              <h2 className="header" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}><b>Welcome {values.storenamagerusername} !!!!!</b></h2>
                  {/* <img src={Storemanager} alt="Avatar" style={{width:'5%', height:'5%',marginLeft:'80%',marginTop:'-8%'}}/> */}
                <div className ="details" >
                     <div className="texboxwidth">
                               <label htmlFor="exampleInput">Id</label>   
                               <input type="text" id="exampleInput" className="textbox" value ={values.storemanagerid} disabled/>            
                      </div>
                      <div className="texboxwidth">
                               <label htmlFor="exampleInput">Name</label>
                               <input type="text" id="exampleInput" className="" value ={values.storenamagerusername} disabled/>          
                      </div>
                    {/* <b>You can go Add Product Page In Click Navigation Bar Add Product link.And also You can See Your All Add Product Details in click Product list in navigation bar</b> */}
                </div>
                <b>You can go Add Product Page In Click Navigation Bar Add Product link.And also You can See Your All Add Product Details in click Product list in navigation bar</b>
          </div>
      </div>
      </div>

      <br/>  
         <Route path = "/Products/:id" exact component={ProductList}></Route>
         <Route path = "/Product/edit/:id" exact component={EditProduct}></Route>
         <Route path ="/Product/Add/:storemanagerid" exact component={AddProduct}></Route>
         <Route path = "/Storemanagerlogin" exact component={Storemanagerlogin}></Route>
         
    </Router>
  )
  }
}

export default MainProduct
