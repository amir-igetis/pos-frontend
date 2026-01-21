import { createSlice } from "@reduxjs/toolkit";
import { createStore, getAllStore, getStoreById, moderateStore, updateStore } from "./storeThunk";


const initialState = {
    store: null,
    stores: [],
    employees: [],
    loading: false,
    error: null,
};


const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createStore.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createStore.fulfilled, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createStore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getStoreById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getStoreById.fulfilled, (state, action) => {
                // state.loading = false;
                state.store = action.payload;
            })
            .addCase(getAllStore.fulfilled, (state, action) => {
                // state.loading = false;
                state.stores = action.payload;
            })
            .addCase(updateStore.fulfilled, (state, action) => {
                // state.loading = false;
                state.store = action.payload;
            })
            // .addCase(deleteStore.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // })        

            .addCase(moderateStore.fulfilled, (state, action) => {
                const updated = action.payload;
                state.stores = state.stores.map(store =>
                    store.id === updateStore.id ? updated : store
                );
            })
    }
});


export default storeSlice.reducer;

