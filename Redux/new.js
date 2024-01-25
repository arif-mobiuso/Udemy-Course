const redux = require('redux') ;

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'


const initialState = {
    numOfCakes: 10, 
    numOfIceCreams : 5
}

function performAction(typeOfAction){
    return {
        type : typeOfAction , 
    }
}


const reducer =(state  = initialState, action )=>{
    switch(action.type){
        case BUY_CAKE : 
            return {
                ...state ,
                numOfCakes : state.numOfCakes - 1 
            }
        case BUY_ICE: 
            return {
                ...state, 
                numOfIceCreams : state.numOfIceCreams - 1 
            }
        default : 
            return state
    }
}


const store = createStore(reducer) ; 
console.log("initial state " , store.getState());
const unSubscribe = store.subscribe(()=>console.log("Updated state " , store.getState())) ; 
store.dispatch( performAction(BUY_CAKE));
store.dispatch( performAction(BUY_ICE));
store.dispatch( performAction(BUY_CAKE));

unSubscribe()

