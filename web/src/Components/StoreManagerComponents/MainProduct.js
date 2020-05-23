import React , {Component} from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import  StorManagerNavBar  from  './StoreManagerNavbar';
import  Storemanagerlogin   from  './Storemanagerlogin';
import  ProductList from './ProductList';
import  EditProduct from './EditProduct';
import  AddProduct  from  './AddProduct';
import  storemanagerDetails  from  './storeManagerDetails';
import Home  from '../UserComponents/Home'
import Footer  from  '../CommonComponents/footer'
import './css/Product.css';
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
              <h2 className="header" style={{color: 'red',fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}><b>Welcome {values.storenamagerusername} !!!!!</b></h2>
                  {/* <img src={Storemanager} alt="Avatar" style={{width:'5%', height:'5%',marginLeft:'80%',marginTop:'-8%'}}/> */}
                <h3 style = {{ color: 'black', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>If You want to Add Product Details Please go to Add Product link in the Navigation bar.If You want to see Product details go to Product List link in the Navigation bar.</h3>
          </div>
      </div>
      </div>

      <br/>  
         <Route path = "/Products/:id" exact component={ProductList}></Route>
         <Route path = "/Product/edit/:id" exact component={EditProduct}></Route>
         <Route path ="/Product/Add/:storemanagerid" exact component={AddProduct}></Route>
         <Route path = "/Storemanagerlogin" exact component={Storemanagerlogin}></Route>
        <Route path = "/storemagerDetails" exact component={storemanagerDetails}></Route>
         <Footer/>

    </Router>
  )
  }
}

export default MainProduct
