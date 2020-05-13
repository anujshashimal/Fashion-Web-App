import { ADD_PRODUCT_TO_WATCHLIST, REMOVE_PRODUCT_FROM_WATCHLIST} from "./types";

export const addToWatchList = (productName, price, avaliable, discount, image) => {

    return function (dispatch) {
        console.log("Adding to the Backet")
        console.log("Product", productName)
        console.log("price", price)
        console.log("avaliable", avaliable)
        console.log("avaliable", discount)

        dispatch({
            type: ADD_PRODUCT_TO_WATCHLIST,
            payload: {name :productName, price: price, avaliable: avaliable, discount: discount, image:image}
        })
    }
}


export const removeItemFromWathList = ( name, price) => {
    return function (dispatch) {

        dispatch({
            type: REMOVE_PRODUCT_FROM_WATCHLIST,
            payload: {name, price}
        })
    }

}