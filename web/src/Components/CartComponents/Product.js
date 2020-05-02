import React from 'react'
import {connect} from "react-redux";
import {addBasket} from "../../Actions/addActions";

const Product = (props ) => {
    console.log(props)
    return (

        <article className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10' id={props.id} >
        <div className='tc'>
            <img src ="https://tachyons.io/img/avatar_1.jpg" className='br-100 h4 w4 dib ba b--black-05 pa1'/>
            {/*<a onClick={() => props.addBasket("name")}> Add to Cart</a>*/}
            <button onClick={() => props.addBasket(props.name)}> Add to Cart</button>
        </div>
        </article>
    )

}

export default connect(null, {addBasket})(Product);
