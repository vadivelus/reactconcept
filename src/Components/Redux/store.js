import React from 'react';
import storage from "redux-persist/lib/storage"; // Default: LocalStorage
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import custreducer from './Slices/Customerslice';
import fruitsinfo from './Slices/Fruitslice';
import brandsinfos from './Slices/Brandslice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

// Combine multiple reducers if needed
const rootReducer = combineReducers({    
    customerinfo:custreducer,
        fruitinfo:fruitsinfo,
        brandsinfo:brandsinfos
  });
  
  // Redux Persist Config
  const persistConfig = {
    key: "root",
    storage,
  };
  
  // Create a persisted reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    devTools:true,
    // reducer:{
    //     customerinfo:custreducer,
    //     fruitinfo:fruitsinfo,
    //     brandsinfo:brandsinfos
    // }
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});



export const persistor = persistStore(store);