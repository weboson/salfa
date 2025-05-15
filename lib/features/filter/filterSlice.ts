'use client'
import { createSlice } from '@reduxjs/toolkit'

export interface filterState {
    filterToFavorites: "favorite" | "all" | "headphones" | "gamepad"
}
// начальное состояние данных
const initialState: filterState = {
    filterToFavorites: "all" // filterToFavorites: 'favorite'
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addSelect: (state, action) => {
            state.filterToFavorites = action.payload;
        },
        removeSelect: (state) => {
            state.filterToFavorites = "all"
        },
    },
})

export const { addSelect, removeSelect} = filterSlice.actions;

export default filterSlice.reducer;