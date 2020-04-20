import {ADD_PRODUCT_TO_BACKET, GET_NUMBERS_IN_BASKET} from "../Actions/types";

const initialState = {
    backetNumbers: 0,
    cartCost: 0,
    products: {
        sample1:{
            name: "sample1",
            price: 15,
            numbers: 0,
            incart: false
        },
        sample2:{
            name: "sample1",
            price: 15,
            numbers: 0,
            incart: false
        },
        sample3:{
            name: "sample1",
            price: 15,
            numbers: 0,
            incart: false
        }
    }
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case ADD_PRODUCT_TO_BACKET:
<<<<<<< HEAD
            let addQuntity = { ...state.products[action.payload]}
            addQuntity.numbers += 1;
            addQuntity.incart = true;
            console.log("Quntity is ", addQuntity)
            return {
                ...state,
                backetNumbers: state.backetNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuntity,

                }
=======
            return {
                backetNumbers: state.backetNumbers + 1
>>>>>>> e3a68c0f16f2c54e547b679eb1af0a6ebcad8573
            }

        case GET_NUMBERS_IN_BASKET:
            return{
                ...state
            }
        default:
            return state;
    }

}