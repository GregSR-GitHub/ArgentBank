import { createStore } from 'redux';

// State

const initialState = {
    token: "",
    profile: ""
}

// Actions

export const newToken = (token) => ({
    type: "newToken",
    payload: { token: token },
});

export const getProfile = (profile) => ({
    type: "getProfile",
    payload: { profile: profile },
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
    if (action.type === "getProfile") {
        // ... il faut inverser la propriété playing du state
        const newProfile = action.payload.profile;
        return {
            ...state,
            profile: newProfile
        };
    }
    return state;
}

// Store

export const store = createStore(reducer, initialState);
