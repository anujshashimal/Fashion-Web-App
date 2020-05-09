import React, { Component } from 'react'
import axios from 'axios'
import  {Link}  from  'react-router-dom';import NavBar from "../CommonComponents/header";import Footer from '../CommonComponents/footer';
import {addBasket} from "../../Actions/addActions";
import {connect} from 'react-redux';
import Comments from "./comments";
const queryString = require('query-string');

export class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemid: '',
             userid: '',
             product: [],
             Cprice : ''
        }
        console.log(props)
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
            this.setState({
                product :  response.data.map(product=>product),
        })
      })
    }
    
    render() {
        const {itemid, product, Cprice} =this.state
        return (
            <div>
                <NavBar /><br/><br/><br/>
                <h1>id is :  {
                    this.state.product.map( val => (
                        <div className="container1">
                            <img src={'http://localhost:5000/uploads/'+val.image} alt="Product" style={{width: "10%" , marginTop: "2.5%" , marginBottom: "2.5%" }} />
                            <h4><b>{val.description}</b></h4>
                
                            <p> Product ID : {val.productid}<br/>
                                Price : {val.price}<br/>
                                Available : {val.quantity}</p>
                                <button type="button" className="btn btn-primary" onClick={() =>this.props.addBasket(val.description, val.price, val.quantity)}>Add to Cart</button>
                        </div>

                    )

                )} </h1>
                <div>
                    <Comments productid={this.state.itemid}/>
                    </div>

                <Footer />
            </div>
        )
    }
}
export default connect(null, {addBasket})(ProductDetails);
