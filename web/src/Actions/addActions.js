import {ADD_PRODUCT_TO_BACKET} from "./types";

<<<<<<< HEAD
export const addBasket = (productName) => {
=======
export const addBasket = () => {
>>>>>>> e3a68c0f16f2c54e547b679eb1af0a6ebcad8573
    return function(dispatch)  {
        console.log("Adding to the Backet")
        console.log("Product" , productName)

        dispatch({
            type: ADD_PRODUCT_TO_BACKET,
            payload: productName
        })
    }


}