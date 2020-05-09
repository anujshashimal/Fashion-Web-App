import React, { Component } from 'react'
import axios from 'axios'
import  {Link}  from  'react-router-dom'
import './card.css';
import item from './080203207710-C4-1-Shakalaka_Mens-T-Shirt.jpg'
import  { Redirect } from 'react-router-dom'
import Header from "../CommonComponents/header.js";
import Footer from '../CommonComponents/footer';

const queryString = require('query-string');

export class viewProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            categorys: [],
            subcategory: 'All',
            maincategory: 'Men',
            products: [],
            username:'',
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
    
    render() {
        
        // if(this.state.redirect) {
        //     return <Redirect to={"/Login"} />
        // }
        const {subcategory, maincategory} =this.state
        return (
            <div>
                <Header username={this.state.username} />
                <p>{this.state.username}</p>
                {/* <button type="button" className="button" onClick={this.Logout}>Logout</button> */}
                <div className="row" style={{marginLeft: "5%", marginTop: "1%"}}>
                    <div className="col-md" style={{}}>
                        <div className="texboxwidth" style={{width: "50%"}}>
                            <label htmlFor="exampleInput">Product Main Category</label>
                            <select 
                            ref="userInput" 
                            required 
                            className="form-control"
                            value = {this.state.maincategory}
                            onChange = {this.OnChangemaincategory}
                            multiple= {false}>
                                <option key ="Men" value="Men">Men</option>
                                <option key ="Weman" value="Weman">Weman</option>
                                <option key ="Kid" value="Kid">Kid</option>
                                <option key ="Baby" value="Baby">Baby</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md" style={{}}>
                        <div className="texboxwidth" style={{width: "50%"}}>
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
                </div>

                {(this.state.subcategory === 'All') ? (

                        <div className="row" style={{textAlign: "center" , marginLeft: "1%" , marginRight: "1%" , marginTop: "1%"}}>
                            {this.state.products.filter(products => products.maincategory === maincategory).map(products => (
                               <div className="col-md-3">
                               <Link to={'/ProductDetails?item='+products.productid+'&user=5'}>
                          <div class="card1">
                               
                             
                               {/* <img src= {item} alt="Product" style={{width: "95%" , marginTop: "2.5%" , marginBottom: "2.5%" }} /> */}
                               {/* <img src={products.image}/> */}
                            <img src={'http://localhost:5000/uploads/'+products.image} alt="Product" style={{width: "95%" , marginTop: "2.5%" , marginBottom: "2.5%" }} />
                                  <div class="container1">
                                      <h4><b>{products.description}</b></h4>
                                      <p>Product ID : {products.productid}<br/>
                                      Price : {products.price}<br/>
                                      Available : {products.quantity}</p>
                                  </div>
                          </div></Link>
                          </div>
                            ))}
        
                        </div>
                         
                    
                ) : (
                    <div className="row" style={{textAlign: "center" , marginLeft: "1%" , marginRight: "1%" , marginTop: "1%"}}>
                        {this.state.products.filter(products => products.maincategory === maincategory && products.subcategory === subcategory).map(products => (
                            <div className="col-md-3">
                            <Link to={'/ProductDetails?item='+products.productid+'&user=5'}>
                       <div class="card1">
                       {/* {products.image} */}
                           <img src= {item} alt="Product" style={{width: "95%" , marginTop: "2.5%" , marginBottom: "2.5%" }} />
                               <div class="container1">
                                   <h4><b>{products.description}</b></h4> 
                                   <p>Product ID : {products.productid}<br/>
                                   Price : {products.price}<br/>
                                   Available : {products.quantity}</p>
                               </div>
                       </div></Link>
                       </div>
                        ))
                        }
                    </div>
                )}
            
            </div>
        )
    }
}

export default viewProduct
