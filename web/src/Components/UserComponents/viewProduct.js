import React, { Component } from 'react'
import axios from 'axios'

export class viewProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            subcategorys : [],
            subcategory : '',
            products: [],
        }
    }
    
    componentDidMount(){

        axios.get('http://localhost:5000/category/:id')
        .then(response=>{
          if(response.data.length>0){
            this.setState({
              subcategorys :  response.data.map(product=>product),
            //   subcategory : response.data[0].CategoryName
         })
    
          }
        })
        
        axios.get('http://localhost:5000/category/:id')
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
    
    render() {
        return (
            <div>
                <div className="texboxwidth">
                              <label htmlFor="exampleInput">Product Sub Category</label>
                                 <select ref="userInput" required className="form-control" value = {this.state.subcategory} onChange = {this.OnChangesubcategory} multiple= {false}>
                                 <option key ="All" value="All">All</option>
                                   {
                                      this.state.subcategorys.filter(products => products.MainCategory === "men").map(function(subcategorys){
                                           
                                      return <option key ={subcategorys.CategoryName} value={subcategorys.CategoryName}>{subcategorys.CategoryName}</option>

                                      })
                                   }
                                   
                               </select>   
                           </div>

                           {this.state.products.map(function(products){
                               return <li>{products._id} {products.CategoryName}</li>
                           })
                           }
            </div>
        )
    }
}

export default viewProduct
