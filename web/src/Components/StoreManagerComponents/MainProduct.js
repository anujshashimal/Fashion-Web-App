import React , {Component} from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import  StorManagerNavBar  from  './StoreManagerNavbar';
import  ProductList from './ProductList';
import  EditProduct from './EditProduct';
import  AddProduct  from  './AddProduct';
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
        <div  className="container"></div>
      <StorManagerNavBar  managerid = {values.storemanagerid} /> 
      <br/>  
         <Route path = "/Products/:id" exact component={ProductList}></Route>
         <Route path = "/Product/edit/:id" exact component={EditProduct}></Route>
         <Route path ="/Product/Add/:storemanagerid" exact component={AddProduct}></Route>
    </Router>
  )
  }
}

export default MainProduct
