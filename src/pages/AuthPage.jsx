import React from 'react'
import RoleSelection from '../components/auth/RoleSelection'

const AuthPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>
          UMKM<span style={styles.logoHighlight}>Invest</span>
        </div>
        <p style={styles.tagline}>Platform Penyaring Risiko Investasi UMKM</p>
      </div>
      
      <RoleSelection />
      
      <div style={styles.footer}>
        <p style={styles.footerText}>
          <strong>Disclaimer:</strong> Platform ini adalah demonstrasi untuk keperluan proposal.
          Semua data adalah dummy dan tidak mewakili entitas nyata.
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'white',
    padding: '2rem 1rem',
    textAlign: 'center',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  logoHighlight: {
    color: '#2563eb'
  },
  tagline: {
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center'
  },
  footerText: {
    margin: 0,
    fontSize: '0.875rem',
    color: '#9ca3af',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

export default AuthPage