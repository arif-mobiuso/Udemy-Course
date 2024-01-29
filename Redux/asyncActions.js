const redux = require('redux');
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;


const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const initialState = {
    loading: false,
    users: [],
    error: ''
}


const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: error
    }
}


const fectchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest()); 
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const users = res.data; 
                dispatch(fetchUsersSuccess(users))
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err))
            })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: state.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: state.error
            }
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware)); 


store.subscribe(() => console.log("initial state ", store.getState())); 
store.dispatch(fectchUsers());
