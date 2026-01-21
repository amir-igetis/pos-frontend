import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/Auth/authSlice.js"
import userReducer from "./feature/User/userSlice.js"
import customerReducer from "./feature/Customer/customerSlice.js"
import orderReducer from "./feature/Order/orderSlice.js"
import refundReducer from "./feature/Refund/refundSlice.js"
import shiftReportReducer from "./feature/ShiftReport/shiftReportSlice.js";
import branchReducer from "./feature/Branch/branchSlice.js"
import categoryReducer from "./feature/Category/categorySlice.js"
import employeeReducer from "./feature/Employee/employeeSlice.js";
import storeReducer from "./feature/Store/storeSlice.js"
import productReducer from "./feature/Product/productSlice.js";

const globalState = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        customer: customerReducer,
        order: orderReducer,
        refund: refundReducer,
        shiftReport: shiftReportReducer,
        branch: branchReducer,
        category: categoryReducer,
        employee: employeeReducer,
        store: storeReducer,
        product: productReducer,
    }
});

export default globalState