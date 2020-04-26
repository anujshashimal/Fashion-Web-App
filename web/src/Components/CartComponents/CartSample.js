import React from "react";
import sample1 from '../../img/sample1.jpg'
import sample2 from '../../img/sample2.jpg'
import sample3 from '../../img/sample3.jpg'
import {addBasket} from "../../Actions/addActions";
import {connect} from 'react-redux';

const CartSample = (props) => {
    return (
        <div className='container' >
        <div className='image' >
            <img src={sample1} alt ='' height='10%'/>
            <h3> Grey TShirt</h3>
            <h3>$15</h3>
            <a onClick={() => props.addBasket('sample1')}> Add to Cart</a>
        </div>
            <div className='image'>
                <img src={sample2} alt ='' height='10%'/>
                <h3> Grey TShirt</h3>
                <h3>$15</h3>
                <a onClick={() => props.addBasket('sample2')}> Add to Cart</a>
            </div>
            <div className='image'>
                <img src={sample3} alt ='' height='10%'/>
                <h3> Grey TShirt</h3>
                <h3>$15</h3>
                <a onClick={() => props.addBasket('sample3')}> Add to Cart</a>
            </div>


        </div>

    )



}
export default connect(null, {addBasket})(CartSample);

