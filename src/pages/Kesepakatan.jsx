import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { akunDummy } from '../data/akunDummy'
import { getUMKMById } from '../data/umkmDummy'
import { getKesepakatanByUMKMId, updateChecklistItem } from '../data/kesepakatanDummy'
import CatatanSistem from '../components/shared/CatatanSistem'
import StatusKerjaSama from '../components/shared/StatusKerjaSama'

const Kesepakatan = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const currentUser = akunDummy.getCurrentUser()
  const umkmData = getUMKMById(id)
  const kesepakatanData = getKesepakatanByUMKMId(id)
  const [checklist, setChecklist] = useState(kesepakatanData?.checklist || [])

  if (!umkmData) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <h2>Data UMKM tidak ditemukan</h2>
          <button onClick={() => navigate(-1)} style={styles.button}>
            Kembali
          </button>
        </div>
      </div>
    )
  }

  const handleChecklistChange = (checklistId) => {
    const updatedChecklist = checklist.map(item => 
      item.id === checklistId ? { ...item, status: !item.status } : item
    )
    setChecklist(updatedChecklist)
    updateChecklistItem(id, checklistId, !checklist.find(item => item.id === checklistId)?.status)
  }

  const handleRecordAgreement = () => {
    const completedCount = checklist.filter(item => item.status).length
    const totalCount = checklist.length
    
    if (completedCount === totalCount) {
      alert('Semua checklist telah diselesaikan! Status dapat diubah ke "Dalam Kerja Sama"')
      navigate(`/status/${id}`)
    } else {
      alert(`Masih ada ${totalCount - completedCount} item yang belum diselesaikan`)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Kesepakatan dengan {umkmData.namaUsaha}</h1>
          <p style={styles.subtitle}>
            Checklist dan dokumentasi kesepakatan investasi
          </p>
        </div>
        <button 
          onClick={() => navigate(`/detail-umkm/${id}`)}
          style={styles.backButton}
        >
          ← Kembali ke Detail
        </button>
      </div>

      <div style={styles.grid}>
        <div style={styles.mainContent}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Checklist Kesepakatan</h2>
            <p style={styles.sectionDescription}>
              Centang item yang telah disepakati oleh kedua belah pihak
            </p>
            
            <div style={styles.checklistContainer}>
              {checklist.map((item) => (
                <div key={item.id} style={styles.checklistItem}>
                  <label style={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={item.status}
                      onChange={() => handleChecklistChange(item.id)}
                      style={styles.checkbox}
                    />
                    <span style={styles.checkboxText}>{item.item}</span>
                  </label>
                  <div style={styles.checkboxStatus}>
                    {item.status ? '✅ Disepakati' : '⏳ Menunggu'}
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.progress}>
              <div style={styles.progressHeader}>
                <span>Progress Checklist</span>
                <span>
                  {checklist.filter(item => item.status).length} / {checklist.length}
                </span>
              </div>
              <div style={styles.progressBar}>
                <div 
                  style={{ 
                    ...styles.progressFill, 
                    width: `${(checklist.filter(item => item.status).length / checklist.length) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>

          {kesepakatanData?.dokumen && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Dokumen Kesepakatan</h2>
              <div style={styles.documents}>
                {kesepakatanData.dokumen.map((doc, index) => (
                  <div key={index} style={styles.documentItem}>
                    <div style={styles.documentIcon}>📄</div>
                    <div style={styles.documentInfo}>
                      <div style={styles.documentName}>{doc.nama}</div>
                      <div style={styles.documentStatus}>{doc.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {kesepakatanData?.catatan && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Catatan Negosiasi</h2>
              <div style={styles.notes}>
                <p style={styles.noteText}>{kesepakatanData.catatan}</p>
              </div>
            </div>
          )}

          <CatatanSistem 
            catatan={[
              'Checklist ini untuk memandu proses negosiasi',
              'Platform tidak menyediakan template dokumen hukum',
              'Semua dokumen hukum dibuat di luar platform',
              'Platform hanya mencatat status kesepakatan'
            ]}
            type="warning"
          />
        </div>

        <div style={styles.sidebar}>
          <div style={styles.sidebarCard}>
            <h3 style={styles.sidebarTitle}>Status Kesepakatan</h3>
            <div style={styles.statusInfo}>
              <div style={styles.statusItem}>
                <span style={styles.statusLabel}>Status:</span>
                <span style={styles.statusValue}>{kesepakatanData?.status || 'Dalam Negosiasi'}</span>
              </div>
              <div style={styles.statusItem}>
                <span style={styles.statusLabel}>Tanggal Mulai:</span>
                <span style={styles.statusValue}>{kesepakatanData?.tanggalMulai || '2024-01-20'}</span>
              </div>
              <div style={styles.statusItem}>
                <span style={styles.statusLabel}>Pihak Terlibat:</span>
                <span style={styles.statusValue}>{umkmData.namaUsaha} & Investor</span>
              </div>
            </div>
          </div>

          <div style={styles.sidebarCard}>
            <h3 style={styles.sidebarTitle}>Aksi</h3>
            <div style={styles.actionButtons}>
              <button 
                style={styles.primaryAction}
                onClick={handleRecordAgreement}
              >
                📝 Catat Kesepakatan
              </button>
              <button 
                style={styles.secondaryAction}
                onClick={() => navigate(`/diskusi/${id}`)}
              >
                💬 Lanjutkan Diskusi
              </button>
              <button 
                style={styles.secondaryAction}
                onClick={() => navigate(`/status/${id}`)}
              >
                📊 Lihat Status
              </button>
            </div>
          </div>

          <div style={styles.sidebarCard}>
            <h3 style={styles.sidebarTitle}>Catatan Platform</h3>
            <p style={styles.platformNote}>
              {kesepakatanData?.platformCatatan || 'Platform hanya mencatat proses, bukan menilai hasil kerja sama.'}
            </p>
          </div>

          <StatusKerjaSama 
            statusData={{ status: 'Dalam Negosiasi', warna: 'warning' }}
            umkmId={id}
          />
        </div>
      </div>

      <div style={styles.note}>
        <p>
          <strong>Mode Demonstrasi:</strong> Checklist ini adalah simulasi. 
          Perubahan status bersifat sementara untuk demo.
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem 1rem'
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
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '1.125rem'
  },
  backButton: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    padding: '0.75rem 1.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem',
    marginBottom: '2rem'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  sectionDescription: {
    color: '#6b7280',
    marginBottom: '1.5rem',
    fontSize: '0.875rem'
  },
  checklistContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginBottom: '2rem'
  },
  checklistItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.75rem',
    borderLeft: '4px solid #3b82f6'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: 'pointer',
    flex: 1
  },
  checkbox: {
    width: '1.25rem',
    height: '1.25rem'
  },
  checkboxText: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#1f2937'
  },
  checkboxStatus: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#6b7280',
    minWidth: '100px',
    textAlign: 'right'
  },
  progress: {
    backgroundColor: '#f0f9ff',
    padding: '1rem',
    borderRadius: '0.75rem'
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    color: '#1e40af'
  },
  progressBar: {
    height: '0.75rem',
    backgroundColor: '#dbeafe',
    borderRadius: '0.375rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    transition: 'width 0.3s ease'
  },
  documents: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  documentItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.75rem'
  },
  documentIcon: {
    fontSize: '1.5rem'
  },
  documentInfo: {
    flex: 1
  },
  documentName: {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.25rem'
  },
  documentStatus: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  notes: {
    backgroundColor: '#fef3c7',
    padding: '1rem',
    borderRadius: '0.75rem'
  },
  noteText: {
    margin: 0,
    color: '#92400e',
    lineHeight: '1.6'
  },
  sidebarCard: {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  sidebarTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e5e7eb'
  },
  statusInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  statusItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f3f4f6'
  },
  statusLabel: {
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  statusValue: {
    fontWeight: '600',
    color: '#1f2937',
    fontSize: '0.875rem'
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  primaryAction: {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '1rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  secondaryAction: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    padding: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  platformNote: {
    backgroundColor: '#eff6ff',
    padding: '1rem',
    borderRadius: '0.5rem',
    color: '#1e40af',
    fontSize: '0.875rem',
    lineHeight: '1.6'
  },
  note: {
    backgroundColor: '#fef3c7',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    color: '#92400e'
  },
  error: {
    textAlign: 'center',
    padding: '4rem 1rem'
  },
  button: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    marginTop: '1rem'
  }
}

export default Kesepakatan