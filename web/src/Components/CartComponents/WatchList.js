import React from 'react';
import {connect} from 'react-redux';
import img from '../../img/sample1.jpg'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import './Styles/Style..css';
import Hea from "../CommonComponents/header";
import Foo from "../CommonComponents/footer";
import {Link, Redirect} from "react-router-dom";
import {MDBBtn, MDBCloseIcon} from "mdbreact";
import {addBasket} from "../../Actions/addActions";
import {addToWatchList} from "../../Actions/addWatchList";


const WatchList = ({watchListProps, basketProps}) => {
    console.log(watchListProps)
    console.log(basketProps)

    let watchListItems = []
    Object.keys(watchListProps.WatchListitems).forEach( function (item) {
        console.log(item)
        watchListItems.push(watchListProps.WatchListitems[item])
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

    const addCost = () =>{
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
                            <Link type="button" className="btn btn-secondary" onClick={ () => addCost()}>Add Items To Cart
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
    watchListProps : state.watchListState,
    basketProps : state.basketState,
})

export default connect(mapStateToPropss)(WatchList, addBasket);