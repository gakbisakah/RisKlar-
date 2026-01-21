import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getUMKMById } from '../data/umkmDummy'
import DiskusiTerstruktur from '../components/shared/DiskusiTerstruktur'
import CatatanSistem from '../components/shared/CatatanSistem'

const Diskusi = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const umkmData = getUMKMById(id)

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

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Diskusi Terstruktur</h1>
          <p style={styles.subtitle}>
            Percakapan terstruktur dengan {umkmData.namaUsaha}
          </p>
        </div>
        <button 
          onClick={() => navigate(`/detail-umkm/${id}`)}
          style={styles.backButton}
        >
          ← Kembali ke Detail
        </button>
      </div>

      <div style={styles.umkmInfo}>
        <div style={styles.umkmCard}>
          <h3 style={styles.umkmTitle}>Informasi UMKM</h3>
          <div style={styles.umkmDetails}>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>Nama Usaha:</span>
              <span style={styles.detailValue}>{umkmData.namaUsaha}</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>Pemilik:</span>
              <span style={styles.detailValue}>{umkmData.pemilik}</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>Skor Kesiapan:</span>
              <span style={styles.detailValue}>{umkmData.skor.total}%</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>Status:</span>
              <span style={styles.detailValue}>
                {umkmData.statusInvestor === 'hidden' ? 'Tidak Tampil' : 'Tersedia'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <DiskusiTerstruktur umkmId={id} />

      <div style={styles.guidelines}>
        <h3 style={styles.guidelinesTitle}>Panduan Diskusi</h3>
        <div style={styles.guidelinesGrid}>
          <div style={styles.guidelineItem}>
            <div style={styles.guidelineIcon}>🎯</div>
            <h4 style={styles.guidelineTitle}>Fokus pada Data</h4>
            <p style={styles.guidelineText}>
              Diskusikan data spesifik yang telah diunggah UMKM
            </p>
          </div>
          <div style={styles.guidelineItem}>
            <div style={styles.guidelineIcon}>⚖️</div>
            <h4 style={styles.guidelineTitle}>Netral dan Profesional</h4>
            <p style={styles.guidelineText}>
              Jaga profesionalisme dan fokus pada fakta
            </p>
          </div>
          <div style={styles.guidelineItem}>
            <div style={styles.guidelineIcon}>📝</div>
            <h4 style={styles.guidelineTitle}>Structured Format</h4>
            <p style={styles.guidelineText}>
              Gunakan format terstruktur untuk kejelasan
            </p>
          </div>
          <div style={styles.guidelineItem}>
            <div style={styles.guidelineIcon}>🔒</div>
            <h4 style={styles.guidelineTitle}>Transparansi</h4>
            <p style={styles.guidelineText}>
              Percakapan tersimpan sebagai referensi transparan
            </p>
          </div>
        </div>
      </div>

      <CatatanSistem 
        catatan={[
          'Diskusi difasilitasi platform untuk transparansi',
          'Percakapan disimpan sebagai referensi bersama',
          'Platform tidak memoderasi konten percakapan',
          'Semua pihak bertanggung jawab atas konten yang dikirim'
        ]}
        type="info"
      />

      <div style={styles.note}>
        <p>
          <strong>Mode Demonstrasi:</strong> Fitur chat ini adalah simulasi. 
          Pesan yang dikirim hanya bersifat sementara untuk demo.
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
  umkmInfo: {
    marginBottom: '2rem'
  },
  umkmCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  umkmTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e5e7eb'
  },
  umkmDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  detailLabel: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.25rem'
  },
  detailValue: {
    fontWeight: '600',
    color: '#1f2937'
  },
  guidelines: {
    marginBottom: '2rem'
  },
  guidelinesTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  guidelinesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem'
  },
  guidelineItem: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  guidelineIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  guidelineTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  guidelineText: {
    color: '#6b7280',
    fontSize: '0.875rem',
    lineHeight: '1.5'
  },
  note: {
    backgroundColor: '#fef3c7',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    color: '#92400e',
    marginTop: '2rem'
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

export default Diskusi