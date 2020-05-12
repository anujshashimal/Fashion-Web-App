import {ADD_PRODUCT_TO_BACKET, ADD_PRODUCT_TO_WATCHLIST, INCREASE_QUANITY, GET_NUMBERS_IN_BASKET, REMOVE_PRODUCT} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    withDiscartCost: 0,
    getdiscount: 0,
    numbers: 0,
    items:[],
    showItem: false,
    productSelected:[]
}

export default (state = initialState, action) =>{
    const {payload} = action

    switch(action.type) {

        case ADD_PRODUCT_TO_BACKET:
            let addQuntity = [...state.items]
            console.log(addQuntity)
            addQuntity.numbers += 1;
            addQuntity.incart = true;
            console.log(addQuntity);
            return{
                    ...state,
                    backetNumbers: state.backetNumbers + 1,
                    cartCost: state.cartCost + action.payload.price,
                    getdiscount: state.cartCost * payload.discount * (1/100),
                    withDiscartCost : state.cartCost - ( (state.cartCost) * action.payload.discount * (1/100)),
                    items : [
                        ...state.items,
                        payload
                    ]
            };

            case GET_NUMBERS_IN_BASKET:
                    return {
                        backetNumbers: state.backetNumbers + 1
                    }
        case REMOVE_PRODUCT:
                    return {
                        ...state,
                        backetNumbers: state.backetNumbers - 1,

                    }
        case INCREASE_QUANITY:

            let addQuntityy = [action.payload.numbers]

            return {

                    }
        default:
            return state;
    }

}