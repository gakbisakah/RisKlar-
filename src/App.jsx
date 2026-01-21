import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import DashboardUMKM from './pages/DashboardUMKM'
import UploadIdeBertahap from './pages/UploadIdeBertahap'
import SistemPenilaianTransparan from './pages/SistemPenilaianTransparan'
import DashboardInvestor from './pages/DashboardInvestor'
import DetailIdeUMKM from './pages/DetailIdeUMKM'
import Diskusi from './pages/Diskusi'
import Kesepakatan from './pages/Kesepakatan'
import Status from './pages/Status'
import ProtectedRoute from './components/common/ProtectedRoute'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/auth" element={<AuthPage />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard-umkm" element={
          <ProtectedRoute role="UMKM">
            <Layout><DashboardUMKM /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/upload-ide" element={
          <ProtectedRoute role="UMKM">
            <Layout><UploadIdeBertahap /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/penilaian" element={
          <ProtectedRoute>
            <Layout><SistemPenilaianTransparan /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/dashboard-investor" element={
          <ProtectedRoute role="INVESTOR">
            <Layout><DashboardInvestor /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/detail-umkm/:id" element={
          <ProtectedRoute role={["INVESTOR", "MENTOR"]}>
            <Layout><DetailIdeUMKM /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/diskusi/:id" element={
          <ProtectedRoute>
            <Layout><Diskusi /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/kesepakatan/:id" element={
          <ProtectedRoute role={["UMKM", "INVESTOR"]}>
            <Layout><Kesepakatan /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/status/:id" element={
          <ProtectedRoute>
            <Layout><Status /></Layout>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App