import {GET_NUMBERS_IN_BASKET} from "./types";

export const getNumbers = function() {
    return function(dispatch) {
        console.log("Getting all Numbers")
        dispatch({
            type: GET_NUMBERS_IN_BASKET

        })

    }

}