import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import michel from "../../Assets/michel.png";

export const getCategories = createAsyncThunk(
    'photos/getCategories',
    async () => {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=9');
        const formattedResponse = response.json();
        return formattedResponse
    }
)
export const trustedUser = createSlice({
    name: "trustedUser",
    initialState: {
        value: [{
            img: michel,
            name: 'Michael',
            date: '02/02/2022',
            city: 'LAHORE',
            artist_skill_type: 'painting',
            rating: '5',
            description: 'Painting that help artists express their creativity.'
        },
        {
            img: michel,
            name: 'Michael',
            date: '02/02/2022',
            city: 'LAHORE',
            artist_skill_type: 'painting',
            rating: '5',
            description: 'Painting that help artists express their creativity'
        },
        {
            img: michel,
            name: 'Michael',
            date: '02/02/2022',
            city: 'LAHORE',
            artist_skill_type: 'painting',
            rating: '5',
            description: 'Painting that help artists express their creativity.'
        },
        {
            img: michel,
            name: 'Michael',
            date: '02/02/2022',
            city: 'LAHORE',
            artist_skill_type: 'painting',
            rating: '5',
            description: 'Painting that help artists express their creativity.'
        }
        ]
    },
    // extraReducers: {
    //     [getCategories.fulfilled]: (state, action) => {
    //         state.value.photos = action.payload;
    //     }
    // }

})

export default trustedUser.reducer;