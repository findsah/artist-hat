import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getArtistData = createAsyncThunk(
    'ArtistData',
    async (userId, thunkAPI) => {

        try {
            const response = await fetch(
                `https://artisthat.herokuapp.com/artist/artistProfile/${userId}/`,
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
export const ArtistData = createSlice({
    name: 'ArtistData',
    initialState: {
        value: [
        ],
        map: [
            {
                lats: '',
                lngs: ''
            }
        ]
    },
    extraReducers: {
        [getArtistData.fulfilled]: (state, { payload }) => {
            state.value = payload;
        },
    },
    reducers: {
        updateArtistData: (state, action) => {
            state.value = { ...state.value, ...action.payload };
        },
        getMapLocs: (state, action) => {
            state.map = { ...state.map, ...action.payload };
        },
    },

})
export const { updateArtistData, getMapLocs } = ArtistData.actions;
export default ArtistData.reducer;