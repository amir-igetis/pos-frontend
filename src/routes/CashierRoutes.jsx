import CashierDashboardLayout from '@/pages/cashier/CashierDashboardLayout'
import CreateOrder from '@/pages/cashier/CreateOrder'
import OrderHistory from '@/pages/cashier/OrderHistory/OrderHistory'
import RefundPage from '@/pages/cashier/Refund/RefundPage'
import ShiftSummaryPage from '@/pages/cashier/ShiftReport/ShiftSummaryPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// function CashierRoutes() {
//   return (
//     <Routes>
//       <Route path='/' element={<CashierDashboardLayout />} >
//         <Route index element={<CreateOrder />} />

//         <Route path='orders' element={<OrderHistory />} />
//         {/* <Route path='customers' element={<CustomerLookup />} /> */}
//         <Route path='returns' element={<RefundPage />} />
//         <Route path='shift-summary' element={<ShiftSummaryPage />} />
//         {/* <Route path='customers' element={<CustomerLookup />} /> */}
//       </Route>

//     </Routes>
//   )

// }

function CashierRoutes() {
  return (
    <Routes>
      <Route element={<CashierDashboardLayout />}>
        <Route index element={<CreateOrder />} />
        <Route path="orders" element={<OrderHistory />} />
        <Route path="returns" element={<RefundPage />} />
        <Route path="shift-summary" element={<ShiftSummaryPage />} />
      </Route>
    </Routes>
  );
}


export default CashierRoutes