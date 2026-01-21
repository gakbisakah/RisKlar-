import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { akunDummy } from '../data/akunDummy'
import { getUMKMById } from '../data/umkmDummy'
import { getAllStatus, getStatusByUMKMId } from '../data/statusDummy'
import StatusKerjaSama from '../components/shared/StatusKerjaSama'
import CatatanSistem from '../components/shared/CatatanSistem'

const Status = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const currentUser = akunDummy.getCurrentUser()
  const allStatus = getAllStatus()
  
  // Jika ada ID spesifik, tampilkan status UMKM tersebut
  // Jika tidak, tampilkan semua status berdasarkan role
  let statusData = []
  let title = ''
  let subtitle = ''
  
  if (id) {
    const umkmData = getUMKMById(id)
    const specificStatus = getStatusByUMKMId(id)
    
    if (!umkmData) {
      return (
        <div style={styles.container}>
          <div style={styles.error}>
            <h2>Data tidak ditemukan</h2>
            <button onClick={() => navigate(-1)} style={styles.button}>
              Kembali
            </button>
          </div>
        </div>
      )
    }
    
    statusData = specificStatus ? [specificStatus] : []
    title = `Status Kerja Sama - ${umkmData.namaUsaha}`
    subtitle = 'Monitoring perkembangan kerja sama investasi'
  } else {
    // Filter berdasarkan role
    if (currentUser?.role === 'UMKM') {
      statusData = allStatus.filter(status => status.umkmId === currentUser.id)
    } else if (currentUser?.role === 'INVESTOR') {
      statusData = allStatus.filter(status => status.investorId === currentUser.id)
    } else {
      statusData = allStatus
    }
    
    title = 'Status Kerja Sama'
    subtitle = 'Monitoring semua kerja sama investasi'
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>{title}</h1>
          <p style={styles.subtitle}>{subtitle}</p>
        </div>
        <button 
          onClick={() => navigate(-1)}
          style={styles.backButton}
        >
          ← Kembali
        </button>
      </div>

      {statusData.length === 0 ? (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📊</div>
          <h3 style={styles.emptyTitle}>Belum Ada Status Kerja Sama</h3>
          <p style={styles.emptyText}>
            {currentUser?.role === 'UMKM' 
              ? 'Anda belum memiliki kerja sama investasi yang aktif.'
              : 'Belum ada kerja sama investasi yang tercatat.'}
          </p>
          {currentUser?.role === 'UMKM' && (
            <button 
              style={styles.actionButton}
              onClick={() => navigate('/dashboard-umkm')}
            >
              Tingkatkan Skor Kesiapan
            </button>
          )}
          {currentUser?.role === 'INVESTOR' && (
            <button 
              style={styles.actionButton}
              onClick={() => navigate('/dashboard-investor')}
            >
              Jelajahi UMKM Tersedia
            </button>
          )}
        </div>
      ) : (
        <>
          {statusData.map((status) => (
            <div key={status.id} style={styles.statusCard}>
              <StatusKerjaSama statusData={status} umkmId={status.umkmId} />
            </div>
          ))}
        </>
      )}

      <div style={styles.infoGrid}>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Status Tersedia</h3>
          <div style={styles.statusList}>
            <div style={styles.statusItem}>
              <span style={styles.statusDotSuccess}></span>
              <span>Dalam Kerja Sama</span>
            </div>
            <div style={styles.statusItem}>
              <span style={styles.statusDotInfo}></span>
              <span>Kerja Sama Selesai</span>
            </div>
            <div style={styles.statusItem}>
              <span style={styles.statusDotDanger}></span>
              <span>Dibatalkan</span>
            </div>
            <div style={styles.statusItem}>
              <span style={styles.statusDotWarning}></span>
              <span>Mencari Investor</span>
            </div>
          </div>
        </div>

        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Peran Platform</h3>
          <div style={styles.roleInfo}>
            <p style={styles.roleText}>
              <strong>Platform hanya mencatat proses, bukan menilai hasil kerja sama.</strong>
            </p>
            <ul style={styles.roleList}>
              <li>Mencatat timeline kesepakatan</li>
              <li>Menyimpan status perkembangan</li>
              <li>Memberikan transparansi proses</li>
              <li>Tidak menilai sukses/gagal investasi</li>
            </ul>
          </div>
        </div>

        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Data untuk Demonstrasi</h3>
          <div style={styles.demoInfo}>
            <p>Status kerja sama yang tersedia:</p>
            <div style={styles.demoStatus}>
              <button 
                style={styles.demoButton}
                onClick={() => navigate('/status/umkm-3')}
              >
                EcoPack Solution (Aktif)
              </button>
              <button 
                style={styles.demoButton}
                onClick={() => navigate('/status/umkm-2')}
              >
                Batik Kreatif (Mencari)
              </button>
            </div>
          </div>
        </div>
      </div>

      <CatatanSistem 
        catatan={[
          'Semua status kerja sama dicatat secara transparan',
          'Platform tidak terlibat dalam eksekusi kesepakatan',
          'Data status bersifat informatif untuk semua pihak',
          'Perubahan status dilakukan oleh pihak terkait'
        ]}
        type="info"
      />

      <div style={styles.note}>
        <p>
          <strong>Kalimat Konsisten WAJIB:</strong> Platform hanya mencatat proses, bukan menilai hasil kerja sama.
        </p>
        <p style={styles.demoNote}>Mode demonstrasi - perubahan status bersifat sementara</p>
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
  statusCard: {
    marginBottom: '2rem'
  },
  emptyState: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '4rem 2rem',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '1.5rem',
    opacity: 0.5
  },
  emptyTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  emptyText: {
    color: '#6b7280',
    marginBottom: '2rem',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  actionButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  infoTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e5e7eb'
  },
  statusList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  statusItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem'
  },
  statusDotSuccess: {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    backgroundColor: '#10b981'
  },
  statusDotInfo: {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    backgroundColor: '#6b7280'
  },
  statusDotDanger: {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    backgroundColor: '#ef4444'
  },
  statusDotWarning: {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    backgroundColor: '#f59e0b'
  },
  roleInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  roleText: {
    color: '#4b5563',
    lineHeight: '1.6'
  },
  roleList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  'roleList li': {    
    padding: '0.5rem',
    backgroundColor: '#f0f9ff',
    borderRadius: '0.375rem',
    fontSize: '0.875rem'
  },
  demoInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  demoStatus: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  demoButton: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: '0.875rem'
  },
  note: {
    backgroundColor: '#eff6ff',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    textAlign: 'center',
    marginTop: '2rem'
  },
  demoNote: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.5rem'
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

export default Status