import React, { Component } from 'react'
import axios from 'axios'
import  {Link}  from  'react-router-dom'
import './card.css';
import item from './080203207710-C4-1-Shakalaka_Mens-T-Shirt.jpg'
import  { Redirect } from 'react-router-dom'
import Header from "../CommonComponents/header.js";
import Footer from '../CommonComponents/footer';
import { MDBBadge, MDBContainer, MDBIcon } from "mdbreact";
import './viewProduct.css';

const queryString = require('query-string');

export class viewProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            categorys: [],
            subcategory: 'All',
            maincategory: 'Men',
            products: [],
            username: '',
            search: '',
            
            // redirect: false,
        }
        // this.Logout = this.Logout.bind(this);
    }

    // componentWillMount(){
    //     if(sessionStorage.getItem("userData")){
    //         console.log("call User Feed")
    //     }
    //     else{
    //         this.setState({redirect: true});
    //     }
    // }

    // Logout(){
    //     sessionStorage.setItem("userData",'');
    //     sessionStorage.clear();
    //     this.setState({redirect: true});
    // }
    
    componentDidMount(){

        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.username)
        this.setState({
            username: values.username,
            maincategory: values.maincategory,
        })
    
        axios.get('http://localhost:5000/category/:id')
        .then(response=>{
          if(response.data.length>0){
            this.setState({
                categorys :  response.data.map(categorys=>categorys),
            //   subcategory : response.data[0].CategoryName
         })}
        })
        
        axios.get('http://localhost:5000/Products/find')
        .then(response=>{
          if(response.data.length>0){
            this.setState({
                products :  response.data.map(product=>product),
            //   subcategory : response.data[0].CategoryName
         })
    
          }
        })
        console.log('products', this.state.products);
        console.log('username',this.state.username);
    }

    OnChangesubcategory = event => {
        this.setState({
          subcategory : event.target.value
        })
        console.log(this.state.subcategorys);
       }

       OnChangemaincategory = event => {
        this.setState({
            maincategory : event.target.value,
            subcategory : 'All'
        })
        console.log(this.state.maincategory);
       }

       OnChangesearch = event => {
           this.setState({
               search: event.target.value,
           })
       }
    
    render() {
        
        // if(this.state.redirect) {
        //     return <Redirect to={"/Login"} />
        // }
        const {subcategory, maincategory} =this.state
        return (
            <div>
                <Header username={this.state.username} />
                <br/>
                {/* <button type="button" className="button" onClick={this.Logout}>Logout</button> */}
                
                <div className="row" style={{marginLeft: "", marginTop: "", marginRight: '', backgroundColor: '#ffcdd2'}}>
                    <div className="col-md" style={{marginTop: "2%"}}>
                        <div className="texboxwidth" style={{width: "70%"}}>
                            <label htmlFor="exampleInput">Product Main Category</label>
                            <select 
                            ref="userInput" 
                            required 
                            className="form-control"
                            value = {this.state.maincategory}
                            onChange = {this.OnChangemaincategory}
                            multiple= {false}>
                                <option key ="Men" value="Men">Men</option>
                                <option key ="Women" value="Women">Women</option>
                                <option key ="Kid" value="Kids">Kids</option>
                                <option key ="Other" value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md" style={{marginTop: "2%"}}>
                        <div className="texboxwidth" style={{width: "70%"}}>
                            <label htmlFor="exampleInput">Product Sub Category</label>
                            <select 
                            ref="userInput" 
                            required 
                            className="form-control" 
                            value = {this.state.subcategory} 
                            onChange = {this.OnChangesubcategory} 
                            multiple= {false}>
                                <option key ="All" value="All">All</option>
                                {this.state.categorys.filter(categorys => categorys.MainCategory === maincategory).map(function(categorys){
                                    return <option 
                                    key ={categorys.CategoryName} 
                                    value={categorys.CategoryName}
                                    >{categorys.CategoryName}
                                    </option>
                                    })
                                }
                            </select>   
                        </div>
                    </div>

                    <div className="col-md" style={{marginTop: "2%"}}>
                        <div className="texboxwidth" style={{width: "70%"}}>
                            <div class="md-form">
                                <i class="fas fa-search prefix"></i>
                                <input 
                                type="text" 
                                id="inputValidationEx" 
                                class="form-control validate"
                                value = {this.state.search}
                                onChange = {this.OnChangesearch}
                                placeholder="search" />
                            </div>
                        </div>
                    </div>

                </div>
                             
                {(this.state.subcategory === 'All') ? (
                    
                        <div1 className="row" style={{textAlign: "center" , marginLeft: "1%" , marginRight: "1%" , marginTop: "1%"}}>
                            {this.state.products.filter(products => products.maincategory === maincategory && products.description.includes(this.state.search)).map(products => (
                               <div className="col-md-3">
                               <Link to={'/ProductDetails?item='+products.productid+'&username='+this.state.username}>
                          <div class="card1">
                               
                             
                               {/* <img src= {item} alt="Product" style={{width: "95%" , marginTop: "2.5%" , marginBottom: "2.5%" }} /> */}
                               {/* <img src={products.image}/> */}
                            <img src={products.image} alt="Product" style={{width: "95%" , marginTop: "2.5%" , marginBottom: "2.5%" }} />
                                  <div class="container1" style={{color: "#000000"}}>
                                      <h4><b>{products.description}</b></h4>
                                      <p>
                                          {/* Product ID : {products.productid}<br/> */}
                                      <div className="raw" style={{backgroundColor: "#ff4444", color: "white"}}>
                                      <h3>LKR {products.price}.00</h3>
                                      </div>
                                      {(products.quantity == 0) ? (
                                        <h5><MDBBadge tag="a" color="red"> Out of Stock </MDBBadge></h5>
                                    ) : (
                                        <div>
                                            <h5><MDBBadge tag="a" color="dark"> Available : {products.quantity} </MDBBadge></h5>
                                        {/* Available : {products.quantity} */}
                                    </div>
                                    )}
                                      </p>
                                  </div>
                          </div></Link>
                          </div>
                            ))}
        
                        </div1>
                         
                    
                ) : (
                    <div1 className="row" style={{textAlign: "center" , marginLeft: "1%" , marginRight: "1%" , marginTop: "1%"}}>
                        {this.state.products.filter(products => products.maincategory === maincategory && products.subcategory === subcategory && products.description.includes(this.state.search)).map(products => (
                            <div className="col-md-3">
                            <Link to={'/ProductDetails?item='+products.productid+'&username='+this.state.username}>
                       <div class="card1">
                       {/* {products.image} */}
                       <img src={products.image} alt="Product" style={{width: "95%" , marginTop: "2.5%" , marginBottom: "2.5%" }} />
                               <div class="container1" style={{color: "#000000"}}>
                                   <h4><b>{products.description}</b></h4> 
                                   <p>
                                       {/* Product ID : {products.productid}<br/> */}
                                   <div className="raw" style={{backgroundColor: "#ff4444", color: "white"}}>
                                      <h3>LKR {products.price}.00</h3>
                                    </div>
                                   {/* Available : {products.quantity}</p> */}
                                   {(products.quantity == 0) ? (
                                        <h5><MDBBadge tag="a" color="red"> Out of Stock </MDBBadge></h5>
                                    ) : (
                                        <div>
                                            <h5><MDBBadge tag="a" color="dark"> Available : {products.quantity} </MDBBadge></h5>
                                        {/* Available : {products.quantity} */}
                                    </div>
                                    )}
                                      </p>
                               </div>
                       </div></Link>
                       </div>
                        ))
                        }
                    </div1>
                )}
                
            <Footer />
            </div>
        )
    }
}

export default viewProduct
