import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ServiceOrderPage from './pages/ServiceOrderPage/ServiceOrderPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage/ServiceDetailsPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => (
  <div>
    <Routes>
      <Route path="/service/:id/order" Component={ServiceOrderPage} />
      <Route path="/service/:id" Component={ServiceDetailsPage} />
      <Route path="/" Component={HomePage} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
)
export default App;
