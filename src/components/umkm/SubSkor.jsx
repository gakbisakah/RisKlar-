import React from 'react'

const SubSkor = ({ skorData }) => {
  const subSkorItems = [
    {
      id: 'legalitas',
      label: 'Legalitas Dasar',
      value: skorData.legalitas,
      description: 'Kelengkapan dokumen legal usaha'
    },
    {
      id: 'kejelasan',
      label: 'Kejelasan Usaha',
      value: skorData.kejelasanUsaha,
      description: 'Kejelasan model bisnis dan target pasar'
    },
    {
      id: 'keuangan',
      label: 'Realistis Keuangan',
      value: skorData.realistisKeuangan,
      description: 'Kecukupan dan realisme data keuangan'
    },
    {
      id: 'risiko',
      label: 'Risiko Operasional',
      value: skorData.risikoOperasional,
      description: 'Identifikasi dan mitigasi risiko'
    }
  ]

  const getColor = (value) => {
    if (value < 50) return '#ef4444'
    if (value < 70) return '#f59e0b'
    return '#10b981'
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Detail Sub-Skor Kesiapan</h3>
      <p style={styles.subtitle}>
        Detail penilaian berdasarkan kategori kesiapan investasi
      </p>
      
      <div style={styles.grid}>
        {subSkorItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={{ ...styles.skorCircle, borderColor: getColor(item.value) }}>
                  <span style={{ ...styles.skorValue, color: getColor(item.value) }}>
                  {item.value}%
                </span>
              </div>
              <h4 style={styles.cardTitle}>{item.label}</h4>
            </div>
            
            <div style={styles.progressContainer}>
              <div style={styles.progressBar}>
                <div 
                  style={{ 
                    ...styles.progressFill, 
                    width: `${item.value}%`,
                    backgroundColor: getColor(item.value)
                  }}
                ></div>
              </div>
            </div>
            
            <p style={styles.description}>{item.description}</p>
            
            <div style={styles.tips}>
              <strong>Tips perbaikan:</strong> {getImprovementTip(item.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const getImprovementTip = (id) => {
  const tips = {
    legalitas: 'Lengkapi dokumen legal sesuai jenis usaha (SIUP, TDP, atau akta notaris)',
    kejelasan: 'Perjelas target pasar dan unique selling proposition',
    keuangan: 'Sediakan laporan keuangan minimal 6 bulan terakhir',
    risiko: 'Buat rencana mitigasi untuk risiko utama bisnis'
  }
  return tips[id] || 'Perbaiki data dan konsistensi informasi'
}

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280',
    marginBottom: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    padding: '1.5rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.75rem',
    backgroundColor: '#f9fafb'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  skorCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '3px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  skorValue: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: 0
  },
  progressContainer: {
    marginBottom: '1rem'
  },
  progressBar: {
    height: '0.5rem',
    backgroundColor: '#e5e7eb',
    borderRadius: '0.25rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.3s ease'
  },
  description: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: '1.5'
  },
  tips: {
    fontSize: '0.75rem',
    color: '#4b5563',
    backgroundColor: '#f3f4f6',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    borderLeft: '3px solid #2563eb'
  }
}

export default SubSkor