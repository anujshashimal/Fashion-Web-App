import {ADD_PRODUCT_TO_BACKET, CLEAR_PRODUCT, GET_NUMBERS_IN_BASKET} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    withDiscartCost: 0,
    getdiscount: 0,
    items:[],
    productSelected:[]
}

export default (state = initialState, action) =>{
    const {payload} = action
    switch(action.type) {
        case ADD_PRODUCT_TO_BACKET:
            let addQuntity = {...state.items[payload] }
            console.log(addQuntity)
            addQuntity.numbers += 1;
            addQuntity.incart = true;
            console.log(addQuntity);
            return{
                    ...state,
                    backetNumbers: state.backetNumbers + 1,
                    cartCost: state.cartCost + payload.price,
                    getdiscount: state.cartCost * payload.discount * (1/100),
                    withDiscartCost : state.cartCost - ( (state.cartCost) * payload.discount * (1/100)),
                    items : [
                        ...state.items,
                        action.payload,
                    ]
            };

            case GET_NUMBERS_IN_BASKET:
                    return {
                        backetNumbers: state.backetNumbers + 1
                    }
        case CLEAR_PRODUCT:
                    return {
                        ...state
            }
        default:
            return state;
    }

}