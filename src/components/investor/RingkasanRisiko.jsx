import React from 'react'
import { useNavigate } from 'react-router-dom'

const RingkasanRisiko = ({ umkmData }) => {
  const navigate = useNavigate()
  
  const getRiskLevel = (skor) => {
    if (skor >= 80) return { level: 'Rendah', color: '#10b981' }
    if (skor >= 60) return { level: 'Sedang', color: '#f59e0b' }
    return { level: 'Tinggi', color: '#ef4444' }
  }
  
  const riskLevel = getRiskLevel(umkmData.skor.total)

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Ringkasan Risiko</h2>
        <div style={{ ...styles.riskBadge, backgroundColor: riskLevel.color + '20', color: riskLevel.color }}>
          Risiko {riskLevel.level}
        </div>
      </div>
      
      <div style={styles.content}>
        <div style={styles.riskSection}>
          <h3 style={styles.sectionTitle}>Identifikasi Risiko Utama</h3>
          <ul style={styles.riskList}>
            {umkmData.skor.masalahUtama.map((masalah, index) => (
              <li key={index} style={styles.riskItem}>
                ⚠️ {masalah}
              </li>
            ))}
            {umkmData.catatanSistem.map((catatan, index) => (
              <li key={`catatan-${index}`} style={styles.riskItem}>
                📝 {catatan}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={styles.infoSection}>
          <h3 style={styles.sectionTitle}>Informasi Dasar</h3>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Status Usaha:</span>
              <span style={styles.infoValue}>{umkmData.statusUsaha}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Omzet Range:</span>
              <span style={styles.infoValue}>{umkmData.omzetRange}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Legalitas:</span>
              <span style={styles.infoValue}>{umkmData.legalitas}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Bergabung:</span>
              <span style={styles.infoValue}>{umkmData.tanggalBergabung}</span>
            </div>
          </div>
        </div>
        
        <div style={styles.riwayatSection}>
          <h3 style={styles.sectionTitle}>Riwayat Perbaikan UMKM</h3>
          <div style={styles.timeline}>
            {umkmData.timelinePerbaikan.map((item, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineDate}>{item.date}</div>
                <div style={styles.timelineContent}>
                  <strong>{item.action}</strong>
                  <p style={styles.timelineDesc}>{item.perubahan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div style={styles.actions}>
        <button 
          style={styles.actionBtn}
          onClick={() => navigate(`/detail-umkm/${umkmData.id}`)}
        >
          Lihat Detail Lengkap
        </button>
        <button 
          style={{...styles.actionBtn, ...styles.secondaryBtn}}
          onClick={() => navigate(`/diskusi/${umkmData.id}`)}
        >
          Mulai Diskusi
        </button>
      </div>
      
      <div style={styles.note}>
        <p>
          <strong>Catatan Platform:</strong> Penilaian risiko berdasarkan data yang diunggah UMKM. 
          Investor bertanggung jawab penuh atas due diligence tambahan.
        </p>
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
  riskBadge: {
    padding: '0.5rem 1.5rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600',
    display: 'inline-block'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  sectionTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e5e7eb'
  },
  riskSection: {
    backgroundColor: '#fef2f2',
    padding: '1.5rem',
    borderRadius: '0.75rem'
  },
  riskList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  riskItem: {
    padding: '0.75rem 0',
    borderBottom: '1px solid #fee2e2',
    color: '#4b5563'
  },
  infoSection: {
    backgroundColor: '#eff6ff',
    padding: '1.5rem',
    borderRadius: '0.75rem'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  infoLabel: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.25rem'
  },
  infoValue: {
    fontWeight: '600',
    color: '#1f2937'
  },
  riwayatSection: {
    backgroundColor: '#f0f9ff',
    padding: '1.5rem',
    borderRadius: '0.75rem'
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  timelineItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  },
  timelineDate: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    minWidth: '100px'
  },
  timelineContent: {
    flex: 1
  },
  timelineDesc: {
    margin: '0.25rem 0 0 0',
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
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
    flex: 1,
    minWidth: '200px'
  },
  secondaryBtn: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    border: '1px solid #d1d5db'
  },
  note: {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem',
    borderLeft: '4px solid #6b7280'
  }
}

export default RingkasanRisiko