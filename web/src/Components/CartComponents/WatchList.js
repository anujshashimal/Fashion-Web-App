import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import img from '../../img/sample1.jpg'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import './Styles/Style..css';
import Hea from "../CommonComponents/NavbarPage";
import Foo from "../CommonComponents/footer";
import {Link, Redirect} from "react-router-dom";
import {MDBBtn, MDBCloseIcon, MDBTable, MDBTableHead,MDBTableBody} from "mdbreact";
import {removeItemFromWathList} from "../../Actions/addWatchList";
import {addBasket, removeItem} from "../../Actions/addActions";
import {addToWatchList} from "../../Actions/addWatchList";
import {productQuntity} from "../../Actions/ProductQuantity";
import './Styles/WatchList.css'
import axios from "axios";
const WatchList = ({watchListProps, basketProps, removeItemFromWathList}) => {
    console.log(watchListProps)
    console.log(basketProps)

    let watchListItems = [];
    let filteredArr = [];

    Object.keys(watchListProps.WatchListitems).forEach( function (item) {
        console.log(item)
        watchListItems.push(watchListProps.WatchListitems[item])
        console.log(watchListItems)
    })


    filteredArr = watchListItems.reduce((acc, current) => {
        const x = acc.find(item => item.productID === current.productID);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, [])




    console.log(filteredArr)
    filteredArr = filteredArr.map( (product, index) => {
        console.log(product)

        return(
            <tr>
                <button type="button" className="close" aria-label="Close" onClick={() => removeItem(index, product.price)}>
                <span aria-hidden="true">&times;</span>
                </button>
                <img src={product.image} alt="Product" style={{height: "100px" }} />
                <td className="tabletext">{product.name}</td>
                <td className="tabletext">
                    {/*<i onClick={() =>productQuntity("DECREASE", product.productID, product.price)} className="fas fa-angle-left"></i>*/}
                    {product.qty}
                    {/*<i onClick={() =>productQuntity("INCREASE",product.productID,product.price)} className="fas fa-angle-right"></i>*/}
                </td>
                <td className="tabletext">{product.avaliable}</td>
                <td className="tabletext">{product.discount}</td>
                <td className="tabletext">{product.price}</td>
            </tr>
        )})


    const addToCartForPayment = () => {

        Object.keys(watchListProps.WatchListitems).forEach( function (item) {
            console.log(item)
            basketProps.items.push(watchListProps.WatchListitems[item])
            basketProps.backetNumbers = basketProps.backetNumbers+1
            basketProps.cartCost = watchListProps.cartCost
            console.log(basketProps)
        })
    }

    return(


            <div>
                <Hea />
                <div className='container'>
                    <header>
                        <div className='product-header'>
                            Cart Page
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
                            <h4 className='basketTotal'>Rs. {basketProps.cartCost},00 </h4>
                            <Link type="button" className="btn red darken-3" onClick={() => addToCartForPayment()} >Add to Cart
                            </Link>
                        </div>
                    </header>
                </div>
                <Foo />
            </div>
    )}

const mapStateToPropss = state => ({
    watchListProps : state.watchListState,
    basketProps : state.basketState,
})

export default connect(mapStateToPropss, {removeItemFromWathList})(WatchList);





