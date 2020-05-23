import {INCREASE_QUANITY, DECREASE_QUANITY} from './types';

export const productQuntity = (action, ID, price, discount) => {
    return (dispatch) => {
        console.log('INCREASE', ID)
        console.log('this action is ', price)
        dispatch({
            type: action === "INCREASE" ? INCREASE_QUANITY : DECREASE_QUANITY,
            payload: {action, ID, price,discount}
        })
    }
}