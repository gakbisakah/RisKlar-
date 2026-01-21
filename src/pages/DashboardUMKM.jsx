import React from 'react'
import { useNavigate } from 'react-router-dom'
import { akunDummy } from '../data/akunDummy'
import { getUMKMById } from '../data/umkmDummy'
import WidgetKesiapan from '../components/umkm/WidgetKesiapan'
import SubSkor from '../components/umkm/SubSkor'
import CatatanSistem from '../components/shared/CatatanSistem'

const DashboardUMKM = () => {
  const navigate = useNavigate()
  const currentUser = akunDummy.getCurrentUser()
  const umkmData = getUMKMById(currentUser?.id)

  if (!umkmData) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <h2>Data tidak ditemukan</h2>
          <button onClick={() => navigate('/auth')} style={styles.button}>
            Kembali ke Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.welcome}>Selamat Datang, {umkmData.pemilik}!</h1>
          <p style={styles.subtitle}>Dashboard Monitoring Kesiapan Investasi</p>
        </div>
        <div style={styles.usahaInfo}>
          <div style={styles.usahaName}>{umkmData.namaUsaha}</div>
          <div style={styles.usahaStatus}>Status: {umkmData.statusUsaha}</div>
        </div>
      </div>

      <div style={styles.grid}>
        <div style={styles.mainContent}>
          <WidgetKesiapan umkmData={umkmData} />
          <SubSkor skorData={umkmData.skor} />
          
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Aksi Cepat</h3>
            <div style={styles.quickActions}>
              <button 
                style={styles.quickAction}
                onClick={() => navigate('/upload-ide')}
              >
                <span style={styles.actionIcon}>📤</span>
                <span style={styles.actionText}>Perbaiki Data Usaha</span>
              </button>
              <button 
                style={styles.quickAction}
                onClick={() => navigate('/penilaian')}
              >
                <span style={styles.actionIcon}>📊</span>
                <span style={styles.actionText}>Lihat Sistem Penilaian</span>
              </button>
              <button 
                style={styles.quickAction}
                onClick={() => {
                  if (umkmData.skor.total >= 60) {
                    alert('UMKM Anda sudah tersedia untuk dilihat investor')
                  } else {
                    alert('Skor Anda belum memadai untuk ditampilkan ke investor')
                  }
                }}
              >
                <span style={styles.actionIcon}>👁️</span>
                <span style={styles.actionText}>Status Visibility Investor</span>
              </button>
            </div>
          </div>
        </div>

        <div style={styles.sidebar}>
          <div style={styles.sidebarCard}>
            <h4 style={styles.sidebarTitle}>Timeline Perbaikan</h4>
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

          <CatatanSistem 
            catatan={umkmData.catatanSistem}
            type="warning"
          />

          <div style={styles.sidebarCard}>
            <h4 style={styles.sidebarTitle}>Status Platform</h4>
            <div style={styles.statusItem}>
              <span style={styles.statusLabel}>Tampil ke Investor:</span>
              <span style={styles.statusValue}>
                {umkmData.statusInvestor === 'hidden' ? '❌ Tidak' : '✅ Ya'}
              </span>
            </div>
            <div style={styles.statusItem}>
              <span style={styles.statusLabel}>Bergabung Sejak:</span>
              <span style={styles.statusValue}>{umkmData.tanggalBergabung}</span>
            </div>
            <div style={styles.statusItem}>
              <span style={styles.statusLabel}>Data Terakhir Diperbarui:</span>
              <span style={styles.statusValue}>2024-01-18</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.note}>
        <p>
          <strong>Catatan:</strong> Dashboard ini menampilkan data dummy untuk demonstrasi. 
          Skor dan status berdasarkan data statis yang telah ditentukan.
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  welcome: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280'
  },
  usahaInfo: {
    backgroundColor: '#eff6ff',
    padding: '1rem 1.5rem',
    borderRadius: '0.75rem',
    textAlign: 'right'
  },
  usahaName: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1e40af'
  },
  usahaStatus: {
    color: '#6b7280',
    fontSize: '0.875rem'
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
  card: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  quickActions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem'
  },
  quickAction: {
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '0.75rem',
    padding: '1rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'transform 0.2s'
  },
  actionIcon: {
    fontSize: '2rem'
  },
  actionText: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#4b5563',
    textAlign: 'center'
  },
  sidebarCard: {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  sidebarTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e5e7eb'
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
    fontSize: '0.75rem',
    fontWeight: '600',
    minWidth: '80px'
  },
  timelineContent: {
    flex: 1
  },
  timelineDesc: {
    margin: '0.25rem 0 0 0',
    color: '#6b7280',
    fontSize: '0.875rem'
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

export default DashboardUMKM