import {CLEAR_PRODUCT} from './types';

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log(name)

        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        })
    }
}