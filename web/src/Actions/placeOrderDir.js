import {PLACE_ORDER_DIR} from "./types";


export const placeOrder = function( productID,discount,price,description, avaliable, counter){
    return (dispatch) => {
    console.log(productID, discount,price, description, avaliable, counter)
    dispatch({
        type: PLACE_ORDER_DIR,
        payload: {productID, description, price,discount, avaliable, counter}
    })

    }
}