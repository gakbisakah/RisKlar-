import React from 'react'

const SectionMasalah = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Masalah Nyata Investasi UMKM Saat Ini</h2>
        
        <div style={styles.problemsGrid}>
          <div style={styles.problemCard}>
            <div style={styles.problemIcon}>❗</div>
            <h3 style={styles.problemTitle}>UMKM tampil ke investor sebelum benar-benar siap</h3>
            <p style={styles.problemDesc}>
              Banyak UMKM mencari investor tanpa memiliki data keuangan yang rapi, 
              sehingga waktu dan sumber daya terbuang percuma.
            </p>
          </div>
          
          <div style={styles.problemCard}>
            <div style={styles.problemIcon}>📊</div>
            <h3 style={styles.problemTitle}>Investor menilai tanpa data yang konsisten dan terstruktur</h3>
            <p style={styles.problemDesc}>
              Setiap UMKM menyajikan data dengan format berbeda-beda, 
              menyulitkan investor dalam melakukan penilaian yang objektif.
            </p>
          </div>
          
          <div style={styles.problemCard}>
            <div style={styles.problemIcon}>💸</div>
            <h3 style={styles.problemTitle}>Banyak platform menjual optimisme, bukan risiko</h3>
            <p style={styles.problemDesc}>
              Platform investasi sering fokus pada potensi keuntungan 
              tanpa mengungkap risiko secara transparan.
            </p>
          </div>
        </div>
        
        <div style={styles.conclusion}>
          <p style={styles.conclusionText}>
            <strong>Platform ini dibuat untuk menghentikan praktik tersebut.</strong>
          </p>
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
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  problemsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  problemCard: {
    backgroundColor: '#f9fafb',
    padding: '2rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    textAlign: 'center'
  },
  problemIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  problemTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  problemDesc: {
    color: '#6b7280',
    lineHeight: '1.6'
  },
  conclusion: {
    backgroundColor: '#fef3c7',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    borderLeft: '4px solid #f59e0b'
  },
  conclusionText: {
    fontSize: '1.125rem',
    color: '#92400e',
    margin: 0
  }
}

export default SectionMasalah