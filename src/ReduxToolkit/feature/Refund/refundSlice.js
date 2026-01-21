import { createSlice } from "@reduxjs/toolkit";
import { createRefund, getAllRefund, getRefundByBranch, getRefundByCashieerAndDateRange, getRefundByCashier, getRefundById, getRefundByShift } from "./refundThunk";


const initialState = {
    refunds: [],
    refundsByCashier: [],
    refundsByBranch: [],
    refundsByShift: [],
    refundsByDateRange: [],
    selectedRefund: null,
    loading: false,
    error: null,
};

const refundSlice = createSlice({
    name: "refund",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createRefund.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createRefund.fulfilled, (state, action) => {
                state.loading = false;
                state.refunds.push(action.payload);
            })
            .addCase(createRefund.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getAllRefund.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllRefund.fulfilled, (state, action) => {
                state.loading = false;
                state.refunds = action.payload;
            })
            .addCase(getAllRefund.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getRefundByCashier.pending, (state) => {
                state.loading = false;
                state.error = null;;
            })

            .addCase(getRefundByCashier.fulfilled, (state, action) => {
                state.loading = false;
                state.refundsByCashier = action.payload;

            })
            .addCase(getRefundByCashier.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getRefundByBranch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRefundByBranch.fulfilled, (state, action) => {
                state.loading = false;
                state.refundsByBranch = action.payload;

            })
            .addCase(getRefundByBranch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getRefundByShift.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRefundByShift.fulfilled, (state, action) => {
                state.loading = false;
                state.refundsByShift = action.payload;

            })
            .addCase(getRefundByShift.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getRefundByCashieerAndDateRange.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRefundByCashieerAndDateRange.fulfilled, (state, action) => {
                state.loading = false;
                state.refundsByDateRange = action.payload;

            })
            .addCase(getRefundByCashieerAndDateRange.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getRefundById.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getRefundById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRefund = action.payload;

            })
            .addCase(getRefundById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});


export default refundSlice.reducer;