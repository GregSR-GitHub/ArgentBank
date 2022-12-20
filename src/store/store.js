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

export const userLogout = () => ({ type: "logout" });

// Reducer 
function reducer(state, action) {

    if (action.type === "newToken") {
        const newToken = action.payload.token;
        return {
            ...state,
            token: newToken
        };
    }
    if (action.type === "getProfile") {
        
        const newProfile = action.payload.profile;
        return {
            ...state,
            profile: newProfile
        };
    }
    if (action.type === "logout") {
        return initialState;
    }
    return state;
}

// Store

export const store = createStore(reducer, initialState);
