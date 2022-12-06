import { createStore } from 'redux';

// State

const initialState = {
    token: ""
}

// Actions

export const newToken = (token) => ({
    type: "newToken",
    payload: { token: token },
});

// Reducer 
function reducer(state, action) {

    if (action.type === "newToken") {
        // ... il faut inverser la propriété playing du state
        const newToken = action.payload.token;
        return {
            ...state,
            token: newToken
        };
    }
    return state;
}

// Store

export const store = createStore(reducer, initialState);
