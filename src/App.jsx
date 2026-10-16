import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router'

import Home from './pages/Homepage'
import RegisterCustomer from './pages/RegisterCustomer'
import LoginCustomer from './pages/LoginCustomer'
import CustomerDashboard from './pages/CustomerDashboard'
import RegisterComplaint from './pages/RegisterComplaint'
import LoginAdmin from './pages/LoginAdmin'
import LoginTechnician from './pages/LoginTechnician'
import AdminDashboard from './pages/AdminDashboard'
import TechnicianDashboard from './pages/TechnicianDashboard'
import Complaint from './pages/RegisterComplaint'
import GetComplanits from './pages/GetComplanits'
import ApproveComplaint from './pages/ApproveComplaint'
import UpdateComplaints from './pages/UpdateComplaints'
import Report from './pages/Report'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path='/customer/register' element={<RegisterCustomer />} />
        <Route path='/customer/login' element={<LoginCustomer />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/customer/dashboard' element={<CustomerDashboard />} />
          <Route path='/customer/complaint' element={<RegisterComplaint />} />
          <Route path='/complaint' element={<Complaint />} />
          <Route path='/report' element={<Report />} />
        </Route>
        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route path='/technician/login' element={<LoginTechnician />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/technician/dashboard' element={<TechnicianDashboard />} />
        <Route path='/admin/complaints' element={<GetComplanits />} />
        <Route path='/admin/:complaintId/approve' element={<ApproveComplaint />} />
        <Route path='/technician/:complaintId' element={<UpdateComplaints />} />
        <Route path='*' element={<NotFound />} />

      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
