import React from 'react';
import {connect} from 'react-redux';
import img from '../../img/sample1.jpg'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import './Styles/Style..css';
import Hea from "../CommonComponents/header";
import Foo from "../CommonComponents/footer";
import {Link, Redirect} from "react-router-dom";
import {MDBBtn, MDBCloseIcon} from "mdbreact";


const WatchList = ({watchListProps}) => {
    console.log(watchListProps)

    let watchListItems = []
    Object.keys(watchListProps.items).forEach( function (item) {
        console.log(item)
        watchListItems.push(watchListProps.items[item])
        console.log(watchListItems)
    })


    watchListItems = watchListItems.map( (product, index) => {
        console.log(product)
        return(
            <tr key={product.name}>
                <th> {index} </th>
                <tr/>
                <img src={'http://localhost:5000/uploads/'+product.image} alt="Product" style={{height: "5%" }} />
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.avaliable}</td>
                <td>{product.discount}% discount</td>
                <MDBBtn rounded color="secondary" >Edit</MDBBtn>
                <MDBBtn rounded color="secondary" >Delete</MDBBtn>
            </tr>
        )
    })

    return(
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
                                {watchListItems}
                                </tbody>
                            </table>
                        </div>
                        <div className='basketTotalContainer'>
                            <h4 className='basketTotalTitle'>Basket Total </h4>
                            <h4 className='basketTotal'>{watchListProps.cartCost},00 </h4>
                            <Link type="button" className="btn btn-secondary" to='PlaceOrder'  >Add Items To Cart
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
    watchListProps : state.watchListState
})

export default connect(mapStateToPropss)(WatchList);