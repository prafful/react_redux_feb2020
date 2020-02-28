import { combineReducers } from "redux";
import productsData from "./reducer-products";
import friendsData from "./reducer-friends";
import oneProductClickedAndReceived from "./reducer-productclicked";
import getRemoteUsers from "./reducer-remote-users";

const allReducers = combineReducers({
    products1: productsData,
    friends1: friendsData,
    clickedProduct: oneProductClickedAndReceived,
    allremoteUsers: getRemoteUsers
})

export default allReducers