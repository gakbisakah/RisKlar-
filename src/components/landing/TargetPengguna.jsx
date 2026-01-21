import React from 'react'

const TargetPengguna = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Target Pengguna Platform</h2>
        
        <div style={styles.targetCard}>
          <p style={styles.targetText}>
            Platform ditujukan untuk <strong>UMKM tahap awal hingga berkembang</strong> yang mempertimbangkan 
            pendanaan, serta <strong>investor individu</strong> yang mengutamakan transparansi risiko 
            dibanding janji keuntungan.
          </p>
          
          <div style={styles.userTypes}>
            <div style={styles.userType}>
              <div style={styles.userIcon}>🏪</div>
              <h3 style={styles.userTitle}>UMKM</h3>
              <ul style={styles.userList}>
                <li>Usaha mikro, kecil, dan menengah</li>
                <li>Tahap awal hingga berkembang</li>
                <li>Mempertimbangkan pendanaan eksternal</li>
                <li>Mau transparan dengan data usaha</li>
              </ul>
            </div>
            
            <div style={styles.userType}>
              <div style={styles.userIcon}>💰</div>
              <h3 style={styles.userTitle}>Investor</h3>
              <ul style={styles.userList}>
                <li>Angel investor individu</li>
                <li>Mengutamakan analisis risiko</li>
                <li>Mau data terbuka dan terstruktur</li>
                <li>Pengambilan keputusan mandiri</li>
              </ul>
            </div>
            
            <div style={styles.userType}>
              <div style={styles.userIcon}>👨‍🏫</div>
              <h3 style={styles.userTitle}>Mentor/Reviewer</h3>
              <ul style={styles.userList}>
                <li>Pihak independen non-investor</li>
                <li>Memberikan catatan kelayakan</li>
                <li>Berbasis pengalaman usaha</li>
                <li>Tanpa insentif pendanaan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 1rem',
    backgroundColor: '#f0f9ff'
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
    marginBottom: '2rem'
  },
  targetCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  targetText: {
    fontSize: '1.125rem',
    lineHeight: '1.8',
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '0 2rem'
  },
  userTypes: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  userType: {
    textAlign: 'center',
    padding: '1.5rem'
  },
  userIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  userTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  userList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    textAlign: 'left'
  }
}

export default TargetPengguna