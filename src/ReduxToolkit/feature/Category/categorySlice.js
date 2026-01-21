import { createSlice } from "@reduxjs/toolkit";
import { createCategory, deleteCategory, getCagoriesByStore, updateCategory } from "./categoryThunk";


const initialState = {
    categories: [],
    loading: false,
    error: null,

};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createCategory.pending, (state) => {
                state.loading = true,
                    state.error = null;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getCagoriesByStore.pending, (state) => {
                state.loading = true,
                    state.error = null;
            })
            .addCase(getCagoriesByStore.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCagoriesByStore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(updateCategory.fulfilled, (state, action) => {
                const index = state.categories.findIndex(
                    (c) => c.id === action.payload.id
                );
                if (index !== -1) {
                    state.categories[index] = action.payload
                }
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.categories = state.categories.filter(
                    (c) => c.id !== action.payload
                );
            })
    }
});


export default categorySlice.reducer;