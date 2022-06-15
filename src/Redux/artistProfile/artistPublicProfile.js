import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getArtistReviews = createAsyncThunk(
    'ArtistReviews',
    async (userId, thunkAPI) => {

        try {
            const response = await fetch(
                `https://artisthat.herokuapp.com/artist/get_reviews_of_artist/${userId}/`,
                {
                    method: 'GET',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                }
            );
            let data = await response.json();

            if (response.status === 200) {
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const artistPublicProfile = createSlice({
    name: 'artistPublicProfile',
    initialState: {
        profile: [

        ],
        reviews: [

        ],
    },
    reducers: {
        [getArtistReviews.fulll]: (state, { payload }) => {
            state.reviews = payload;
        },
    }
})
export default artistPublicProfile.reducer;