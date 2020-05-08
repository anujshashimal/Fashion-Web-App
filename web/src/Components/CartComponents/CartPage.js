import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const CartPage = ({basketProps}) =>{

    console.log(basketProps)
    let productInCart = [];

   console.log(basketProps.items)

    return (
        <div>
            <header>
                <div className='container'>
                    <div className='product-header'>
                        <h5 className='product-title'> PRODUCT {basketProps.name} </h5>
                        <h5 className='product-sm'> PRICE {basketProps.price}</h5>
                        <h5 className='quntity'> QUNTITY {basketProps.avaliable}</h5>
                        <h5 className='total'> TOTAL {basketProps.cartCost} </h5>
                    </div>
                    <div className='products'>
                    </div>
                </div>
            </header>
        </div>
    )
}
const mapStateToPropss = state => ({
    basketProps : state.basketState
})

export default connect(mapStateToPropss)(CartPage);
