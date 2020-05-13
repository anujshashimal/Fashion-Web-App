import React, { Component } from 'react'
import axios from 'axios'
import  {Link}  from  'react-router-dom';
import Header from "../CommonComponents/header.js";
import Footer from '../CommonComponents/footer';
import {addBasket} from "../../Actions/addActions";
import {addToWatchList} from "../../Actions/addWatchList";
import {connect} from 'react-redux';
import Comments from "./comments";
const queryString = require('query-string');

export class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemid: '',
             username: '',
             product: [],
             Cprice : ''
        }
        console.log(props)
    }

    componentDidMount() {
        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.item)
        console.log(values.username)
        this.setState({
            itemid: values.item,
            username: values.username,
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
                <Header username={this.state.username} />
                <div className="">
                    {this.state.product.map( val => (
                        <div className="container" style={{textAlign: "center"}}>
                            <div className="row"> {console.log(val)}

                                <div className="col-md">
                            <img src={'http://localhost:5000/uploads/'+val.image} alt="Product" style={{width: "50%" , marginTop: "2.5%" , marginBottom: "2.5%" }} />
                            </div>
                            <div className="col-md" style={{textAlign: "left"}}>
                            <h2><b>{val.description}</b></h2>
                
                            <p> Product ID : {val.productid}<br/>
                                Price : {val.price}<br/>
                                Available : {val.quantity}</p>
                                <button type="button" className="btn btn-deep-purple" onClick={() =>this.props.addBasket(val.productid, val.description, val.price, val.quantity, val.discount, val.image)}><i class="fa fa-shopping-cart fa-lg"></i>&nbsp;&nbsp; Add to Cart</button>
                                <button type="button" className="btn btn-danger" onClick={() =>this.props.addToWatchList(val.description, val.price, val.quantity, val.discount , val.image)}><i class="fa fa-heart fa-lg"></i>&nbsp;&nbsp;Add to Wishlist</button>
                                </div>
                                </div>
                        </div>

                    )

                )} </div>
                <div>
                    <Comments productid={this.state.itemid} username={this.state.username} />
                    </div>

                <Footer />
            </div>
        )
    }
}
export default connect(null, {addBasket,addToWatchList})(ProductDetails);
