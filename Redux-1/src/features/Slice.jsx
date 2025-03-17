import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name : "counter",
    initialState : {
        count : 0
    },
    reducers : {
        incr : (state,action)=>{
          state.count += 1
        },
        decr : (state,action)=>{
            state.count -= 1
        }
    }
})
export const {incr,decr} = counter.actions
export default counter.reducer
