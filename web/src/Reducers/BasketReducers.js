import {
    ADD_PRODUCT_TO_BACKET,
    ADD_PRODUCT_TO_WATCHLIST,
    INCREASE_QUANITY,
    GET_NUMBERS_IN_BASKET,
    REMOVE_PRODUCT,
    CLEAT_ALL_DETAILS
} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    withDiscartCost: 0,
    getdiscount: 0,
    items: [],
    showItem: false,
    'shouldReload': false,
    'chosenIds': [],
}

export default (state = initialState, action) =>{
    const {payload} = action

    switch(action.type) {

        case ADD_PRODUCT_TO_BACKET:
            let addQuntity = {...state.items[payload]}
            console.log(addQuntity)
            addQuntity.numbers += 1;
            addQuntity.incart = true;
            console.log(addQuntity)
            console.log(payload)

            return{
                    ...state,
                    backetNumbers: state.backetNumbers + 1,
                    cartCost: state.cartCost + action.payload.price,
                    getdiscount: state.cartCost * action.payload.discount * (1/100),
                    withDiscartCost : state.cartCost - ( (state.cartCost) * action.payload.discount * (1/100)),
                    items : [
                        ...state.items,
                        {...payload, ...addQuntity}
                    ]
            };

            case GET_NUMBERS_IN_BASKET:
                    return {
                        backetNumbers: state.backetNumbers + 1
                    }
        case REMOVE_PRODUCT:
                    return {
                        ...state,
                        ...state.items,
                        backetNumbers: state.backetNumbers - 1,
                        items: state.items.filter((item, index) => index !== action.payload.name),
                        cartCost: state.cartCost - payload.price
                    }
        case INCREASE_QUANITY:
            let addQuntityy = [action.payload.numbers]
            return {
                    }

        case CLEAT_ALL_DETAILS:
            return{
                backetNumbers: 0,
                cartCost: 0,
                withDiscartCost: 0,
                getdiscount: 0,
                numbers: 0,
                items:[],
                showItem: false,
            }

        default:
            return state;
    }

}