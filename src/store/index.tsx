// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import paymentSlice from './paymentSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    paymentSlice,
    authSlice
});

export default rootReducer;
