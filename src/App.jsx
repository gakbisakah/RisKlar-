import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import ProtectedRoute from './components/common/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardUMKM from './pages/DashboardUMKM';
import DashboardInvestor from './pages/DashboardInvestor';
import DetailIdeUMKM from './pages/DetailIdeUMKM';
import UploadIdeBertahap from './pages/UploadIdeBertahap';
import Kesepakatan from './pages/Kesepakatan';
import { ROLES } from './utils/constants';

const App = () => {
  useEffect(() => {
    // Initialize AOS globally
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/auth" element={<Layout><AuthPage /></Layout>} />
        
        {/* Protected Routes - UMKM */}
        <Route path="/dashboard-umkm" element={
          <ProtectedRoute allowedRoles={[ROLES.UMKM]}>
            <Layout><DashboardUMKM /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/upload-ide" element={
          <ProtectedRoute allowedRoles={[ROLES.UMKM]}>
            <Layout><UploadIdeBertahap /></Layout>
          </ProtectedRoute>
        } />
        
        {/* Protected Routes - Investor */}
        <Route path="/dashboard-investor" element={
          <ProtectedRoute allowedRoles={[ROLES.INVESTOR]}>
            <Layout><DashboardInvestor /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/detail-umkm/:id" element={
          <ProtectedRoute allowedRoles={[ROLES.INVESTOR, ROLES.MENTOR]}>
            <Layout><DetailIdeUMKM /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/kesepakatan" element={
          <ProtectedRoute allowedRoles={[ROLES.INVESTOR]}>
            <Layout><Kesepakatan /></Layout>
          </ProtectedRoute>
        } />
        
        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;