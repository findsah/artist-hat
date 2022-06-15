import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import stand from "../../Assets/stand.png";

export const getCategories = createAsyncThunk(
    'photos/getCategories',
    async() => {
        const response = await fetch('https://artisthat.herokuapp.com/artist/artistCategories');
        const formattedResponse = response.json();
        return formattedResponse
    }
)
export const categorySlice = createSlice({
    name: "categories",
    initialState: {
        value: [{
                id: 0,
                image: '',
                title: "Painting",
                description: "Painting that help artists express their creativity.",
            },
            {
                id: 1,
                image: 'sculpture',
                title: "Sculpture",
                desc: "Create especially carving stone, wood, metal or plaster to make your masterpiece .",
            },
            {
                id: 2,
                image: 'stand',
                title: "Stand Glass",
                description: "Your windows for creative vision.",
            },
            {
                id: 3,
                image: 'graffiti',
                title: "Graffiti",
                description: "Make your wall stunning with a great story to tell.",
            },
            {
                id: 4,
                image: 'mosaic',
                title: "Mosaic",
                description: "Put the small pieces of material such as stone, mineral, glass, tile in your creative way to make your masterpiece.",
            },
            {
                id: 5,
                image: stand,
                title: "Mixed Media",
                description: "Make your artworks composed of a combination of different media or materials and show how creative you are.",
            }
        ]
    },

    extraReducers: {
        [getCategories.fulfilled]: (state, {payload}) => {
            console.log(payload, "thisi is payload")
            state.value = payload;
            console.log(state.value, "thissi is categroes")
        }
    }

})

export default categorySlice.reducer;