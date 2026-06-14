// StoreRoutes.jsx
import { StoreDashboard } from "@/pages/storePages/StoreDashboard";
import { Route, Routes } from "react-router-dom";

function StoreRoutes() {
    return (
        <Routes>
            {/* FIX: Added 'index' so it renders at the base /store path */}
            <Route index element={<StoreDashboard />} />

            {/* Future nested routes would look like this: */}
            {/* <Route path="inventory" element={<InventoryPage />} /> */}
        </Routes>
    );
}

export default StoreRoutes;