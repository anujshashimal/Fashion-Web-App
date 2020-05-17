import {PLACE_ORDER_DIR} from "../Actions/types";

const initialState = {
    cartCost: 0,
    show: false
}

export default (state = initialState, action) => {
    const {payload} = action

    switch (action.type) {
        case PLACE_ORDER_DIR:
        return{
            ...state,
            cartCost : state.cartCost + payload.price
        }

        default :
            return{
                ...state
            }
    }

}
