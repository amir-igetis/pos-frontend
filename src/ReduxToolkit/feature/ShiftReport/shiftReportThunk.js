import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const startShift = createAsyncThunk("/shiftReport/start",
    async (branchId, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.post(`/api/shift-reports/start?branchId=
                ${branchId}`, {}, { headers })
            console.log("shift started successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message ||
                "failed to start shift"
            )
        }
    }
);

export const endShfit = createAsyncThunk("/shiftReport/end",
    async (_, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.put(`/api/shift-reports/end`,
                {}, { headers })
            console.log("shift ended successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message ||
                "failed to end shift"
            )
        }
    }
);

export const getCurrentShiftProgress = createAsyncThunk("/shiftReport/getCurrent",
    async (_, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/shift-reports/current`,
                {}, { headers })
            console.log("get current shift successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message ||
                "failed to get current shift"
            )
        }
    }
);

export const getShiftReportByDate = createAsyncThunk("/shiftReport/getByDate",
    async ({ cashierId, date }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const formattedDate = encodeURIComponent(date);
            const res = await api.get(`/api/shift-reports/cashier/
                ${cashierId}/by-date?date=${formattedDate}`,
                { headers })
            console.log("get shift report by date successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message ||
                "failed to get shift report by date"
            )
        }
    });

export const getShiftByCashier = createAsyncThunk("/shiftReport/getByCahier",
    async (cashierId, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/shift-reports/cashier/
                ${cashierId}`,
                { headers })
            console.log("get cashier shift report successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message ||
                "failed to get cashier shift report"
            )
        }
    });

export const getShiftByBranch = createAsyncThunk("/shiftReport/getByBranch",
    async (branchId, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/shift-reports/branch/
                ${branchId}`,
                { headers })
            console.log("get shift report by branch successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message ||
                "failed to get shift report by branch"
            )
        }
    });

export const getShiftById = createAsyncThunk("/shiftReport/getById",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/shift-reports/
                ${id}`,
                { headers })
            console.log("get shift report by id successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message ||
                "failed to get shift report by id"
            )
        }
    });
