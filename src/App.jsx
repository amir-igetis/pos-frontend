
import './App.css'
import { Button } from './components/ui/button'
import ShiftSummaryPage from './pages/cashier/ShiftReport/ShiftSummaryPage'
import OrderHistory from './pages/cashier/OrderHistory/OrderHistory'
import RefundPage from './pages/cashier/Refund/RefundPage'
import CashierRoutes from './routes/CashierRoutes'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import StoreRoutes from './routes/StoreRoutes'
import { getUserProfile } from './ReduxToolkit/feature/User/userThunk'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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


// App.jsx

function App() {
  const dispatch = useDispatch();

  const { userProfile } = useSelector(state => state.user);


  useEffect(() => {
    // 1. Grab the token
    const token = localStorage.getItem('jwt');

    // 2. Only dispatch if the token actually exists
    if (token && token !== "null" && token !== "undefined") {
      dispatch(getUserProfile(token));
    }
  }, []);

  let content;

  if (userProfile && userProfile.role) {
    if (userProfile?.role === 'ROLE_BRANCH_CASHIER') {
      content =
        <Routes>
          <Route path="/" element={<Navigate to="/cashier" replace />} />
          <Route path="/cashier/*" element={<CashierRoutes />} />
        </Routes>
    }
  } else {
    content = <Routes>
      <Route path="/" element={<Login />} />

    </Routes>
  }

  return (


    <>
      {content}
    </>

    // <Routes>
    //   <Route path="/" element={<Navigate to="/login" replace />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/cashier/*" element={<CashierRoutes />} />

    //   {/* FIX: Added /* to the store path */}
    //   <Route path="/store/*" element={<StoreRoutes />} />

    //   {/* <Route path='/branch/*' element={<BranchRoutes />} />
    //   <Route path='/super-admin/*' element={<AdminRoutes />} /> */}
    // </Routes>
  );
}

export default App;