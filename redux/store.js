import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userSlice from './userSlice'

const combinedReducers = combineReducers({
    user : userSlice
});

export const store = () =>
    configureStore({
        reducer: combinedReducers,
    });

export const wrapper = createWrapper(store);
