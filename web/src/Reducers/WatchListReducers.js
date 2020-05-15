import {GET_NUMBERS_TO_WATCHLIST, ADD_PRODUCT_TO_WATCHLIST, REMOVE_PRODUCT_FROM_WATCHLIST} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    WatchListitems:[],
    show: false
}

export default (state = initialState, action) =>{
    const {payload} = action
    switch(action.type) {
        case ADD_PRODUCT_TO_WATCHLIST:
            let addQuntity = {...state}

            addQuntity.numbers += 1;
            addQuntity.incart = true;
            console.log(addQuntity);
            return{
                ...state,
                backetNumbers: state.backetNumbers + 1,
                cartCost: state.cartCost + payload.price,
                isAd: true,
                show: true,
                WatchListitems : [
                    ...state.WatchListitems,
                    action.payload,
                ]
            };

        case GET_NUMBERS_TO_WATCHLIST:
            return {
                backetNumbers: state.backetNumbers + 1
            }

        case REMOVE_PRODUCT_FROM_WATCHLIST:
                return {
                    ...state,
                    ...state.items,
                    backetNumbers: state.backetNumbers - 1,
                    WatchListitems: state.WatchListitems.filter((item, index) => index !== action.payload.name),
                    cartCost: state.cartCost - payload.price
                }

        default:
            return state;
    }

}























