import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createCustomer = createAsyncThunk(
    "customer/create",
    async (customer, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.put(`/api/customers/`, customer, {
                headers,
            });
            console.log("create customers success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to fetch customer"
            );
        }
    }
);

export const updateCustomer = createAsyncThunk(
    "customer/update",
    async ({ id, customer }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.put(`/api/customers/${id}`, customer, {
                headers,
            });
            console.log("update customer success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to update customer"
            );
        }
    }
);

export const deleteCustomer = createAsyncThunk(
    "customer/delete",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.delete(`/api/customers/${id}`, {
                headers,
            });
            console.log("delete customer success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to delete customer by id"
            );
        }
    }
);

export const getCustomerById = createAsyncThunk(
    "customer/getById",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/customers/${id}`, {
                headers,
            });
            console.log("create customer success", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error)
            return rejectWithValue(
                "Failed to fetch customer by id"
            );
        }
    }
);


export const getAllCustomer = createAsyncThunk(
    "customer/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/customers`, {
                headers,
            });
            console.log("Got all customer success", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error)
            return rejectWithValue(
                "Failed to fetch all customers"
            );
        }
    }
);