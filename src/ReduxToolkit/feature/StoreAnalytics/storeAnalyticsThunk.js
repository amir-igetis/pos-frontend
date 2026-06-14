import api from "@/util/api";

import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBranchPerformance = createAsyncThunk(
    "storeAnalytics/getBranchPerformance",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/store/analytics/${id}/branch-performance`,
                { headers }
            )
            console.log("Store performance success", res.data);
            return res.data;
        } catch (error) {
            console.error("store error", error);
            return rejectWithValue(
                error.response?.data?.message || "Store performance failed"
            );
        }
    }
)

export const getStoreAlerts = createAsyncThunk(
    "storeAnalytics/getStoreAlert",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/store/analytics/${id}/alerts`,
                { headers }
            )
            console.log("store alerts success", res.data)
            return res.data;
        } catch (error) {
            console.error("store error", error);
            return rejectWithValue(
                error.response?.data?.message || "store getting error"
            );
        }
    }
)