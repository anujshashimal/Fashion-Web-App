import {ADD_PRODUCT_TO_BACKET, ADD_PRODUCT_TO_WATCHLIST, REMOVE_PRODUCT, CLEAT_ALL_DETAILS} from "./types";



export const removeItem = (id, price)=>{
    return function (dispatch) {
        console.log("id is" , id)
        console.log("id is" , price)

        dispatch({
            type:REMOVE_PRODUCT,
            payload: {id, price}
        })
    }
}

export const addBasket = (userID,ID,productName, price, avaliable, discount, image, counter) => {

    return function (dispatch) {
        console.log("Adding to the Backet")
        console.log("Product", productName)
        console.log("price", price)
        console.log("avaliable", avaliable)
        console.log("avaliable", discount)
        console.log('Counter is ', counter)
        var numberss;
        dispatch({
            type: ADD_PRODUCT_TO_BACKET,
            payload: {userID: userID, productID: ID,name :productName, price: price, avaliable: avaliable, discount: discount, image: image, counter: counter }
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

