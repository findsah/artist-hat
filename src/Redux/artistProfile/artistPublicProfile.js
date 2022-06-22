import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getArtistPublicProfile = createAsyncThunk(
    'getArtistPublicProfile',
    async (userId, thunkAPI) => {
        console.log('thisis is called')

        try {
            const response = await fetch(
                `https://artisthat.herokuapp.com/artist/artist_public_profile/${userId}/`,
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
                console.log(data, ' this is public asyncThunc data')
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
    extraReducers: {
        [getArtistPublicProfile.fulfilled]: (state, { payload }) => {
            state.profile = payload[0];
            console.log(state, 'ttttttttt')
        },
        
    }
})
export default artistPublicProfile.reducer;