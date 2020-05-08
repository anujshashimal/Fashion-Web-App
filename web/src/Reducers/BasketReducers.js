import {ADD_PRODUCT_TO_BACKET, GET_NUMBERS_IN_BASKET} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    items:{

    }
}

export default (state = initialState, action) =>{
    const {payload} = action
    switch(action.type) {
        case ADD_PRODUCT_TO_BACKET:
            let addQuntity = {...state}

            addQuntity.numbers += 1;
            addQuntity.incart = true;
            console.log(addQuntity);
            return{
                    ...state,
                    backetNumbers: state.backetNumbers + 1,
                    cartCost: state.cartCost + payload.price,
                    items : {...payload},
            };

            case GET_NUMBERS_IN_BASKET:
                    return {
                        backetNumbers: state.backetNumbers + 1
                    }
        default:
            return state;
    }

}