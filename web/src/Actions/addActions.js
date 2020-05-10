import {ADD_PRODUCT_TO_BACKET, ADD_PRODUCT_TO_WATCHLIST} from "./types";

export const addBasket = (productName, price, avaliable, discount, image) => {

    return function (dispatch) {
        console.log("Adding to the Backet")
        console.log("Product", productName)
        console.log("price", price)
        console.log("avaliable", avaliable)
        console.log("avaliable", discount)

        dispatch({
            type: ADD_PRODUCT_TO_BACKET,
            payload: {name :productName, price: price, avaliable: avaliable, discount: discount, image: image }
        })
    }


}