import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createRefund = createAsyncThunk("/refund/create",
    async (refundDto, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.post("/api/refunds", refundDto,
                { headers }
            )
            console.log("create refund success", res.data);
            return res.date;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to create refund"
            )
        }
    }
);

export const getAllRefund = createAsyncThunk("/refund/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get("/api/refunds",
                { headers }
            )
            console.log("get all refund success", res.data);
            return res.date;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get refunds"
            )
        }
    }
);


export const getRefundByCashier = createAsyncThunk(
    "/refund/getByCashier",
    async (cashierId, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/refunds/cashier/${cashierId}`,
                { headers }
            )
            console.log("get refund by cashier id success", res.data);
            return res.date;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get refund by casheir id"
            )
        }
    }
);

export const getRefundByBranch = createAsyncThunk(
    "/refund/getByBranch",
    async (brancId, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/refunds/branch/${brancId}`,
                { headers }
            )
            console.log("get refund by brach id success", res.data);
            return res.date;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get refund by branch id"
            )
        }
    }
);

export const getRefundByShift = createAsyncThunk(
    "/refund/getByShift",
    async (shiftReportId, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/refunds/shift/${shiftReportId}`,
                { headers }
            )
            console.log("get refund by shift id success", res.data);
            return res.date;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get refund by shfirt id"
            )
        }
    }
);

export const getRefundByCashieerAndDateRange = createAsyncThunk(
    "/refund/getByCashierAndDateRange",
    async ({ cashierId, from, to }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const formattedFrom = encodeURIComponent(from);
            const formattedTo = encodeURIComponent(to)
            const res = await api.get(`/api/refunds/branch/${cashierId}
                /range?from=${formattedFrom}&to=${formattedTo}`,
                { headers }
            )
            console.log("get refund by cashier id and date success", res.data);
            return res.date;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get refund by casheir id and date"
            )
        }
    }
);

export const getRefundById = createAsyncThunk(
    "/refund/getById",
    async (refundId, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/refunds/${refundId}`,
                { headers }
            )
            console.log("get refund by id success", res.data);
            return res.date;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get refund by id"
            )
        }
    }
);