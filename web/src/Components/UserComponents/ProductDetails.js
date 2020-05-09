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
        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.item)
        console.log(values.user)
        this.setState({
            itemid: values.item,
            userid: values.user,
        })
        console.log('itemid',values.id)
        axios.get('http://localhost:5000/Products/finds/'+values.item)
        .then(response=>{
            console.log(response)

          if(response.data.length>0){
            this.setState({
                product :  response.data.map(product=>product),
            //   subcategory : response.data[0].CategoryName
         })
    
          }
        })
        console.log('list',this.state.product)
        

      }
    
    render() {
        const {itemid, product} =this.state
        return (
            <div>
                {product.description}
            <div>
                {/* {this.state.product.filter(product => product._id === itemid).map(function(product){
                    return <div>{product._id} {product.description} </div>
                })
                } */}
            </div>
            <Link to={'/ProductDetails?item='+itemid}>Add to cart</Link>
            </div>
        )
    }
}

export default ProductDetails
