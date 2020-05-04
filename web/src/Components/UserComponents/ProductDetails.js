import React, { Component } from 'react'
import axios from 'axios'
import  {Link}  from  'react-router-dom'
const queryString = require('query-string');

export class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemid: '',
             userid: '',
             product: [],
        }
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(values.item)
        console.log(values.user)
        this.setState({
            itemid: values.item,
            user: values.user,
        })

        axios.get('http://localhost:5000/Products/find')
        .then(response=>{
          if(response.data.length>0){
            this.setState({
                product :  response.data.map(product=>product),
            //   subcategory : response.data[0].CategoryName
         })
    
          }
        })


      }
    
    render() {
        const {itemid} =this.state
        return (
            <div>
            <div>
                {this.state.product.filter(product => product._id === itemid).map(function(product){
                    return <div>{product._id} {product.description} </div>
                })
                }
            </div>
            <Link to={'/ProductDetails?item='+itemid}>Add to cart</Link>
            </div>
        )
    }
}

export default ProductDetails
