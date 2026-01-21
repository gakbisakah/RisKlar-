import React from 'react'

const BatasanSistem = () => {
  const batasan = [
    {
      title: 'Tidak Memverifikasi Kebenaran Hukum',
      desc: 'Platform tidak memverifikasi kebenaran hukum di luar data yang diunggah pengguna. Validitas dokumen dan informasi menjadi tanggung jawab masing-masing pihak.'
    },
    {
      title: 'Tidak Menilai Profit atau Valuasi',
      desc: 'Platform tidak melakukan penilaian profit, valuasi, atau rekomendasi investasi. Semua keputusan investasi sepenuhnya menjadi hak dan risiko investor.'
    },
    {
      title: 'Tidak Terlibat dalam Perjanjian',
      desc: 'Platform tidak terlibat dalam perjanjian hukum antara UMKM dan Investor. Segala bentuk kesepakatan dan kontrak dibuat di luar platform.'
    },
    {
      title: 'Bukan Platform Pendanaan',
      desc: 'Platform tidak menyalurkan dana, tidak menjadi escrow, dan tidak menjamin realisasi investasi.'
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Batasan Sistem Platform</h2>
          <div style={styles.warningBox}>
            <strong>⚠️ INI BAGIAN KUNCI PROPOSAL</strong>
          </div>
        </div>
        
        <p style={styles.intro}>
          Untuk menjaga netralitas dan fokus pada transparansi, platform memiliki batasan-batasan berikut:
        </p>
        
        <div style={styles.batasanGrid}>
          {batasan.map((item, index) => (
            <div key={index} style={styles.batasanCard}>
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>❌</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
              </div>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div style={styles.conclusion}>
          <p style={styles.conclusionText}>
            <strong>Platform ini fokus pada penyaringan risiko dan transparansi data, 
            bukan sebagai perantara investasi atau penjamin kesuksesan bisnis.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 1rem',
    backgroundColor: '#fef2f2'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  warningBox: {
    display: 'inline-block',
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem'
  },
  intro: {
    fontSize: '1.125rem',
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: '3rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  batasanGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  batasanCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #fecaca',
    height: '100%'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  cardIcon: {
    fontSize: '2rem'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#dc2626'
  },
  cardDesc: {
    color: '#6b7280',
    lineHeight: '1.6'
  },
  conclusion: {
    backgroundColor: '#fee2e2',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    borderLeft: '4px solid #dc2626'
  },
  conclusionText: {
    fontSize: '1rem',
    color: '#991b1b',
    margin: 0
  }
}

export default BatasanSistem