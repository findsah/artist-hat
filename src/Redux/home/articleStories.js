import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getStories = createAsyncThunk(
    'articleStories',
    async() => {
        const response = await fetch('https://artisthat.herokuapp.com/userapp/getBlogs');
        const formattedResponse = response.json();
        return formattedResponse
    }
)
export const articleStory = createSlice({
    name: 'articleStory',
    initialState: {
        value: [
        ]
    },
    extraReducers: {
        [getStories.fulfilled]: (state, {payload}) => {
            console.log(payload, "thisi is payload")
            state.value = payload;
            console.log(state.value, "this is blogs complete data")
        }
    }
})

export default articleStory.reducer;