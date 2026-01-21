import { createSlice } from "@reduxjs/toolkit";
import { startShift, getCurrentShiftProgress, getShiftReportByDate, getShiftByCashier, getShiftByBranch, getShiftById, endShfit } from "./shiftReportThunk"


const initialState = {
    shifts: [],
    currentShift: null,
    selectedShift: null,
    shiftsByCashier: [],
    shifhtsByBranch: [],
    loading: false,
    error: null,
};

const shiftReportSlice = createSlice({
    name: "shiftReport",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(startShift.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(startShift.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedShift = action.payload;
            })
            .addCase(startShift.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(endShfit.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(endShfit.fulfilled, (state, action) => {
                state.loading = false;
                if (state.currentShift && state.currentShift.id === action.payload.id) {
                    state.selectedShift = action.payload;
                }

                const index = state.shifts.findIndex(shift => shift.id ===
                    action.payload.id
                );
                if (index !== -1) {
                    state.shifts[index] = action.payload;
                }
            })
            .addCase(endShfit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getCurrentShiftProgress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCurrentShiftProgress.fulfilled, (state, action) => {
                state.loading = false;
                state.currentShift = action.payload;
            })
            .addCase(getCurrentShiftProgress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getShiftReportByDate.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShiftReportByDate.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedShift = action.payload;
            })
            .addCase(getShiftReportByDate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getShiftByCashier.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShiftByCashier.fulfilled, (state, action) => {
                state.loading = false;
                state.shiftsByCashier = action.payload;
            })
            .addCase(getShiftByCashier.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getShiftByBranch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShiftByBranch.fulfilled, (state, action) => {
                state.loading = false;
                state.shifhtsByBranch = action.payload;
            })
            .addCase(getShiftByBranch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getShiftById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShiftById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedShift = action.payload;
            })
            .addCase(getShiftById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default shiftReportSlice.reducer;