// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyCode from './pages/VerifyCode';
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
         <div style={{ flex: 1, overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
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

export default App;