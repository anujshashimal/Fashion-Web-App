import {combineReducers} from "redux";
import backetReducers from './BasketReducers';
import WatchListReducers from './WatchListReducers';

export default combineReducers({
    basketState : backetReducers,
    watchListState :WatchListReducers
})