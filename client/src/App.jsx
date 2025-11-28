// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyCode from './pages/VerifyCode';
import Homepage from './pages/Homepage'
import DashboardPage from './pages/DashboardPage';
import NewOrder from './pages/Neworder';
import OrderDetail from './pages/orderDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/order/new" element={<NewOrder />} /> 
        <Route path="/order/1" element={<OrderDetail />} /> 

      </Routes>
    </Router>
  );
}

export default App;