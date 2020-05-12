import React from 'react';
import {connect} from 'react-redux';
import img from '../../img/sample1.jpg'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import './Styles/Style..css';
import Hea from "../CommonComponents/header";
import Foo from "../CommonComponents/footer";
import PlaceOrder from '../CartComponents/PlaceOrder';
import {Link, Redirect} from "react-router-dom";
import { MDBBtn, MDBCloseIcon  } from "mdbreact";
import {productQuntity} from '../../Actions/ProductQuantity'
const CartPage = ({basketProps, productQuntity}) =>{
    console.log(basketProps)
    let productInCart = [];
    let sg =[];


    Object.keys(basketProps.items).forEach( function (item) {
        console.log(item)
        productInCart.push(basketProps.items[item])

        console.log(productInCart)
    })

    const ItemEdit = () => {
        console.log('hello')

    }

    const ItemDelete = () => {
        console.log('hello')

    }


    productInCart = productInCart.map( (product, index) => {
        console.log(product)
        return(
                <tr key={product.name}>
                    <th> {index} </th>
                    <button type="button" className="close" aria-label="Close" onClick={() => productQuntity('increase', product.name)}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <tr/>
                    <img src={'http://localhost:5000/uploads/'+product.image} alt="Product" style={{height: "5%" }} />
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.avaliable}</td>
                    <td>{product.discount}% discount</td>
                    <MDBBtn rounded color="secondary" onClick={() =>ItemEdit()}>Edit</MDBBtn>
                    <MDBBtn rounded color="secondary" onClick={() =>ItemDelete()}>Delete</MDBBtn>
                </tr>

        )
    })


    const red = () =>{
        return <Redirect to={"/PlaceOrder"}/>
    }

    return (
        <div>
            <Hea />

            <div className='container'>
                <header>
                    <div className='container-products'>
                    <div className='product-header'>
                    </div>
                    <div className='products'>
                        <table id='students'>
                        <tbody>
                        {productInCart}
                        </tbody>
                        </table>
                    </div>
                    <div className='basketTotalContainer'>
                        <h4 className='basketTotalTitle'>Basket Total </h4>
                        <h4 className='basketTotal'>{basketProps.cartCost},00 </h4>
                            <Link type="button" className="btn btn-secondary" to='PlaceOrder'  >Place Order
                            </Link>
                    </div>

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

export default connect(mapStateToPropss, {productQuntity})(CartPage);
