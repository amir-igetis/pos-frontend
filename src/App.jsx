
import './App.css'
import { Button } from './components/ui/button'
import ShiftSummaryPage from './pages/cashier/ShiftReport/ShiftSummaryPage'
import OrderHistory from './pages/cashier/OrderHistory/OrderHistory'
import RefundPage from './pages/cashier/Refund/RefundPage'
import CashierRoutes from './routes/CashierRoutes'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Routes>
//         <Route path="/cashier/*" element={<CashierRoutes />} />
//         <Route path='/login' element={<Login />} />
//       </Routes>
//       {/* <ShiftSummaryPage /> */}
//       {/* <OrderHistory /> */}
//       {/* <RefundPage /> */}
//     </>
//   )
// }

// export default App


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cashier/*" element={<CashierRoutes />} />
    </Routes>
  );
}

export default App;