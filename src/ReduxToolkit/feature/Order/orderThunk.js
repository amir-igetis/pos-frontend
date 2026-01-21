import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
    "order/create",
    async (dto, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.put(`/api/orders`, dto, {
                headers,
            });
            console.log("create order success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to create order"
            );
        }
    }
);

export const getOrderById = createAsyncThunk(
    "order/getById",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/orders/${id}`, {
                headers,
            });
            console.log("fetch order success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to fetch order"
            );
        }
    }
);

export const getOrderByBranch = createAsyncThunk(
    "order/getByBranch",
    async ({ brachId, customerId, cashierId, paymentType, status },
        { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const param = []
            if (customerId) param.push(`customerId = ${customerId}`);
            if (cashierId) param.push(`cashierId=${cashierId}`);
            if (paymentType) param.push(`paymentType = ${paymentType}`);
            if (status) param.push(`status=${status}`);
            const query = param.length ? `?${param.join("&")}` : "";
            const res = await api.get(`/api/orders/branch/${brachId}${query}`, {
                headers,
            });
            console.log("fetch branch success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to fetch branch"
            );
        }
    }
);

export const getOrderByCashier = createAsyncThunk(
    "order/getByCashierId",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/orders/cashier/${id}`, {
                headers,
            });
            console.log("fetch cashier order success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to fetch  cashier order"
            );
        }
    }
);

export const getTodayOrdersbyBranch = createAsyncThunk(
    "order/getTodayByBranch",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/orders/today/branch/${id}`, {
                headers,
            });
            console.log("fetch today order success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to fetch today order"
            );
        }
    }
);

export const deleteOrder = createAsyncThunk(
    "order/delete",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.delete(`/api/orders/${id}`, {
                headers,
            });
            console.log("delete order success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to delete order"
            );
        }
    }
);

export const getOrderByCustomer = createAsyncThunk(
    "order/getByCustomer",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/orders/customer/${id}`, {
                headers,
            });
            console.log("fetch customer order success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to fetch customer order"
            );
        }
    }
);

export const getRecentOrdersByBranch = createAsyncThunk(
    "order/getRecentByBranch",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/orders/recent/${id}`, {
                headers,
            });
            console.log("fetch recent branch order success ", res.data);
            return res.data;
        } catch (error) {
            console.log("error ", error?.response?.data)
            return rejectWithValue(error?.response?.data?.message ||
                "Failed to fetch recent branch order"
            );
        }
    }
);