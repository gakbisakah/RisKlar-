import { Navigate } from 'react-router-dom'
import { akunDummy } from '../../data/akunDummy'

const ProtectedRoute = ({ children, role }) => {
  const currentUser = akunDummy.getCurrentUser()
  
  // Jika tidak login, redirect ke auth
  if (!currentUser) {
    return <Navigate to="/auth" replace />
  }
  
  // Jika ada requirement role tertentu
  if (role) {
    if (Array.isArray(role)) {
      if (!role.includes(currentUser.role)) {
        return <Navigate to="/" replace />
      }
    } else if (currentUser.role !== role) {
      return <Navigate to="/" replace />
    }
  }
  
  return children
}

export default ProtectedRoute