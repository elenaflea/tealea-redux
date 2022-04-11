import { createSlice } from '@reduxjs/toolkit';

export const ingredientsSlice = createSlice( {

    name: 'ingredients',
    initialState : {
        showAll : 'tout'
    }, 
    reducers : {
        showIngredients: (state, action) => {
            state.selectedCategory = action.payload
          },
    }
})


export const { showIngredients } = ingredientsSlice.actions;
export const getIngredients = state => state.ingredients.selectedCategory;
export default ingredientsSlice.reducer;