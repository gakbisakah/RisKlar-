import React from 'react'
import { useNavigate } from 'react-router-dom'

const TombolAksi = ({ umkmId, role }) => {
  const navigate = useNavigate()

  const actions = [
    {
      id: 'diskusi',
      label: 'Diskusi Terstruktur',
      description: 'Diskusi dengan format terstruktur',
      icon: '💬',
      color: '#3b82f6',
      onClick: () => navigate(`/diskusi/${umkmId}`)
    },
    {
      id: 'data',
      label: 'Minta Data Tambahan',
      description: 'Request data spesifik ke UMKM',
      icon: '📋',
      color: '#8b5cf6',
      onClick: () => {
        if (role === 'INVESTOR') {
          alert('Fitur request data tambahan (simulasi)')
        }
      }
    },
    {
      id: 'minat',
      label: 'Ajukan Minat Investasi',
      description: 'Ekspresikan minat untuk diskusi lebih lanjut',
      icon: '🤝',
      color: '#10b981',
      onClick: () => {
        if (role === 'INVESTOR') {
          navigate(`/kesepakatan/${umkmId}`)
        }
      }
    },
    {
      id: 'bandingkan',
      label: 'Tambahkan ke Perbandingan',
      description: 'Bandingkan dengan UMKM lain',
      icon: '⚖️',
      color: '#f59e0b',
      onClick: () => {
        const currentCompare = JSON.parse(localStorage.getItem('compareUMKM') || '[]')
        if (!currentCompare.includes(umkmId)) {
          currentCompare.push(umkmId)
          localStorage.setItem('compareUMKM', JSON.stringify(currentCompare))
          alert('UMKM ditambahkan ke daftar perbandingan')
        }
      }
    }
  ]

  // Filter actions berdasarkan role
  const filteredActions = actions.filter(action => {
    if (action.id === 'minat' && role !== 'INVESTOR') return false
    if (action.id === 'data' && role !== 'INVESTOR') return false
    return true
  })

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Aksi yang Tersedia</h3>
      <div style={styles.grid}>
        {filteredActions.map((action) => (
          <button
            key={action.id}
            style={{...styles.actionButton, backgroundColor: action.color}}
            onClick={action.onClick}
          >
            <div style={styles.actionIcon}>{action.icon}</div>
            <div style={styles.actionContent}>
              <div style={styles.actionLabel}>{action.label}</div>
              <div style={styles.actionDesc}>{action.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  actionButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  actionIcon: {
    fontSize: '2rem'
  },
  actionContent: {
    flex: 1
  },
  actionLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.25rem'
  },
  actionDesc: {
    fontSize: '0.75rem',
    opacity: 0.9
  }
}

export default TombolAksi