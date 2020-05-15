import React,{useState} from 'react';
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
import {removeItem }from '../../Actions/addActions'
import { MDBTable, MDBTableBody, MDBTableHead ,MDBCardTitle} from 'mdbreact';
import editimage from "../StoreManagerComponents/edit.png";
import deleteimage from "../StoreManagerComponents/delete.png";

const CartPage = ({basketProps, productQuntity, removeItem}) =>{
    console.log(basketProps)
    let productInCart = [];
    let filteredArr = [];

    let prody = []
    const [count, setCount] = useState(0);


    Object.keys(basketProps.items).forEach( function (item, index) {
            productInCart.push(basketProps.items[item])

    })

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
                    <button type="button" className="close" aria-label="Close" onClick={() => removeItem(index, product.price)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <img src={'http://localhost:5000/uploads/'+product.image} alt="Product" style={{height: "100px" }} />
                    <td className="tabletext">{product.name}</td>
                    <td className="tabletext">
                    <i onClick={() =>productQuntity("DECREASE", product.productID, product.price)} className="fas fa-angle-left"></i>

                        {product.counter}
                        <i onClick={() =>productQuntity("INCREASE",product.productID,product.price)} className="fas fa-angle-right"></i>

                    </td>
                    <td className="tabletext">{product.avaliable}</td>
                    <td className="tabletext">{product.discount}</td>
                    <td className="tabletext">{product.price}</td>

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

                    <div className='product-header'>
                        Cart Page
                    </div>
                        <MDBTable>
                            <MDBTableHead color="deep-purple" textWhite>
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
                            <Link type="button" className="btn btn-secondary" to='PlaceOrder'  >Place Order
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
