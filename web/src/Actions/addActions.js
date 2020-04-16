import {ADD_PRODUCT_TO_BACKET} from "./types";

export const addBasket = () => {
    return (dispatch) => {
        console.log("Adding to the Backet")
        dispatch({
            type: ADD_PRODUCT_TO_BACKET
        })
    }


}