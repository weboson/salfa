'use client'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface favoritesState {
    favorites: Array<number>
}
// начальное состояние данных
const initialState: favoritesState = {
    favorites: []
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(item => item !== action.payload);
        },
    },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;