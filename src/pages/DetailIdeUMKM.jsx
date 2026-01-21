import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { akunDummy } from '../data/akunDummy'
import { getUMKMById } from '../data/umkmDummy'
import { getStatusByUMKMId } from '../data/statusDummy'
import ChecklistTidakDijanjikan from '../components/shared/ChecklistTidakDijanjikan'
import CatatanSistem from '../components/shared/CatatanSistem'
import TombolAksi from '../components/shared/TombolAksi'
import StatusKerjaSama from '../components/shared/StatusKerjaSama'

const DetailIdeUMKM = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const currentUser = akunDummy.getCurrentUser()
  const umkmData = getUMKMById(id)
  const statusData = getStatusByUMKMId(id)

  if (!umkmData) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <h2>Data UMKM tidak ditemukan</h2>
          <button onClick={() => navigate('/dashboard-investor')} style={styles.button}>
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>{umkmData.namaUsaha}</h1>
          <p style={styles.subtitle}>Pemilik: {umkmData.pemilik}</p>
        </div>
        <div style={styles.headerActions}>
          <button 
            onClick={() => navigate('/dashboard-investor')}
            style={styles.backButton}
          >
            ← Kembali
          </button>
          {currentUser?.role === 'INVESTOR' && (
            <button 
              style={styles.interestButton}
              onClick={() => navigate(`/kesepakatan/${id}`)}
            >
              ⭐ Ajukan Minat
            </button>
          )}
        </div>
      </div>

      <div style={styles.alert}>
        <div style={styles.alertIcon}>⚠️</div>
        <div style={styles.alertContent}>
          <strong>Risiko Terburuk (Ditampilkan paling atas):</strong> {umkmData.masalah.risikoTerburuk}
        </div>
      </div>

      <div style={styles.grid}>
        <div style={styles.mainContent}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Ringkasan Usaha</h2>
            <div style={styles.summaryGrid}>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Status Usaha</span>
                <span style={styles.summaryValue}>{umkmData.statusUsaha}</span>
              </div>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Omzet Range</span>
                <span style={styles.summaryValue}>{umkmData.omzetRange}</span>
              </div>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Karyawan</span>
                <span style={styles.summaryValue}>{umkmData.karyawan}</span>
              </div>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Legalitas</span>
                <span style={styles.summaryValue}>{umkmData.legalitas}</span>
              </div>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Skor Kesiapan</span>
                <span style={styles.summaryValue}>{umkmData.skor.total}%</span>
              </div>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Bergabung</span>
                <span style={styles.summaryValue}>{umkmData.tanggalBergabung}</span>
              </div>
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Masalah & Solusi</h2>
            <div style={styles.problemSolution}>
              <div style={styles.problemBox}>
                <h3 style={styles.boxTitle}>Masalah Utama</h3>
                <p style={styles.boxContent}>{umkmData.masalah.masalahUtama}</p>
              </div>
              <div style={styles.solutionBox}>
                <h3 style={styles.boxTitle}>Solusi yang Diterapkan</h3>
                <p style={styles.boxContent}>{umkmData.masalah.solusi}</p>
              </div>
            </div>
            <div style={styles.evidenceBox}>
              <h3 style={styles.boxTitle}>Bukti/Basis Data</h3>
              <p style={styles.boxContent}>{umkmData.masalah.bukti}</p>
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Detail Kesiapan Investasi</h2>
            <div style={styles.investmentDetails}>
              <div style={styles.detailCard}>
                <h3 style={styles.detailTitle}>Penggunaan Dana</h3>
                <p style={styles.detailContent}>{umkmData.masalah.penggunaanDana}</p>
              </div>
              <div style={styles.detailCard}>
                <h3 style={styles.detailTitle}>Kesediaan Transparansi</h3>
                <p style={styles.detailContent}>{umkmData.masalah.kesediaanTransparansi}</p>
              </div>
            </div>
          </div>

          <CatatanSistem 
            catatan={umkmData.catatanSistem}
            type="info"
          />
        </div>

        <div style={styles.sidebar}>
          <ChecklistTidakDijanjikan />
          
          <TombolAksi umkmId={id} role={currentUser?.role} />
          
          {statusData && (
            <StatusKerjaSama statusData={statusData} umkmId={id} />
          )}

          <div style={styles.sidebarCard}>
            <h3 style={styles.sidebarTitle}>Skor Detail</h3>
            <div style={styles.scoreDetails}>
              <div style={styles.scoreItem}>
                <span>Legalitas Dasar:</span>
                <span>{umkmData.skor.legalitas}%</span>
              </div>
              <div style={styles.scoreItem}>
                <span>Kejelasan Usaha:</span>
                <span>{umkmData.skor.kejelasanUsaha}%</span>
              </div>
              <div style={styles.scoreItem}>
                <span>Realistis Keuangan:</span>
                <span>{umkmData.skor.realistisKeuangan}%</span>
              </div>
              <div style={styles.scoreItem}>
                <span>Risiko Operasional:</span>
                <span>{umkmData.skor.risikoOperasional}%</span>
              </div>
            </div>
          </div>

          <div style={styles.sidebarCard}>
            <h3 style={styles.sidebarTitle}>Rekomendasi Sistem</h3>
            <p style={styles.recommendation}>{umkmData.skor.rekomendasi}</p>
          </div>
        </div>
      </div>

      <div style={styles.note}>
        <p>
          <strong>Platform hanya mencatat proses, bukan menilai hasil kerja sama.</strong><br />
          Data yang ditampilkan adalah contoh statis untuk demonstrasi.
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
  headerActions: {
    display: 'flex',
    gap: '1rem'
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
  interestButton: {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  alert: {
    backgroundColor: '#fef3c7',
    borderLeft: '4px solid #f59e0b',
    padding: '1rem 1.5rem',
    marginBottom: '2rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  alertIcon: {
    fontSize: '1.5rem',
    flexShrink: 0
  },
  alertContent: {
    flex: 1,
    color: '#92400e'
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
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e5e7eb'
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  summaryItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  summaryLabel: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.25rem'
  },
  summaryValue: {
    fontWeight: '600',
    color: '#1f2937',
    fontSize: '1rem'
  },
  problemSolution: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },
  problemBox: {
    backgroundColor: '#fef2f2',
    padding: '1rem',
    borderRadius: '0.75rem',
    borderLeft: '4px solid #ef4444'
  },
  solutionBox: {
    backgroundColor: '#d1fae5',
    padding: '1rem',
    borderRadius: '0.75rem',
    borderLeft: '4px solid #10b981'
  },
  evidenceBox: {
    backgroundColor: '#eff6ff',
    padding: '1rem',
    borderRadius: '0.75rem',
    borderLeft: '4px solid #3b82f6'
  },
  boxTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  boxContent: {
    color: '#4b5563',
    lineHeight: '1.6',
    fontSize: '0.875rem'
  },
  investmentDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  },
  detailCard: {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.75rem'
  },
  detailTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  detailContent: {
    color: '#4b5563',
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
    marginBottom: '1rem'
  },
  scoreDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  scoreItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f3f4f6'
  },
  recommendation: {
    backgroundColor: '#f0f9ff',
    padding: '1rem',
    borderRadius: '0.5rem',
    color: '#0369a1',
    lineHeight: '1.6'
  },
  note: {
    backgroundColor: '#f3f4f6',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    color: '#6b7280'
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

export default DetailIdeUMKM