import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createStoreEmployee = createAsyncThunk(
    "/employee/createStoreEmployee",
    async ({ employee, storeId }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.post(
                `/api/employees/store/${storeId}`,
                employee, { headers }
            );
            console.log("employee created Syccessfuylly");
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to create employee"
            );
        }
    }
);


export const updateEmployee = createAsyncThunk(
    "/employee/updateEmployee",
    async ({ employeeId, employeeDetails }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.post(
                `/api/employees/${employeeId}`,
                employeeDetails, { headers }
            );
            console.log("employee updated  Syccessfuylly");
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to update employee"
            );
        }
    }
);

export const deleteEmployee = createAsyncThunk(
    "/employee/deleteEmployee",
    async ({ employeeId }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.delete(
                `/api/employees/${employeeId}`,
                { headers }
            );
            console.log("employee deleted Syccessfuylly");
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to delete employee"
            );
        }
    }
);

export const findEmployeeById = createAsyncThunk(
    "/employee/findEmployeeById",
    async ({ employeeId }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(
                `/api/employees/${employeeId}`,
                { headers }
            );
            console.log("employee get by id Syccessfuylly");
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get  employee by id"
            );
        }
    }
);


export const findEmployeeByStore = createAsyncThunk(
    "/employee/findEmployeeByStore",
    async ({ storeId }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(
                `/api/employees/store/${storeId}`,
                { headers }
            );
            console.log("employee get by store Syccessfuylly");
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get  employee by store"
            );
        }
    }
);


export const findEmployeeByBranch = createAsyncThunk(
    "/employee/findEmployeeByBranch",
    async ({ branchId }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders();
            const res = await api.get(
                `/api/employees/branch/${branchId}`,
                { headers }
            );
            console.log("employee get by branach Syccessfuylly");
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.data?.message ||
                "failed to get  employee by brnach"
            );
        }
    }
);
