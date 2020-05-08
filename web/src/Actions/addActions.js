import {ADD_PRODUCT_TO_BACKET} from "./types";

export const addBasket = (productName, price, avaliable) => {
    return function (dispatch) {
        console.log("Adding to the Backet")
        console.log("Product", productName)
        console.log("price", price)
        console.log("avaliable", avaliable)

        dispatch({
            type: ADD_PRODUCT_TO_BACKET,
            payload: {name :productName, price: price, avaliable: avaliable}
        })
    }


}