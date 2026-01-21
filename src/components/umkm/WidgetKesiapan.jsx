import React from 'react'
import { useNavigate } from 'react-router-dom'

const WidgetKesiapan = ({ umkmData }) => {
  const navigate = useNavigate()
  
  const getStatusColor = (skor) => {
    if (skor < 50) return '#ef4444'
    if (skor < 70) return '#f59e0b'
    return '#10b981'
  }
  
  const getStatusText = (skor) => {
    if (skor < 50) return 'Belum Direkomendasikan ke Investor'
    if (skor < 70) return 'Siap dengan Catatan'
    return 'Layak Dipresentasikan ke Investor'
  }
  
  const getStatusIcon = (skor) => {
    if (skor < 50) return '❌'
    if (skor < 70) return '⚠️'
    return '✅'
  }

  return (
    <div style={styles.widget}>
      <div style={styles.header}>
        <h2 style={styles.title}>Kesiapan Investasi Anda</h2>
        <div style={{ ...styles.statusBadge, backgroundColor: getStatusColor(umkmData.skor.total) + '20', color: getStatusColor(umkmData.skor.total) }}>
          {getStatusIcon(umkmData.skor.total)} {getStatusText(umkmData.skor.total)}
        </div>
      </div>
      
      <div style={styles.skorContainer}>
        <div style={styles.skorCircle}>
          <div style={styles.skorValue}>{umkmData.skor.total}%</div>
          <div style={styles.skorLabel}>Skor Kesiapan</div>
        </div>
        
        <div style={styles.skorDetails}>
          <div style={styles.progressSection}>
            <div style={styles.progressHeader}>
              <span>Progress Kesiapan</span>
              <span>{umkmData.skor.total}%</span>
            </div>
            <div style={styles.progressBar}>
              <div 
                style={{ 
                  ...styles.progressFill, 
                  width: `${umkmData.skor.total}%`,
                  backgroundColor: getStatusColor(umkmData.skor.total)
                }}
              ></div>
            </div>
          </div>
          
          <div style={styles.masalahSection}>
            <h4 style={styles.masalahTitle}>Masalah Utama:</h4>
            <ul style={styles.masalahList}>
              {umkmData.skor.masalahUtama.map((masalah, index) => (
                <li key={index} style={styles.masalahItem}>
                  ❌ {masalah}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div style={styles.explanation}>
        <p style={styles.explanationText}>
          <strong>Penjelasan:</strong> Skor dihitung dari jawaban UMKM, konsistensi data, 
          dan indikator kesiapan investasi dasar (bukan prediksi profit).
        </p>
      </div>
      
      <div style={styles.actions}>
        <button 
          style={styles.actionBtn}
          onClick={() => navigate('/upload-ide')}
        >
          Perbaiki Data Usaha
        </button>
        <button 
          style={{...styles.actionBtn, ...styles.secondaryBtn}}
          onClick={() => navigate('/penilaian')}
        >
          Lihat Detail Penilaian
        </button>
      </div>
    </div>
  )
}

const styles = {
  widget: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    marginBottom: '2rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0
  },
  statusBadge: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  skorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '2rem'
  },
  skorCircle: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '10px solid #e5e7eb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  skorValue: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937'
  },
  skorLabel: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.5rem'
  },
  skorDetails: {
    width: '100%'
  },
  progressSection: {
    marginBottom: '1.5rem'
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    color: '#4b5563'
  },
  progressBar: {
    height: '0.75rem',
    backgroundColor: '#e5e7eb',
    borderRadius: '0.375rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.3s ease'
  },
  masalahSection: {
    backgroundColor: '#fef2f2',
    padding: '1rem',
    borderRadius: '0.5rem'
  },
  masalahTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#dc2626',
    marginBottom: '0.75rem'
  },
  masalahList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  masalahItem: {
    padding: '0.5rem 0',
    color: '#4b5563',
    borderBottom: '1px solid #fee2e2'
  },
  explanation: {
    backgroundColor: '#eff6ff',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem'
  },
  explanationText: {
    margin: 0,
    color: '#1e40af',
    fontSize: '0.875rem',
    lineHeight: '1.6'
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  actionBtn: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    flex: '1',
    minWidth: '200px'
  },
  secondaryBtn: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    border: '1px solid #d1d5db'
  }
}

export default WidgetKesiapan