import React , {Component} from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import  StorManagerNavBar  from  './StoreManagerNavbar';
import  ProductList from './ProductList';
import  editProduct from  './EditProduct';
import  AddProduct  from  './AddProduct';

function MainProduct() {
  return (
    <Router>
        <div  className="container"></div>
      <StorManagerNavBar/> 
      <br/>    
         <Route path = "/Products/:id" exact component={ProductList}></Route>
         <Route path = "/Product/edit/:id" exact component ={editProduct}></Route>
         <Route path = "/Product/Add" exact component={AddProduct}></Route>
    </Router>
  )
}

export default MainProduct
