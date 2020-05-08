import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import img from '../../img/sample1.jpg'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import './Styles/Style..css';
import Hea from "../CommonComponents/header";
import Foo from "../CommonComponents/footer";
const CartPage = ({basketProps}) =>{

    console.log(basketProps)
    let productInCart = [];

   console.log(basketProps)
    Object.keys(basketProps.items).forEach( function (item) {
        console.log(item)
        productInCart.push(basketProps.items)
        console.log(productInCart)
    })

    productInCart = productInCart.map( (product, index) => {
        return(
            <Fragment>
                <ion-icon name='arrow-back-circle-outline'></ion-icon>
                <div className='product'> <ion-icon name = 'close-circle'></ion-icon> <img src={img[index]} />
                <span className='sm-hide' > ${product.name} </span>
                </div>
                <div className='price sm-hide'> ${product.price},00</div>
                <div className='quntity'>
                    <ion-icon className = 'decrease' name='arrow-back-circle-outline'></ion-icon>
                    <span> </span>
                    <ion-icon className = 'increase' name='arrow-forward-circle-outline'></ion-icon>
                </div>
                <div className='total'> ${product.price},00 </div>
            </Fragment>
        )

    })
    return (
        <div>
            <Hea />
            <header>
                <div className='container-products'>
                    <div className='product-header'>
                        <h5 className='product-title'> PRODUCT  </h5>
                        <h5 className='product-sm'> PRICE </h5>
                        <h5 className='quntity'> QUNTITY </h5>
                        <h5 className='total'> TOTAL  </h5>
                    </div>
                    <div className='products'>
                        {productInCart}
                    </div>
                    <div className='basketTotalContainer'>
                        <h4 className='basketTotalTitle'>Basket Total </h4>
                        <h4 className='basketTotal'>{basketProps.cartCost},00 </h4>

                    </div>
                </div>
            </header>
            <Foo />
        </div>
    )
}
const mapStateToPropss = state => ({
    basketProps : state.basketState
})

export default connect(mapStateToPropss)(CartPage);
