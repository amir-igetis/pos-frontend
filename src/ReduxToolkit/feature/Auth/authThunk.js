import api from "@/util/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("auth/signup",
    async (userData, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/signup", userData)

            localStorage.setItem("jwt", res.data.jwt)
            console.log("signup success ", res.data)
            return res.data
        } catch (error) {
            console.log("signup error ", error)
            return rejectWithValue(error.response?.data?.massage ||
                "Sign up failed"
            )
        }
    }
);


export const login = createAsyncThunk(
    "auth/login",
    async (loginData, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/login", loginData);

            console.log("login response:", res.data);

            localStorage.setItem("jwt", res.data.jwt);

            return res.data;
        } catch (error) {
            console.error("login error", error);
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);
