import {combineReducers} from "redux";
import backetReducers from './BasketReducers';

export default combineReducers({
    basketState : backetReducers

})