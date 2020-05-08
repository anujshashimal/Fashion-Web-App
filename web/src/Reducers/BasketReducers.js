import {ADD_PRODUCT_TO_BACKET, GET_NUMBERS_IN_BASKET} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    numbers: 0,
    incart: false,
    items:{}
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case ADD_PRODUCT_TO_BACKET:
            let addQuntity = {...action.payload}

            addQuntity.numbers += 1;
            addQuntity.incart = true;
            console.log(addQuntity)

            return{
                    ...state,
                    backetNumbers: state.backetNumbers + 1,
                    cartCost: state.cartCost + action.payload.price,
                    items : {
                        [action.payload] : addQuntity
                    }
            }
            // return {
            //     ...state,
            //     backetNumbers: state.backetNumbers + 1,
            //     // cartCost: state.cartCost + state.products[action.payload].price,
            //     products: {
            //         ...state.products,
            //         [action.payload]: addQuntity,
            //     }
            // }
            case GET_NUMBERS_IN_BASKET:
                    return {
                        backetNumbers: state.backetNumbers + 1
                    }
        default:
            return state;
    }

}