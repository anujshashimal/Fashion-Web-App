import React, {useState} from 'react';
import {addBasket} from "../../Actions/addActions";
import {connect} from 'react-redux';
import {Switch} from "react-router-dom";

const Cart = (props) =>{
    console.log(props)

    const [numberBasket, settnumberBacket] = useState(0);

    const addToBasket = () => {
        settnumberBacket(numberBasket +1);
    }

    return (
        <div>

            <header>
            <p>Hello I'm Cartt</p>
            <button type="button" className="btn btn-primary"onClick={addToBasket}>Add to Cart</button>

            <h1> Current Numbers in Cart {numberBasket}</h1>
        </header>
        </div>


    )


}

export default connect(null, {addBasket})(Cart);
