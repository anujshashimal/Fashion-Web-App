import {combineReducers} from "redux";
import backetReducers from './BasketReducers';
import WatchListReducers from './WatchListReducers';
import PlaceOrderReducers from './PlaceOrderDir';

export default combineReducers({
    basketState : backetReducers,
    watchListState :WatchListReducers,
    PlaceOrderState: PlaceOrderReducers
})