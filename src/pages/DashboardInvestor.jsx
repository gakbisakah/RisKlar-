import React from 'react'
import { akunDummy } from '../data/akunDummy'
import { investorDummy } from '../data/investorDummy'
import { getUMKMForInvestor } from '../data/umkmDummy'
import RingkasanRisiko from '../components/investor/RingkasanRisiko'
import CompareUMKM from '../components/investor/CompareUMKM'
import CatatanSistem from '../components/shared/CatatanSistem'

const DashboardInvestor = () => {
  const currentUser = akunDummy.getCurrentUser()
  const umkmList = getUMKMForInvestor()

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.welcome}>Dashboard Investor</h1>
          <p style={styles.subtitle}>Analisis risiko dan peluang investasi UMKM</p>
        </div>
        <div style={styles.investorInfo}>
          <div style={styles.investorName}>{currentUser?.name}</div>
          <div style={styles.investorType}>{investorDummy.tipe}</div>
        </div>
      </div>

      <div style={styles.stats}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>🏪</div>
          <div style={styles.statContent}>
            <div style={styles.statValue}>{umkmList.length}</div>
            <div style={styles.statLabel}>UMKM Tersedia</div>
          </div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>⭐</div>
          <div style={styles.statContent}>
            <div style={styles.statValue}>{investorDummy.minatSaatIni.length}</div>
            <div style={styles.statLabel}>Dalam Review</div>
          </div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>📈</div>
          <div style={styles.statContent}>
            <div style={styles.statValue}>{investorDummy.portfolio.length}</div>
            <div style={styles.statLabel}>Portfolio</div>
          </div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>👁️</div>
          <div style={styles.statContent}>
            <div style={styles.statValue}>{investorDummy.riwayat.length}</div>
            <div style={styles.statLabel}>Aktivitas</div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>UMKM yang Tersedia</h2>
        <p style={styles.sectionSubtitle}>Urutan berdasarkan Risk-first Design</p>
        
        <div style={styles.umkmGrid}>
          {umkmList.map((umkm) => (
            <div key={umkm.id} style={styles.umkmCard}>
              <RingkasanRisiko umkmData={umkm} />
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Perbandingan UMKM</h2>
        <CompareUMKM />
      </div>

      <div style={styles.grid}>
        <div style={styles.sidebar}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Preferensi Anda</h3>
            <div style={styles.preferences}>
              <div style={styles.preferenceItem}>
                <span style={styles.preferenceLabel}>Sektor:</span>
                <span style={styles.preferenceValue}>
                  {investorDummy.preferensi.sektor.join(', ')}
                </span>
              </div>
              <div style={styles.preferenceItem}>
                <span style={styles.preferenceLabel}>Ticket Size:</span>
                <span style={styles.preferenceValue}>{investorDummy.preferensi.ticketSize}</span>
              </div>
              <div style={styles.preferenceItem}>
                <span style={styles.preferenceLabel}>Stage:</span>
                <span style={styles.preferenceValue}>{investorDummy.preferensi.stage}</span>
              </div>
              <div style={styles.preferenceItem}>
                <span style={styles.preferenceLabel}>Lokasi:</span>
                <span style={styles.preferenceValue}>{investorDummy.preferensi.lokasi}</span>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Riwayat Aktivitas</h3>
            <div style={styles.activityList}>
              {investorDummy.riwayat.slice(0, 5).map((item, index) => (
                <div key={index} style={styles.activityItem}>
                  <div style={styles.activityDate}>{item.tanggal}</div>
                  <div style={styles.activityContent}>
                    <strong>{item.aksi}</strong>
                    <p style={styles.activityDetail}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.main}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Portfolio Saat Ini</h3>
            <div style={styles.portfolioList}>
              {investorDummy.portfolio.map((item, index) => (
                <div key={index} style={styles.portfolioItem}>
                  <div style={styles.portfolioName}>{item.nama}</div>
                  <div style={styles.portfolioDetails}>
                    <span style={styles.portfolioStatus}>{item.status}</span>
                    <span style={styles.portfolioSince}>Sejak {item.sejak}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CatatanSistem 
            catatan={[
              'Dashboard dirancang dengan prinsip "risk-first"',
              'Data UMKM diurutkan berdasarkan tingkat risiko',
              'Investor bertanggung jawab penuh atas due diligence',
              'Platform hanya menyediakan data, bukan rekomendasi'
            ]}
            type="info"
          />
        </div>
      </div>

      <div style={styles.note}>
        <p>
          <strong>Catatan:</strong> Dashboard ini menampilkan data dummy untuk demonstrasi. 
          Semua UMKM dan data investasi adalah contoh statis.
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
  welcome: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280'
  },
  investorInfo: {
    backgroundColor: '#d1fae5',
    padding: '1rem 1.5rem',
    borderRadius: '0.75rem',
    textAlign: 'right'
  },
  investorName: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#065f46'
  },
  investorType: {
    color: '#047857',
    fontSize: '0.875rem'
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '3rem'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  statIcon: {
    fontSize: '2.5rem'
  },
  statContent: {
    flex: 1
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    lineHeight: 1
  },
  statLabel: {
    color: '#6b7280',
    fontSize: '0.875rem',
    marginTop: '0.25rem'
  },
  section: {
    marginBottom: '3rem'
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  sectionSubtitle: {
    color: '#6b7280',
    marginBottom: '1.5rem'
  },
  umkmGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  umkmCard: {
    width: '100%'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '2rem',
    marginBottom: '2rem'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  main: {
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
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e5e7eb'
  },
  preferences: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  preferenceItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f3f4f6'
  },
  preferenceLabel: {
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  preferenceValue: {
    fontWeight: '500',
    color: '#1f2937',
    fontSize: '0.875rem',
    textAlign: 'right',
    maxWidth: '60%'
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  activityItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  },
  activityDate: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    minWidth: '70px'
  },
  activityContent: {
    flex: 1
  },
  activityDetail: {
    margin: '0.25rem 0 0 0',
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  portfolioList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  portfolioItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.75rem'
  },
  portfolioName: {
    fontWeight: '600',
    color: '#1f2937'
  },
  portfolioDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.25rem'
  },
  portfolioStatus: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600'
  },
  portfolioSince: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  note: {
    backgroundColor: '#fef3c7',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    color: '#92400e'
  }
}

export default DashboardInvestor