import { ADD_PRODUCT_TO_WATCHLIST, REMOVE_PRODUCT_FROM_WATCHLIST} from "./types";
import React from "react";

export const addToWatchList = (watchID,userID,ID,productName, price, avaliable, discount, image, counter) => {

    return function (dispatch) {
        console.log("Adding to the Backet",userID)
        console.log("Product", ID)
        console.log("price", productName)
        console.log("avaliable", price)
        console.log("avaliable", avaliable)
        console.log("avaliable", discount)
        console.log("avaliable", image)
        console.log("avaliable", counter)

        dispatch({
            type: ADD_PRODUCT_TO_WATCHLIST,
            payload: {watchID:watchID, userID: userID, productID: ID,name :productName, price: price, avaliable: avaliable, discount: discount, image:image, counter: counter}
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