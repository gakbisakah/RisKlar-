import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { akunDummy } from '../../data/akunDummy'
import './RoleSelection.css' // Buat file CSS baru

const RoleSelection = () => {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('')
  const [selectedUMKM, setSelectedUMKM] = useState('')

  const roles = [
    {
      id: 'UMKM',
      title: 'UMKM',
      description: 'Pemilik usaha yang ingin mengecek kesiapan investasi.',
      icon: '🏪',
      color: '#3b82f6'
    },
    {
      id: 'INVESTOR',
      title: 'Investor',
      description: 'Pihak yang menilai data dan mengambil keputusan mandiri.',
      icon: '💰',
      color: '#10b981'
    },
    {
      id: 'MENTOR',
      title: 'Mentor / Reviewer',
      description: 'Pihak independen non-investor yang memberikan catatan kelayakan.',
      icon: '👨‍🏫',
      color: '#8b5cf6'
    }
  ]

  const umkmOptions = [
    { id: 'umkm-1', name: 'UMKM A - Warung Kopi Nusantara', email: 'umkm.a@demo.com', skor: 45, status: 'Belum Siap' },
    { id: 'umkm-2', name: 'UMKM B - Batik Kreatif Indonesia', email: 'umkm.b@demo.com', skor: 68, status: 'Siap dengan Catatan' },
    { id: 'umkm-3', name: 'UMKM C - EcoPack Solution', email: 'umkm.c@demo.com', skor: 82, status: 'Layak Dipresentasikan' }
  ]

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    if (role !== 'UMKM') {
      handleLogin(role)
    }
  }

  const handleUMKMSelect = (umkm) => {
    setSelectedUMKM(umkm)
    handleLogin('UMKM', umkm.email)
  }

  const handleLogin = (role, specificEmail = '') => {
    let email = ''
    let password = 'password123'
    
    if (specificEmail) {
      email = specificEmail
    } else {
      switch(role) {
        case 'UMKM':
          // Default ke UMKM B jika tidak dipilih spesifik
          email = 'umkm.b@demo.com'
          break
        case 'INVESTOR':
          email = 'investor@demo.com'
          break
        case 'MENTOR':
          email = 'mentor@demo.com'
          break
        default:
          return
      }
    }
    
    // Login dengan akun dummy
    const user = akunDummy.login(email)
    if (user) {
      // Redirect ke dashboard sesuai role
      if (user.role === 'UMKM') {
        navigate('/dashboard-umkm')
      } else if (user.role === 'INVESTOR') {
        navigate('/dashboard-investor')
      } else {
        navigate('/')
      }
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Pilih Peran Anda</h1>
        <p style={styles.subtitle}>
          Pilih peran sesuai kebutuhan Anda. Setiap peran memiliki akses dan fungsi yang berbeda.
        </p>
      </div>

      <div style={styles.roleGrid}>
        {roles.map((role) => (
          <div 
            key={role.id} 
            style={{
              ...styles.roleCard,
              borderColor: selectedRole === role.id ? role.color : '#e5e7eb',
              transform: selectedRole === role.id ? 'translateY(-5px)' : 'none'
            }}
            onClick={() => handleRoleSelect(role.id)}
          >
            <div style={styles.roleIcon} style={{ backgroundColor: role.color + '20', color: role.color }}>
              {role.icon}
            </div>
            <h3 style={styles.roleTitle}>{role.title}</h3>
            <p style={styles.roleDesc}>{role.description}</p>
            <button style={{...styles.selectBtn, backgroundColor: role.color }}>
              Pilih {role.title}
            </button>
          </div>
        ))}
      </div>

      {/* Pilihan UMKM Spesifik */}
      {selectedRole === 'UMKM' && (
        <div style={styles.umkmSelection}>
          <h3 style={styles.umkmTitle}>Pilih Akun UMKM untuk Demo:</h3>
          <div style={styles.umkmGrid}>
            {umkmOptions.map((umkm) => (
              <div 
                key={umkm.id}
                style={{
                  ...styles.umkmCard,
                  borderColor: selectedUMKM === umkm.id ? '#3b82f6' : '#e5e7eb',
                  backgroundColor: selectedUMKM === umkm.id ? '#eff6ff' : 'white'
                }}
                onClick={() => handleUMKMSelect(umkm)}
              >
                <div style={styles.umkmHeader}>
                  <div style={styles.umkmName}>{umkm.name.split(' - ')[0]}</div>
                  <div style={styles.umkmDetail}>{umkm.name.split(' - ')[1]}</div>
                </div>
                <div style={styles.umkmInfo}>
                  <div style={styles.umkmStatus}>
                    <span style={styles.statusLabel}>Status:</span>
                    <span style={{
                      ...styles.statusValue,
                      color: umkm.skor < 50 ? '#ef4444' : umkm.skor < 70 ? '#f59e0b' : '#10b981'
                    }}>
                      {umkm.status}
                    </span>
                  </div>
                  <div style={styles.umkmScore}>
                    <span style={styles.scoreLabel}>Skor:</span>
                    <span style={styles.scoreValue}>{umkm.skor}%</span>
                  </div>
                </div>
                <div style={styles.umkmEmail}>
                  <small>{umkm.email}</small>
                </div>
                <button 
                  style={styles.loginBtn}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleUMKMSelect(umkm)
                  }}
                >
                  Login sebagai {umkm.name.split(' - ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={styles.disclaimer}>
        <p><strong>Catatan Khusus untuk Mentor/Reviewer:</strong></p>
        <p style={styles.mentorNote}>
          Mentor/Reviewer adalah pihak independen non-investor yang memberikan catatan kelayakan 
          berbasis pengalaman usaha atau analisis, tanpa insentif pendanaan.
        </p>
        <p style={styles.demoNote}>
          <strong>Mode demonstrasi:</strong> Klik role untuk langsung masuk dengan akun dummy.
        </p>
      </div>

      <div style={styles.demoAccounts}>
        <h4 style={styles.demoTitle}>Akun Dummy Tersedia:</h4>
        <div style={styles.accountList}>
          {umkmOptions.map((umkm) => (
            <div key={umkm.id} style={styles.accountItem}>
              <strong>{umkm.name.split(' - ')[0]}:</strong> {umkm.email} ({umkm.status})
            </div>
          ))}
          <div style={styles.accountItem}>
            <strong>Investor:</strong> investor@demo.com
          </div>
          <div style={styles.accountItem}>
            <strong>Mentor:</strong> mentor@demo.com
          </div>
        </div>
        <p style={styles.passwordNote}>
          <small>Password semua akun: <strong>password123</strong></small>
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
    maxWidth: '800px',
    margin: '0 auto'
  },
  roleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  roleCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e5e7eb',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  roleIcon: {
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    margin: '0 auto 1rem',
    transition: 'all 0.3s ease'
  },
  roleTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  roleDesc: {
    color: '#6b7280',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    minHeight: '4.5rem'
  },
  selectBtn: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    width: '100%',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  },
  umkmSelection: {
    backgroundColor: '#f8fafc',
    padding: '2rem',
    borderRadius: '1rem',
    marginBottom: '2rem',
    border: '1px solid #e2e8f0'
  },
  umkmTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  umkmGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  },
  umkmCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '2px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  umkmHeader: {
    marginBottom: '1rem'
  },
  umkmName: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.25rem'
  },
  umkmDetail: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  umkmInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #e5e7eb'
  },
  umkmStatus: {
    display: 'flex',
    flexDirection: 'column'
  },
  statusLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginBottom: '0.25rem'
  },
  statusValue: {
    fontWeight: '600',
    fontSize: '0.875rem'
  },
  umkmScore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  scoreLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginBottom: '0.25rem'
  },
  scoreValue: {
    fontWeight: 'bold',
    fontSize: '1.125rem',
    color: '#1f2937'
  },
  umkmEmail: {
    fontSize: '0.75rem',
    color: '#9ca3af',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  loginBtn: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    width: '100%',
    fontSize: '0.875rem',
    transition: 'all 0.3s ease'
  },
  disclaimer: {
    backgroundColor: '#f0f9ff',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    marginBottom: '2rem',
    borderLeft: '4px solid #3b82f6'
  },
  mentorNote: {
    color: '#1e40af',
    fontSize: '0.875rem',
    lineHeight: '1.6',
    margin: '0.5rem 0'
  },
  demoNote: {
    color: '#92400e',
    fontSize: '0.875rem',
    marginTop: '1rem'
  },
  demoAccounts: {
    backgroundColor: '#f9fafb',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px dashed #d1d5db'
  },
  demoTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: '1rem'
  },
  accountList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginBottom: '1rem'
  },
  accountItem: {
    padding: '0.75rem',
    backgroundColor: 'white',
    borderRadius: '0.375rem',
    border: '1px solid #e5e7eb',
    fontSize: '0.875rem'
  },
  passwordNote: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '0.75rem',
    fontStyle: 'italic'
  }
}

export default RoleSelection