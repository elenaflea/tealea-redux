import { createSlice } from '@reduxjs/toolkit';

export const thesSlice = createSlice( {

    name: 'thes',
    initialState : {
        selectedCategory : 'tout'
    }, 
    reducers : {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
          },
    }
})


export const { filterCategory } = thesSlice.actions;
export const getSelectedCategory = state => state.thes.selectedCategory;
export default thesSlice.reducer;