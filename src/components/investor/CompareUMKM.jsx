import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getUMKMForInvestor } from '../../data/umkmDummy'

const CompareUMKM = () => {
  const navigate = useNavigate()
  const umkmList = getUMKMForInvestor()
  
  const getStatusColor = (skor) => {
    if (skor >= 80) return '#10b981'
    if (skor >= 60) return '#f59e0b'
    return '#ef4444'
  }
  
  const getStatusText = (skor) => {
    if (skor >= 80) return 'Layak'
    if (skor >= 60) return 'Siap dengan Catatan'
    return 'Belum Siap'
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Bandingkan UMKM</h2>
        <p style={styles.subtitle}>
          Analisis perbandingan UMKM yang tersedia untuk investasi
        </p>
      </div>
      
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nama UMKM</th>
              <th style={styles.th}>Skor</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Omzet Range</th>
              <th style={styles.th}>Legalitas</th>
              <th style={styles.th}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {umkmList.map((umkm) => (
              <tr key={umkm.id} style={styles.tr}>
                <td style={styles.td}>
                  <div style={styles.umkmInfo}>
                    <div style={styles.umkmName}>{umkm.namaUsaha}</div>
                    <div style={styles.umkmOwner}>{umkm.pemilik}</div>
                  </div>
                </td>
                <td style={styles.td}>
                  <div style={styles.skorCell}>
                    <div style={styles.skorValue}>{umkm.skor.total}%</div>
                    <div style={styles.progressBar}>
                      <div 
                        style={{ 
                          ...styles.progressFill, 
                          width: `${umkm.skor.total}%`,
                          backgroundColor: getStatusColor(umkm.skor.total)
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td style={styles.td}>
                  <div 
                    style={{ 
                      ...styles.statusBadge,
                      backgroundColor: getStatusColor(umkm.skor.total) + '20',
                      color: getStatusColor(umkm.skor.total)
                    }}
                  >
                    {getStatusText(umkm.skor.total)}
                  </div>
                </td>
                <td style={styles.td}>{umkm.omzetRange}</td>
                <td style={styles.td}>{umkm.legalitas}</td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button 
                      style={styles.viewBtn}
                      onClick={() => navigate(`/detail-umkm/${umkm.id}`)}
                    >
                      Lihat
                    </button>
                    <button 
                      style={styles.compareBtn}
                      onClick={() => {
                        // Simpan ke localStorage untuk perbandingan
                        const currentCompare = JSON.parse(localStorage.getItem('compareUMKM') || '[]')
                        if (!currentCompare.includes(umkm.id)) {
                          currentCompare.push(umkm.id)
                          localStorage.setItem('compareUMKM', JSON.stringify(currentCompare))
                          alert(`"${umkm.namaUsaha}" ditambahkan ke perbandingan`)
                        }
                      }}
                    >
                      Bandingkan
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={styles.note}>
        <p>
          <strong>Catatan:</strong> Perbandingan membantu investor menilai UMKM berdasarkan parameter konsisten. 
          Data diambil dari informasi yang diunggah UMKM.
        </p>
      </div>
      
      <div style={styles.footer}>
        <button 
          style={styles.primaryBtn}
          onClick={() => {
            const compareList = JSON.parse(localStorage.getItem('compareUMKM') || '[]')
            if (compareList.length > 0) {
              alert(`Sedang membandingkan ${compareList.length} UMKM`)
              // Navigate ke halaman perbandingan detail
            } else {
              alert('Pilih UMKM untuk dibandingkan terlebih dahulu')
            }
          }}
        >
          Lihat Perbandingan ({JSON.parse(localStorage.getItem('compareUMKM') || '[]').length})
        </button>
        <button 
          style={styles.secondaryBtn}
          onClick={() => localStorage.setItem('compareUMKM', JSON.stringify([]))}
        >
          Reset Perbandingan
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    marginBottom: '2rem'
  },
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280'
  },
  tableContainer: {
    overflowX: 'auto',
    marginBottom: '2rem'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    padding: '1rem',
    textAlign: 'left',
    backgroundColor: '#f9fafb',
    borderBottom: '2px solid #e5e7eb',
    fontWeight: '600',
    color: '#374151',
    fontSize: '0.875rem'
  },
  tr: {
    borderBottom: '1px solid #e5e7eb'
  },
  td: {
    padding: '1rem',
    verticalAlign: 'middle'
  },
  umkmInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  umkmName: {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.25rem'
  },
  umkmOwner: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  skorCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  skorValue: {
    fontWeight: '600',
    color: '#1f2937',
    minWidth: '45px'
  },
  progressBar: {
    flex: 1,
    height: '0.5rem',
    backgroundColor: '#e5e7eb',
    borderRadius: '0.25rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.3s ease'
  },
  statusBadge: {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
    display: 'inline-block'
  },
  actionButtons: {
    display: 'flex',
    gap: '0.5rem'
  },
  viewBtn: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.75rem',
    fontWeight: '600'
  },
  compareBtn: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.75rem',
    fontWeight: '600'
  },
  note: {
    backgroundColor: '#eff6ff',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem',
    fontSize: '0.875rem'
  },
  footer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600'
  },
  secondaryBtn: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    padding: '0.75rem 1.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600'
  }
}

export default CompareUMKM