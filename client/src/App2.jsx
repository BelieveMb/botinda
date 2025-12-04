// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Menubar } from 'primereact/menubar'
// import { Link } from 'react-router-dom'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import Certification from './pages/Certification'
import Buyer from './pages/Buyer'
import Business from './pages/Business'
import Login from './pages/Login'
import CertificationForm from './pages/CertificationForm'
import BuyerProfile from './pages/BuyerProfile'
import BusinessEditForm from './pages/BusinessEditForm'
import Category from './pages/Category'
import CategoryAdd from './pages/CategoryAdd'
import CategoryEdit from './pages/CategoryEdit'

export default function App() {
  
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
         <div style={{ flex: 1, overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/certification" element={<Certification />} />
                <Route path="/certification/1" element={<CertificationForm />} />
            <Route path="/buyer" element={<Buyer />} />
                <Route path="/buyer/1" element={<BuyerProfile />} />
            <Route path="/business" element={<Business />} />
                <Route path="/business/1" element={<BusinessEditForm />} />
            <Route path="/category" element={<Category />} />
                  <Route path="/category/1" element={<CategoryEdit />} />
                  <Route path="/category/add" element={<CategoryAdd />} />
            <Route path="/product/1" element={<Category />} />

             {/* <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            /> Private road*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}