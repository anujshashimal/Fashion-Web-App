import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const CartPage = ({basketProps}) =>{
    console.log(basketProps.products)

    let productsinCart = [];

    Object.keys(basketProps.products).forEach( function (item) {
        console.log(item)
        console.log(basketProps.products[item].incart)
        if(basketProps.products[item].incart){
            productsinCart.push(basketProps.products.item)
        }
        console.log(productsinCart)

    })

    productsinCart = productsinCart.map((productes, index) =>{
        return (
            <Fragment>


            </Fragment>

        )
    })

    return (
        <div>
            <header>
                <div className='container'>
                    <div className='product-header'>
                        <h5 className='product-title'> PRODUCT </h5>
                        <h5 className='product-sm'> PRICE</h5>
                        <h5 className='quntity'> QUNTITY</h5>
                        <h5 className='total'> TOTAL </h5>
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
