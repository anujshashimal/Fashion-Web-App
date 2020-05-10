import {GET_NUMBERS_TO_WATCHLIST, ADD_PRODUCT_TO_WATCHLIST} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    items:[],
    isAd:false
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
                items : [
                    ...state.items,
                    action.payload,
                ]
            };

        case GET_NUMBERS_TO_WATCHLIST:
            return {
                backetNumbers: state.backetNumbers + 1
            }
        default:
            return state;
    }

}