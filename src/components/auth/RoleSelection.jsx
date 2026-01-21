import React from 'react'
import { useNavigate } from 'react-router-dom'
import { akunDummy } from '../../data/akunDummy'

const RoleSelection = () => {
  const navigate = useNavigate()

  const handleRoleSelect = (role) => {
    // Untuk demo, langsung login dengan akun dummy
    let email = ''
    
    switch(role) {
      case 'UMKM':
        email = 'umkm.b@demo.com' // Default ke UMKM B
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
            style={styles.roleCard}
            onClick={() => handleRoleSelect(role.id)}
          >
            <div style={{ ...styles.roleIcon, backgroundColor: role.color + '20', color: role.color }}>
              {role.icon}
            </div>
            <h3 style={styles.roleTitle}>{role.title}</h3>
            <p style={styles.roleDesc}>{role.description}</p>
            <button style={{ ...styles.selectBtn, backgroundColor: role.color }}>
              Pilih {role.title}
            </button>
          </div>
        ))}
      </div>

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
          <div style={styles.accountItem}>
            <strong>UMKM A:</strong> umkm.a@demo.com (Belum Siap)
          </div>
          <div style={styles.accountItem}>
            <strong>UMKM B:</strong> umkm.b@demo.com (Siap dengan Catatan)
          </div>
          <div style={styles.accountItem}>
            <strong>UMKM C:</strong> umkm.c@demo.com (Layak Dipresentasikan)
          </div>
          <div style={styles.accountItem}>
            <strong>Investor:</strong> investor@demo.com
          </div>
          <div style={styles.accountItem}>
            <strong>Mentor:</strong> mentor@demo.com
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1000px',
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
    maxWidth: '600px',
    margin: '0 auto'
  },
  roleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  roleCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  roleIcon: {
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    margin: '0 auto 1rem'
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
    fontSize: '1rem'
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
    gap: '0.5rem'
  },
  accountItem: {
    padding: '0.75rem',
    backgroundColor: 'white',
    borderRadius: '0.375rem',
    border: '1px solid #e5e7eb',
    fontSize: '0.875rem'
  }
}

export default RoleSelection