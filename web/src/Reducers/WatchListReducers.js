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







/*
I am going to explane how the quality attributes were affected by our
 system except we mention quality attributes

//reusability
how the reusability is perform from our system

//maintanability
Like other architectures //maintanability is very important qulaity attributes in our architectre.

as with other patterns, a well-structured design makes it easier to make
modifications when updates or upgrades are done. How the our system is achieve this target
Solution is MVVM used, different kind of components, then they can manage the components in efficient way
Then,
A clean separation of different kinds of code should make it easier to
go into one or several of those more granular and focused parts and make changes without worrying.

That means you can remain agile and keep moving out to new releases quickly.


//testability
our architecture is based on the ui based. Then They save components style. It's easy to testing in
differnt pharses
You can test it without awkward UI automation and interaction.
 the pattern enables automated unit testing of code and minimizes
the need for UI-based testing.



//
when developing the apps uisng react native they can manage the state using this mvvm architecture.

 */





















