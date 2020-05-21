import { ADD_PRODUCT_TO_WATCHLIST, REMOVE_PRODUCT_FROM_WATCHLIST} from "./types";
import React from "react";

export const addToWatchList = (userID,ID,productName, price, avaliable, discount, image, counter) => {

    return function (dispatch) {
        console.log("Adding to the Backet")
        console.log("Product", productName)
        console.log("price", price)
        console.log("avaliable", avaliable)
        console.log("avaliable", discount)

        dispatch({
            type: ADD_PRODUCT_TO_WATCHLIST,
            payload: {userID: userID, productID: ID,name :productName, price: price, avaliable: avaliable, discount: discount, image:image, counter: counter}
        })


    }


}


export const removeItemFromWathList = ( name, price) => {

    console.log(name)
    return function (dispatch) {
        dispatch({
            type: REMOVE_PRODUCT_FROM_WATCHLIST,
            payload: {name, price}
        })
    }
}