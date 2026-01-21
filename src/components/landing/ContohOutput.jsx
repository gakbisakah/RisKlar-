import React from 'react'

const ContohOutput = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Contoh Output Sistem</h2>
        
        <div style={styles.outputCard}>
          <div style={styles.outputHeader}>
            <div style={styles.statusBadge}>
              <span style={styles.statusDot}></span>
              Status: 🟡 Siap dengan Catatan
            </div>
            <div style={styles.skor}>Skor Sistem: 68%</div>
          </div>
          
          <div style={styles.outputContent}>
            <h3 style={styles.catatanTitle}>Catatan Utama:</h3>
            <ul style={styles.catatanList}>
              <li style={styles.catatanItem}>Arus kas belum stabil</li>
              <li style={styles.catatanItem}>Risiko operasional masih tinggi</li>
              <li style={styles.catatanItem}>Perlu bukti konsistensi omzet 6 bulan terakhir</li>
              <li style={styles.catatanItem}>Legalitas dasar sudah memadai</li>
            </ul>
            
            <div style={styles.subSkor}>
              <div style={styles.subSkorItem}>
                <span style={styles.subSkorLabel}>Legalitas Dasar:</span>
                <div style={styles.progressBar}>
                  <div style={{...styles.progressFill, width: '80%'}}></div>
                </div>
                <span style={styles.subSkorValue}>80%</span>
              </div>
              
              <div style={styles.subSkorItem}>
                <span style={styles.subSkorLabel}>Kejelasan Usaha:</span>
                <div style={styles.progressBar}>
                  <div style={{...styles.progressFill, width: '75%'}}></div>
                </div>
                <span style={styles.subSkorValue}>75%</span>
              </div>
              
              <div style={styles.subSkorItem}>
                <span style={styles.subSkorLabel}>Realistis Keuangan:</span>
                <div style={styles.progressBar}>
                  <div style={{...styles.progressFill, width: '60%'}}></div>
                </div>
                <span style={styles.subSkorValue}>60%</span>
              </div>
              
              <div style={styles.subSkorItem}>
                <span style={styles.subSkorLabel}>Risiko Operasional:</span>
                <div style={styles.progressBar}>
                  <div style={{...styles.progressFill, width: '65%'}}></div>
                </div>
                <span style={styles.subSkorValue}>65%</span>
              </div>
            </div>
          </div>
          
          <div style={styles.outputFooter}>
            <p style={styles.disclaimer}>
              📌 <strong>Contoh ini bersifat ilustratif, bukan rekomendasi investasi.</strong><br />
              Skor dihitung dari jawaban UMKM, konsistensi data, dan indikator kesiapan investasi dasar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 1rem',
    backgroundColor: 'white'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  outputCard: {
    backgroundColor: '#f9fafb',
    borderRadius: '0.75rem',
    border: '2px solid #e5e7eb',
    overflow: 'hidden'
  },
  outputHeader: {
    backgroundColor: '#fef3c7',
    padding: '1.5rem',
    borderBottom: '2px solid #f59e0b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#92400e'
  },
  statusDot: {
    width: '0.75rem',
    height: '0.75rem',
    backgroundColor: '#f59e0b',
    borderRadius: '50%',
    display: 'inline-block'
  },
  skor: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#1f2937'
  },
  outputContent: {
    padding: '2rem'
  },
  catatanTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  catatanList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 2rem 0'
  },
  catatanItem: {
    padding: '0.5rem 0',
    color: '#4b5563',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  subSkor: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  subSkorItem: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr auto',
    alignItems: 'center',
    gap: '1rem'
  },
  subSkorLabel: {
    fontWeight: '500',
    color: '#4b5563'
  },
  progressBar: {
    height: '0.75rem',
    backgroundColor: '#e5e7eb',
    borderRadius: '0.375rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563eb',
    transition: 'width 0.3s ease'
  },
  subSkorValue: {
    fontWeight: '600',
    color: '#1f2937',
    minWidth: '3rem',
    textAlign: 'right'
  },
  outputFooter: {
    backgroundColor: '#eff6ff',
    padding: '1.5rem',
    borderTop: '1px solid #dbeafe'
  },
  disclaimer: {
    color: '#1e40af',
    fontSize: '0.875rem',
    lineHeight: '1.6',
    margin: 0
  }
}

export default ContohOutput