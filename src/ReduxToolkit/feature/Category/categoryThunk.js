import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const createCategory = createAsyncThunk(
    "/category/create",
    async ({ dto }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.post("/api/categories",
                dto, { headers }
            );
            console.log("carete category success", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to create category"
            );
        }
    }
);

export const getCagoriesByStore = createAsyncThunk(
    "/category/getByStore",
    async ({ storeId }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/categories/store/${storeId}`,
                { headers }
            );
            console.log("get category by id success", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get category by id"
            );
        }
    }
);

export const updateCategory = createAsyncThunk(
    "/category/update",
    async ({ id, dto }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.put(`/api/categories/${id}`,
                dto, { headers }
            );
            console.log("update category success", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to update category by id"
            );
        }
    }
);

export const deleteCategory = createAsyncThunk(
    "/category/delete",
    async ({ id }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.delete(`/api/categories/${id}`,
                { headers }
            );
            console.log("delete category by id success", res.data);
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to delete category by id"
            );
        }
    }
);