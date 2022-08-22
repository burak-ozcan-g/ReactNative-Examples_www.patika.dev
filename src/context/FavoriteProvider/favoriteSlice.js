import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoriteSlice = createSlice({
    name: "favoriteJobs",
    initialState,
    reducers: {
        addJob: (state, action) => {
            const newFavorite = action.payload.job
            if (state.every((job) => job.id !== newFavorite.id)) {
                state.push(newFavorite)
            }
        },
        removeJob: (state, action) => {
            return state.filter((job) => job.id !== action.payload.id)
        }
    }
})

export const { addJob, removeJob } = favoriteSlice.actions;

export default favoriteSlice.reducer;