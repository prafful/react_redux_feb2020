import { combineReducers } from "redux";
import productsData from "./reducer-products";
import friendsData from "./reducer-friends";

const allReducers = combineReducers({
    products1: productsData,
    friends1: friendsData
})

export default allReducers