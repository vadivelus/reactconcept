import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState={brands:[]};
const Brandslice = createSlice({
    name:'brandname',
    initialState,
    reducers:{
        setBrands:((state,action)=>
        {
            state.brands=[...state.brands, action.payload]
        }),
    }
});

export const {setBrands} = Brandslice.actions
export default Brandslice.reducer