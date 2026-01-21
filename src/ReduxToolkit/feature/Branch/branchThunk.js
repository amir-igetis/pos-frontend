import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createBranch = createAsyncThunk("/branch/create",
    async ({ dto }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.post(`/api/branches`,
                dto, { headers })
            console.log("create branch successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data.message ||
                "failed to create branch"
            )
        }
    });

export const getBranchById = createAsyncThunk("/branch/getById",
    async ({ id }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branches/${id}`,
                { headers })
            console.log("get branch successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data.message ||
                "failed to get branch by id"
            )
        }
    });


export const getAllBranchesByStore = createAsyncThunk(
    "/branch/getAllByStore",
    async ({ id }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branches/store/${id}`,
                { headers })
            console.log("get branch by store successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data.message ||
                "failed to get branch by store id"
            )
        }
    });


export const updateBrach = createAsyncThunk(
    "/branch/update",
    async ({ id, dto }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branches/${id}`,
                dto, { headers })
            console.log("update branch successfully", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data.message ||
                "failed to update branch"
            )
        }
    });