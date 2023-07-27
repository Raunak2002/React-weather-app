import { createSlice } from '@reduxjs/toolkit';

const initialState = {                                           // INITAL STATE
    weathers: []
}

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers:{                                                     // REDUCER
        setWeather: (state,action) => {
            state.weathers = action.payload.weathers;
        },
    },
});

export const {setWeather} = savedSlice.actions; 
export const selectWeather = (state) => state.saved.weathers;

export default savedSlice.reducer;