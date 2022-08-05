import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        signup : (state,action) => state.user =  action.payload,
        logout : (state) => state.user =  null
    }
})

export const {signup,logout} = userSlice.actions

export default userSlice.reducer