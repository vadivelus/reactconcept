import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {fruits:[]};
const fruitslice = createSlice({
    name:'fruitslice',
    initialState,
    reducers:{
        setFruites:((state, action)=>
        {
            state.fruits = [...state.fruits, action.payload]
            // state.push(action.payload)
        }),
        deleteFruites:((state, action)=>
        {
            state.fruits = state.fruits.filter((fruit, index)=> index !== action.payload)
            
        })
    }
})

export const {setFruites, deleteFruites} = fruitslice.actions;

export default fruitslice.reducer