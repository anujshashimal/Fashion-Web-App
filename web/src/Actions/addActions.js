import {ADD_PRODUCT_TO_BACKET} from "./types";

export const addBasket = (productName) => {
    return function(dispatch)  {
        console.log("Adding to the Backet")
        console.log("Product" , productName)

        dispatch({
            type: ADD_PRODUCT_TO_BACKET,
            payload: productName
        })
    }


}