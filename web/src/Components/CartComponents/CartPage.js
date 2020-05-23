import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import img from '../../img/sample1.jpg'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import './Styles/Style..css';
import Hea from "../CommonComponents/NavbarPage";
import Foo from "../CommonComponents/footer";
import PlaceOrder from '../CartComponents/PlaceOrder';
import {Link, Redirect} from "react-router-dom";
import { MDBBtn, MDBCloseIcon  } from "mdbreact";
import {productQuntity} from '../../Actions/ProductQuantity'
import {removeItem }from '../../Actions/addActions'
import { MDBTable, MDBTableBody, MDBTableHead ,MDBCardTitle} from 'mdbreact';

const queryString = require('query-string');

const CartPage = (props) =>{
    // console.log(basketProps)
    console.log(props)
    let productInCart = [];
    let filteredArr = [];

    let prody = []
    const [username, setUsername] = useState('');

    var values = queryString.parse(props.location.search)
    console.log(props.location.search)
    console.log(values.item)
    console.log(values.username)
    // this.setState({
    //     itemid: values.item,
    //     username: values.username,
    // })

    useEffect(() => {
            setUsername(values.username)
    }, []);

    Object.keys(props.basketProps.items).forEach( function (item, index) {
        productInCart.push(props.basketProps.items[item])

    })
    console.log(productInCart)
    filteredArr = productInCart.reduce((acc, current) => {
        const x = acc.find(item => item.productID === current.productID);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, [])




    filteredArr = filteredArr.map( (product, index) => {
        console.log(product)
        console.log(index)
        return(
            <tr>
                <button type="button" className="close" aria-label="Close" onClick={() => props.removeItem(index, product.price, product.counter)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src={product.image} alt="Product" style={{height: "100px" }} />
                <td className="tabletext">{product.name}</td>
                <td className="tabletext">
                    <i onClick={() =>props.productQuntity("DECREASE", product.productID, product.price, product.discount)} className="fas fa-angle-left"></i>&nbsp;&nbsp;
                    {product.counter}&nbsp;&nbsp;
                    <i onClick={() =>props.productQuntity("INCREASE",product.productID,product.price , product.discount)} className="fas fa-angle-right"></i>
                </td>
                <td className="tabletext">{product.avaliable}</td>
                <td className="tabletext">{product.discount} %</td>
                <td className="tabletext">{product.price}</td>
            </tr>
        )})


    const red = () =>{
        return <Redirect to={"/PlaceOrder"}/>
    }

    return (

        <div>
            <Hea  username={username}/>
            {console.log(username)}

            <div className='container'>

                <header>

                    <div className='product-header'>
                        Cart Items
                    </div>
                    <MDBTable>
                        <MDBTableHead color="red darken-3" textWhite>
                            <tr>
                                <th className="tabletext">Image</th>
                                <th className="tabletext">Name</th>
                                <th className="tabletext">Quantity</th>
                                <th className="tabletext">Avaliable</th>
                                <th className="tabletext">Discount</th>
                                <th className="tabletext">Price</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {filteredArr}
                        </MDBTableBody>
                    </MDBTable>
                    <div className='basketTotalContainer'>
                        <hr/>
                        <h4 className='basketTotalTitle'>Total Amount to Pay: </h4>
                        <h4 className='basketTotal'>Rs. {props.basketProps.cartCost},00 </h4>

                        <Link type="button" className="btn btn-red darken-3" to={'PlaceOrder?username='+username}  >Place Order
                        </Link>
                    </div>
                </header>
            </div>
            <Foo />
        </div>
    )
}
const mapStateToPropss = state => ({
    basketProps : state.basketState,
    watchListProps : state.watchListState
})

export default connect(mapStateToPropss, {productQuntity, removeItem})(CartPage);
