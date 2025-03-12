import { createSlice } from "@reduxjs/toolkit";

const initialState =[];

export const myslice = createSlice({
    name:'uniquecustomerslice',
    initialState,
    reducers:{
        setcustomerrdx(state, action){  //reducer fucntion with custom name, state -> what we have to dispatch the action, action-> wen dispatch we pass param values
            state.push(action.payload)
        },
        deletecustomer(state, action)
        {
            state =state.filter((cust, index)=> index !== action.payload);            
        }
    }
});

export const {setcustomerrdx, deletecustomer}= myslice.actions;

export default myslice.reducer;