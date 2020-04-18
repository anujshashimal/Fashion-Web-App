import {ADD_PRODUCT_TO_BACKET, GET_NUMBERS_IN_BASKET} from "../Actions/types";

const initialState = {
    backetNumbers: 0
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case ADD_PRODUCT_TO_BACKET:
            return {
                backetNumbers: state.backetNumbers + 1
            }

        case GET_NUMBERS_IN_BASKET:
            return{
                ...state
            }
        default:
            return state;
    }

}