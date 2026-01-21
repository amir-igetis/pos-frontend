import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct = createAsyncThunk(
    "/product/create",
    async (dto, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await axios.post(`/api/products`,
                dto,
                { headers }
            );
            console.log("product create success ", res.data);
            return res.data;

        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to create product"
            );
        }
    }
);

export const getProductById = createAsyncThunk(
    "/product/getById",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await axios.get(`/api/products/${id}`,
                { headers }
            );
            console.log("get product by id success ", res.data);
            return res.data;

        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get product by id"
            );
        }
    }
);


export const updateProduct = createAsyncThunk(
    "/product/update",
    async ({ id, dto }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await axios.put(`/api/products/${id}`,
                dto, { headers }
            );
            console.log("update product by id success ", res.data);
            return res.data;

        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to update product by id"
            );
        }
    }
);


export const deleteProduct = createAsyncThunk(
    "/product/delete",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await axios.delete(`/api/products/${id}`,
                { headers }
            );
            console.log("delete product by id success ", res.data);
            return res.data;

        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to deelete product by id"
            );
        }
    }
);


export const getProductByStore = createAsyncThunk(
    "/product/getByStore",
    async (storeId, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await axios.get(`/api/products/${storeId}`,
                { headers }
            );
            console.log("get product by store success ", res.data);
            return res.data;

        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get product by store"
            );
        }
    }
);

export const searchProducts = createAsyncThunk(
    "/product/search",
    async ({ storeId, query }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await axios.get(`/api/products/store/${storeId}/
                search?q=${query}`,
                { headers }
            );
            console.log("search product by success ", res.data);
            return res.data;

        } catch (error) {
            console.log("error ", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to search product"
            );
        }
    }
);

