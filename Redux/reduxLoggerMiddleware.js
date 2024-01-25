const redux = require('redux') ;
const reduxLogger = require("redux-logger"); 




const createStore = redux.createStore; 
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


const cakeInitialState = {
    numOfCakes : 10 
}

const iceCreamInitialState = {
    numOfIceCreams : 10 
}




function buyCake(){
    return {
        type : BUY_CAKE , 
    }
}

function buyIceCream(){
    return {
        type : BUY_ICECREAM , 
    }
}


const cakeReducer =(state  = cakeInitialState, action )=>{
    switch(action.type){
        case BUY_CAKE : 
            return {
                ...state ,
                numOfCakes : state.numOfCakes - 1 
            }
        default : 
            return state
    }
}

const iceCreamReducer =(state  =iceCreamInitialState , action )=>{
    switch(action.type){
        case BUY_ICECREAM : 
            return {
                ...state ,
                numOfIceCreams : state.numOfIceCreams - 1 
            }
        default : 
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer , applyMiddleware(logger)) ; 
console.log("initial state " , store.getState());
const unSubscribe = store.subscribe(()=>console.log("updated state " , store.getState())) ; 
store.dispatch( buyCake() );
store.dispatch( buyCake() );
store.dispatch( buyIceCream() );
store.dispatch( buyIceCream() );
store.dispatch(buyCake());

unSubscribe()

