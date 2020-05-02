import React, { Component } from 'react'
import axios from 'axios'
import './card.css';

export class viewProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            categorys: [],
            subcategory: 'All',
            maincategory: 'men',
            products: [],
        }
    }
    
    componentDidMount(){

        axios.get('http://localhost:5000/category/:id')
        .then(response=>{
          if(response.data.length>0){
            this.setState({
                categorys :  response.data.map(categorys=>categorys),
            //   subcategory : response.data[0].CategoryName
         })
    
          }
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
        const {subcategory, maincategory} =this.state
        return (
            <div>
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
                        <option key ="Men" value="men">Men</option>
                        <option key ="Weman" value="wemen">Weman</option>
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
                <div style={{marginLeft: "5%", marginTop: "2%"}}>
                {this.state.products.filter(products => products.maincategory === maincategory).map(function(products){
                    return <div>{products._id} {products.description} </div>
                })
                }
            </div>

            ) : (
            <div style={{marginLeft: "5%", marginTop: "2%"}}>
                {this.state.products.filter(products => products.maincategory === maincategory && products.subcategory === subcategory).map(function(products){
                    return <div>{products._id} {products.description} </div>
                })
                }
            </div>
            )}

            <div className="row" style={{textAlign: "center" , marginLeft: "1%" , marginRight: "1%"}}>
            {this.state.products.filter(products => products.maincategory === maincategory && products.subcategory === subcategory).map(products => (
                 <div className="col-md-3">
                <div class="card1">
                {products.image}
                    <img src= {"...../api/"+products.image} alt="Avatar" style={{width: "100%"}} />
                        <div class="container1">
                            <h4><b>{products._id}</b></h4> 
                            <p>{products.description}</p> 
                        </div>
                </div>
                </div>
                ))
            }

            </div>

            </div>
        )
    }
}

export default viewProduct
