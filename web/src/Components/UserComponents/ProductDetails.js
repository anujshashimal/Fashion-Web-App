import React, { Component } from 'react'
import axios from 'axios'
import  {Link}  from  'react-router-dom';import NavBar from "../CommonComponents/header";import Footer from '../CommonComponents/footer';
import {addBasket} from "../../Actions/addActions";
import {connect} from 'react-redux';
const queryString = require('query-string');

export class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemid: '',
             userid: '',
             product: [],
        }
        console.log(props)
    }

    componentDidMount() {
        var values = queryString.parse(this.props.location.search)
        console.log(values.item)
        console.log(values.user)
        this.setState({
            itemid: values.item,
            userid: values.user,
        })
        console.log('itemid',this.state.itemid)
        axios.get('http://localhost:5000/products/finds/'+values.item)
        .then(response=>{
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
                <NavBar />

                <div>
                {this.state.product.filter(product => product._id === itemid).map(function(product){
                    return <div>
                        {product._id}
                        {product.description}
                        {product.price}
                    </div>
                })}
            </div>

            {/*<Link to={'/ProductDetails?item='+itemid}>Add to cart {console.log({product._id})}</Link>*/}
                {console.log()}
                <button type="button" className="btn btn-primary" onClick={this.props.addBasket()}>Add to Cart</button>
                {/*<Link to={'/ProductDetails?item='+itemid}>Add to cart</Link>*/}
                <h1> sfejio </h1>
                <Footer />
            </div>
        )
    }
}
export default connect(null, {addBasket})(ProductDetails);
