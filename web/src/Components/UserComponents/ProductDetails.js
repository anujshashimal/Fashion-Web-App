import React, { Component } from 'react'
import axios from 'axios'
import  {Link, Redirect}  from 'react-router-dom';
import Footer from '../CommonComponents/footer';
import {addBasket} from "../../Actions/addActions";
import {addToWatchList} from "../../Actions/addWatchList";
import {connect} from 'react-redux';
import Comments from "./comments";
import AvgRate from "./AvgRating";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import swal from 'sweetalert';
import { MDBBadge, MDBContainer, MDBIcon } from "mdbreact";
import Payment from './payment.png'
import './icon.css'
import Nav from '../CommonComponents/NavbarPage'


import {placeOrder} from "../../Actions/placeOrderDir";

const queryString = require('query-string');
export class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemid: '',
             username: '',
             product: [],
             Cprice : '',
            counter: 0,
             ragister: false,
            place: false,
            avaliable: '',
            
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
        axios.get('http://100.24.72.11:5000/Products/finds/'+values.item)
        .then(response=>{
            this.setState({
                product :  response.data.map(product=>product),
        })
      })
    }
    increament = () =>{
        if(this.state.avaliable > this.state.counter){
        this.setState({counter: this.state.counter + 1})
        }
    }
    decrement = () =>{
        this.setState(prevState =>
            ({counter: prevState.counter? prevState.counter-1: 0})
        )
    }

    render() {
        const {itemid, product, Cprice, username} =this.state
        console.log(this.state)
        if(this.state.ragister) {
            swal({
                title: "Please Login To the System",
                text: "If your are not registered you can register",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            return <Redirect to={"/Login"} />

        }else if(this.state.place){
            return <Redirect  to={"/PlaceOrder?username=" + this.state.username} />
        }

        return (
            <div>
            <Nav username={this.state.username}/>
            <div style={{backgroundColor: "#ffcdd2"}}>
                
                {/* <Header username={this.state.username} /> */}
                <br />
                <div className="" style={{backgroundColor: "#ffffff", color: ""}}>
                    {this.state.product.map( val => (
                        <div className="container" style={{textAlign: "center"}}>

                            <div className="row"> {console.log(val)}
                                {console.log(val)}
                                <div className="col-md">
                                <MDBBadge tag="a" color="danger"> NEW </MDBBadge>
                            <img src={val.image} alt="Product" style={{width: "65%" , marginTop: "2.5%" , marginBottom: "2.5%" }} />
                            </div>
                            <div className="col-md" style={{textAlign: "left"}}>
                            <div className="raw" style={{marginTop: "2%", marginBottom: "2%", backgroundColor: "#9c27b0", color: "white"}}>
                            <h1><b>{val.description}</b></h1>
                            </div>
                            
                            Catogary :<b> {val.maincategory} / {val.subcategory}</b><br/>
                             Product ID : <b>{this.state.itemid}                    
                            </b><br/>
                             {/* Discount :<b> {val.discount} %</b><br /> */}
                             <AvgRate productid={this.state.itemid} />
                             {(val.discount == "0") ? (
                                 <div> </div>
                             ) : (
                                <h3><MDBBadge pill color="red"> Discount :<b> {val.discount} %</b> </MDBBadge></h3>
                             )}
                                <div className="raw" style={{marginTop: "2%", marginBottom: "2%", backgroundColor: "#ff4444", color: "white"}}>
                                <h2>Rs: {val.price}.00</h2>
                                </div>
                                {(val.quantity == 0) ? (
                                    <div></div>
                                ) : (
                                    <h4>Available : {this.state.avaliable = val.quantity}</h4>
                                )}
                                <div style={{textAlign: "", marginTop:"5%"}}>
                                    {(val.quantity == 0) ? (
                                        <h3><MDBBadge tag="a" color="danger"> Out of Stock </MDBBadge></h3>
                                    ) : (
                                        <div>
                                            <h1>
                                <i onClick={this.decrement} className="fas fa-angle-left"></i> &nbsp;
                                {this.state.counter} &nbsp;
                                <i onClick={this.increament} className="fas fa-angle-right"></i>
                                </h1>
                                <div style={{textAlign: "", marginTop:""}}>
                                    <div className="row">
                                        <div className="col">
                                            <button type="button" className="btn btn-deep-purple btn-block" onClick={() => {((username != '' && username != "undefined")) ? (this.props.addBasket(val._id, val.productid, val.description, val.price, val.quantity, val.discount, val.image, this.state.counter)) : (this.setState({ragister: true})) ; swal({
                                                title: "Added to Cart",
                                                text: "Your item is added to the Cart!",
                                                icon: "warning",
                                                dangerMode: true,
                                            })}}><i className="fa fa-cart-arrow-down fa-lg"></i>&nbsp;&nbsp; Add to Cart</button>                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-red darken-3 btn-block" onClick={() => {((username != '' && username != "undefined")) ? (this.props.addToWatchList(val._id,this.state.username, val.productid, val.description, val.price, val.quantity, val.discount, val.image, this.state.counter)) : (this.setState({ragister: true})) ; swal({
                                                title: "Added to WishList",
                                                text: "Your item is added to the WishList!",
                                                icon: "warning",
                                                dangerMode: true,
                                            }) }}><i className="fa fa-heart fa-lg"></i>&nbsp;&nbsp;Add to Wishlist</button>                                        </div>
                                    </div>
                                        <div className="row" style={{marginTop: "3%", marginBottom: "3%"}}>
                                        <div className="col">
                                            <button type="button" className="btn btn-pink btn-block" onClick={() => {((username != '' && username != "undefined")) ? (this.props.placeOrder(val.productid, val.description, val.price, val.quantity, val.discount, this.state.counter)) : (this.setState({ragister:true})) ; (this.setState({place:true})) }}><i className="fa fa-shopping-bag fa-spin-hover fa-lg"></i>&nbsp;&nbsp; Place Order</button>
                                            <img src={Payment} style={{width:'100%'}}/>
                                        </div>
                                    </div>
                                </div>
                                        </div>)
                                    }
                                        </div>
                                </div>
                                </div>
                        </div>


                ))} </div>
                <div style={{backgroundColor: "#ef9a9a", color: ""}}>
                    <Comments productid={this.state.itemid} username={this.state.username} />
                    </div>

                <Footer />
                <NotificationContainer/>
            </div>
            </div>
        )
    }
}
export default connect(null, {addBasket,addToWatchList,placeOrder})(ProductDetails);
