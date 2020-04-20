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
<<<<<<< HEAD
            <p>Hello I'm Cart</p>
=======
            <p>Hello I'm Cat</p>
>>>>>>> e3a68c0f16f2c54e547b679eb1af0a6ebcad8573
            <button type="button" className="btn btn-primary"onClick={props.addBasket}>Add to Cart</button>
        </header>
        </div>
    )
}

export default connect(null, {addBasket})(Cart);
