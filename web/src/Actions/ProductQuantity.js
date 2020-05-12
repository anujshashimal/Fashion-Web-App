import {CLEAR_PRODUCT, INCREASE_QUANITY} from './types';

export const productQuntity = (action, name) => {
    return (dispatch) => {
        console.log('INCREASE', name)
        console.log('this action is ', action)
        dispatch({
            type: action === "increase",
            payload: name
        })
    }
}