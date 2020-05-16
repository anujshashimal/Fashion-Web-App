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
              <h2 className="header"><b>Welcome {values.storenamagerusername} !!!!!</b></h2>
          </div>
      </div>
      </div>

      <br/>  
         <Route path = "/Products/:id" exact component={ProductList}></Route>
         <Route path = "/Product/edit/:id" exact component={EditProduct}></Route>
         <Route path ="/Product/Add/:storemanagerid" exact component={AddProduct}></Route>
         <Route path = "/Storemanagerlogin" exact component={Storemanagerlogin}></Route>
         <Footer/>
    </Router>
  )
  }
}

export default MainProduct
