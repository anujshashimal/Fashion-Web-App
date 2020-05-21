import {
    ADD_PRODUCT_TO_BACKET,
    ADD_PRODUCT_TO_WATCHLIST,
    INCREASE_QUANITY,
    GET_NUMBERS_IN_BASKET,
    REMOVE_PRODUCT,
    CLEAT_ALL_DETAILS,
    DECREASE_QUANITY, PLACE_ORDER_DIR
} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    withDiscartCost: 0,
    getdiscount: 0,
    items: [],
    showItem: false,
}

export default (state = initialState, action) =>{
    const {payload} = action

    switch(action.type) {
        case ADD_PRODUCT_TO_BACKET:
            // let addQuntity = {...state.items[payload]}
            // console.log(addQuntity)
            // addQuntity.numbers++;
            // console.log(addQuntity)
            // console.log(payload)
            state.items.map((itemss, index)=>{
                console.log(itemss)
                console.log(payload.productID)
                if(payload.productID === itemss.productID){
                        itemss.counter++
                        // state.backetNumbers = itemss.counter
                }

            })

            if(payload.counter == 0){
                payload.counter =1
            }

                    return {
                        ...state,
                        backetNumbers:  state.backetNumbers+1,
                        // cartCost: state.cartCost + (action.payload.price * action.payload.counter),
                        // backetNumbers: state.backetNumbers +1,
                        cartCost: state.cartCost + action.payload.price * 1,
                        getdiscount: state.cartCost * action.payload.discount * (1 / 100),
                        withDiscartCost: state.cartCost - ((state.cartCost) * action.payload.discount * (1 / 100)),
                        items: [
                            ...state.items,
                            {...payload}
                        ]
                    }


            case GET_NUMBERS_IN_BASKET:
                    return {
                        backetNumbers: state.backetNumbers + 1
                    }
        case REMOVE_PRODUCT:
            const id = action.payload.id
            let deletedItem = state.items.findIndex(item => item.id === action.id);
            state.items.splice(deletedItem, 1)

            return {
                ...state,
                ...state.items,
                backetNumbers: state.backetNumbers - 1,
                cartCost: state.cartCost - payload.price

            }

        case INCREASE_QUANITY:
            console.log(payload)
            state.items.map((itemss, index)=>{
                console.log(itemss.productID)
                console.log(action.payload.ID)
                if(itemss.productID == payload.ID){
                    itemss.counter = itemss.counter +1;


                }})

            return {
                ...state,
                backetNumbers: state.backetNumbers + 1,
                cartCost: state.cartCost + payload.price
            }
        case DECREASE_QUANITY:
            console.log(payload)
            state.items.map((itemss, index)=>{
                console.log(itemss.productID)
                console.log(action.payload.ID)
                if(itemss.productID == payload.ID){
                    if(itemss.counter >= 0){
                    itemss.counter = itemss.counter -1;
                    }
                    console.log(itemss.counter)
                }
            })
            return {
                ...state,
                backetNumbers: state.backetNumbers - 1,
                cartCost: state.cartCost - payload.price
            }
        case PLACE_ORDER_DIR:
            return {
                ...state,
                cartCost: payload.price,
                getdiscount: payload.price * payload.discount * (1 / 100),

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