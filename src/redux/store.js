import { configureStore } from '@reduxjs/toolkit';
import thes from './thesSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        thes : thes,
        cart : cart
    },
})