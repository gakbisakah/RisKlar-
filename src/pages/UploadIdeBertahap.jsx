import React from 'react'
import TahapUpload from '../components/umkm/TahapUpload'
import CatatanSistem from '../components/shared/CatatanSistem'

const UploadIdeBertahap = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Upload Data Usaha Bertahap</h1>
        <p style={styles.subtitle}>
          Lengkapi data usaha Anda secara bertahap untuk mendapatkan penilaian yang akurat
        </p>
      </div>

      <TahapUpload />

      <div style={styles.infoSection}>
        <h3 style={styles.infoTitle}>Mengapa Bertahap?</h3>
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <div style={styles.infoIcon}>🔒</div>
            <h4 style={styles.infoCardTitle}>Konsistensi Data</h4>
            <p style={styles.infoCardText}>
              Mencegah UMKM melompat tahap untuk menjaga konsistensi penilaian sistem.
            </p>
          </div>
          
          <div style={styles.infoCard}>
            <div style={styles.infoIcon}>📊</div>
            <h4 style={styles.infoCardTitle}>Penilaian Akurat</h4>
            <p style={styles.infoCardText}>
              Setiap tahap memberikan informasi spesifik untuk penilaian yang lebih akurat.
            </p>
          </div>
          
          <div style={styles.infoCard}>
            <div style={styles.infoIcon}>🎯</div>
            <h4 style={styles.infoCardTitle}>Fokus pada Risiko</h4>
            <p style={styles.infoCardText}>
              Setiap tahap dirancang untuk mengungkap aspek risiko yang berbeda.
            </p>
          </div>
        </div>
      </div>

      <CatatanSistem 
        catatan={[
          'Data yang diunggah akan mempengaruhi skor kesiapan investasi',
          'Pastikan data yang diisi konsisten dan dapat dipertanggungjawabkan',
          'UMKM dapat memperbaiki data kapan saja untuk meningkatkan skor'
        ]}
        type="info"
      />

      <div style={styles.note}>
        <p>
          <strong>Mode Demonstrasi:</strong> Form ini hanya simulasi UI. Data tidak benar-benar disimpan. 
          Untuk demo lengkap, gunakan akun UMKM B atau C yang sudah memiliki data lengkap.
        </p>
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
  infoSection: {
    marginTop: '3rem',
    marginBottom: '2rem'
  },
  infoTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  infoCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  infoIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  infoCardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.75rem'
  },
  infoCardText: {
    color: '#6b7280',
    lineHeight: '1.6',
    fontSize: '0.875rem'
  },
  note: {
    backgroundColor: '#fef3c7',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    color: '#92400e',
    marginTop: '2rem'
  }
}

export default UploadIdeBertahap