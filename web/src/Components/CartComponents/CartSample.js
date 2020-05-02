import React, {useState} from "react";
import sample1 from '../../img/sample1.jpg'
import sample2 from '../../img/sample2.jpg'
import sample3 from '../../img/sample3.jpg'
import {addBasket} from "../../Actions/addActions";
import {connect} from 'react-redux';
import Product from '../CartComponents/Product'

const products = [
    {
        id:1,
        name: "shirt1",
        description: "wadsefkml",
        price: 100
    },
    {
        id:2,
        name: "shirt2",
        description: "sawdefkml",
        price: 100
    },
    {
        id:3,
        name: "shirt3",
        description: "sefkasml",
        price: 100
    },
    {
        id:4,
        name: "shirt4",
        description: "seawdfkml",
        price: 100

    }

]

const CartSample = (props) => {
    console.log(props)
    
    return (
        <div className='flex-row' >
            <ul>{this.state.cart.map(c => <li> {c.name} } units {c.units}</li>)}</ul>
            {
                products.map(p =>  <Product key={p.id}  {...p}/>)
            }
        {/*// <div className='image' >*/}
        {/*//     <img src={sample1} alt ='' height='10%'/>*/}
        {/*//     <h3> Grey TShirt</h3>*/}
        {/*//     <h3>$15</h3>*/}
        {/*//     <a onClick={() => props.addBasket('sample1')}> Add to Cart</a>*/}
        {/*// </div>*/}
        {/*//     <div className='image'>*/}
        {/*//         <img src={sample2} alt ='' height='10%'/>*/}
        {/*//         <h3> Grey TShirt</h3>*/}
        {/*//         <h3>$15</h3>*/}
        {/*//         <a onClick={() => props.addBasket('sample2')}> Add to Cart</a>*/}
        {/*//     </div>*/}
        {/*//     <div className='image'>*/}
        {/*//         <img src={sample3} alt ='' height='10%'/>*/}
        {/*//         <h3> Grey TShirt</h3>*/}
        {/*//         <h3>$15</h3>*/}
        {/*//         <a onClick={() => props.addBasket('sample3')}> Add to Cart</a>*/}
        {/*//     </div>*/}


        </div>

    )



}
export default connect(null, {addBasket})(CartSample);

