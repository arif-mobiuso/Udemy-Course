
import { createStore } from "redux"; 
import cakeReducer from "./cake/cakeReducer";
import { buyCake } from "./cake/cakeActions";

const store = createStore(cakeReducer); 
store.subscribe(() => console.log("initial state", store.getState()));
store.dispatch(buyCake()); 






export default store;