import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    name:"",
};
const filtersSlice = createSlice({
    name: "filters",
    initialState: INITIAL_STATE,
    reducers: {
        changeFilters: (state, action) => {
    state.name = action.payload;
        },
    },
});

export const { changeFilters } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filtersSlice.reducer;