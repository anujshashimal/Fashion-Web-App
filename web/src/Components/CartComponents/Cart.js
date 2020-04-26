import React, {useState} from 'react';
import {addBasket} from "../../Actions/addActions";
import {connect} from 'react-redux';
import {Switch} from "react-router-dom";
import './Styles/Style..css';

const Cart = (props) =>{
    console.log(props)
    return (
        <div>
            <header>
            <p>Hello I'm Cart</p>
            <p>Hello I'm Cat</p>
            <button type="button" className="btn btn-primary"onClick={props.addBasket}>Add to Cart</button>
        </header>
        </div>
    )
}

export default connect(null, {addBasket})(Cart);
