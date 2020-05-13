import {ADD_PRODUCT_TO_BACKET, ADD_PRODUCT_TO_WATCHLIST, REMOVE_PRODUCT, CLEAT_ALL_DETAILS} from "./types";



export const removeItem = (name, price)=>{
    return function (dispatch) {
        console.log("name is" , name, price)
        dispatch({
            type:REMOVE_PRODUCT,
            payload: {name, price}
        })
    }
}

export const addBasket = (ID,productName, price, avaliable, discount, image) => {

    return function (dispatch) {
        console.log("Adding to the Backet")
        console.log("Product", productName)
        console.log("price", price)
        console.log("avaliable", avaliable)
        console.log("avaliable", discount)

        dispatch({
            type: ADD_PRODUCT_TO_BACKET,
            payload: {productID: ID,name :productName, price: price, avaliable: avaliable, discount: discount, image: image }
        })
    }
}

export const clearDetails = () => {
    return function (dispatch) {

        dispatch({
            type: CLEAT_ALL_DETAILS,
        })
    }
}

