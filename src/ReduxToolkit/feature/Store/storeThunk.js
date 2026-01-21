import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createStore = createAsyncThunk(
    "/store/create",
    async (storeData, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.post("/api/stores",
                storeData, { headers }
            );
            console.log("create store success ", res.data);
        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to create store"
            );
        }
    }
);


export const getStoreById = createAsyncThunk(
    "/store/getById",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/stores/${id}`,
                { headers }
            );
            console.log("get store by id success ", res.data);
        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get store by id"
            );
        }
    }
);

export const getAllStore = createAsyncThunk(
    "/store/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/stores`,
                {
                    headers,
                    params: status ? { status } : undefined,
                }
            );
            console.log("get store success ", res.data);
        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get store"
            );
        }
    }
);

export const updateStore = createAsyncThunk(
    "/store/update",
    async ({ id, storeData }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.put(`/api/stores/${id}`,
                storeData, { headers }
            );
            console.log("update store by id success ", res.data);
        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to update store by id"
            );
        }
    }
);

export const getStoreByAdmin = createAsyncThunk(
    "/store/getByAdmin",
    async (_, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/stores/admin`,
                { headers }
            );
            console.log("get store by admin success ", res.data);
        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get store by admin"
            );
        }
    }
);


export const getStoreByEmployee = createAsyncThunk(
    "/store/getByEmployee",
    async (_, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/stores/employee`,
                { headers }
            );
            console.log("get store by employee success ", res.data);
        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get store by employee"
            );
        }
    }
);


export const moderateStore = createAsyncThunk(
    "/store/moderateStore",
    async ({ storeId, action }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.put(`/api/stores/${storeId}/moderate`, null,
                {
                    headers,
                    params: { action }
                }
            );
            console.log("moderate store success ", res.data);
        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to moderate store "
            );
        }
    }
);