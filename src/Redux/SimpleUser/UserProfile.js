import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getUserData = createAsyncThunk(
    'getUserData',
    async (loginCredentials, thunkAPI) => {
        console.log(loginCredentials, " these are credetialss")
        try {
            const response = await fetch(
                'https://artisthat.herokuapp.com/userapp/signin',
                {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginCredentials),
                }
            );
            let data = await response.json();
            // console.log('data', data, response.status);

            if (response.status === 200) {
                
                return data ;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            // console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
export const userProfile = createSlice({
    name: 'userProfile',
    initialState: {
        value: []
    },
    extraReducers: {
        [getUserData.fulfilled]: (state, { payload }) => {
            
            if(payload.status !== 'Wrong Credentials'){
                localStorage.setItem('userToken', payload.token);
                localStorage.setItem('isArtist', payload.isArtist);
                state.value = payload;
            }else{
                state.value = payload.status
            }
        }
    }
    // extraReducers: {
    //     [getUserData.fulfilled]: (state, {payload}) => {
    //         console.log(payload, "thisi is userRegistrrain data")
    //         state.value = payload;
    //         console.log(state.value, "thissi is categroes")
    //     }
    // }
})

export default userProfile.reducer;
export const userSelector = (state) => state.user;