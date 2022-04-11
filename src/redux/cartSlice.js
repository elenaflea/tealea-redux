import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice( {

    name: 'cart',
    initialState : {
        cartItems : []
    }, 
    reducers : {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime();

            state.cartItems.push( {
                id : timeId,
                theId : action.payload.the.id,
                quantity : action.payload.quantity,
                totalPice : action.payload.quantity *  (Math.round((action.payload.the.price/10 + 2.2)*4) / 4),
                
            })
        },
        removeItemFromCart : (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }
})



export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) =>{
        return cartItems.totalPice + total
    },0)
};

export const getTotalArticles = state => {
    return state.cart.cartItems.length 
};

export const { addItemToCart, removeItemFromCart  } = cartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export default cartSlice.reducer;