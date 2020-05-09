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
    let sg =[];


    Object.keys(basketProps.items).forEach( function (item) {
        console.log(item)
        productInCart.push(basketProps.items[item])
        console.log(productInCart)
    })

    productInCart = productInCart.map( (product, index) => {
        console.log(product)
        return(

                <tr key={product.name}>
                    <th> {index} </th>

                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.avaliable}</td>
                </tr>

        )
    })
    return (
        <div>
            <Hea />
                <div className='container'>
                    <header>

                    <div className='container-products'>
                    <div className='product-header'>
                        <h5 className='product-title'> PRODUCT  </h5>
                        <h5 className='product-sm'> PRICE </h5>
                        <h5 className='quntity'> QUNTITY </h5>
                        <h5 className='total'> TOTAL  </h5>
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

                    </div>

                </div>
            </header>
        </div>
            <Foo />
        </div>
    )
}
const mapStateToPropss = state => ({
    basketProps : state.basketState
})

export default connect(mapStateToPropss)(CartPage);
