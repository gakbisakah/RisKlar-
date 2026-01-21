import React from 'react'

const VisualAlur = () => {
  const steps = [
    { id: 1, title: 'UMKM Daftar', desc: 'Mengisi data dasar usaha' },
    { id: 2, title: 'Cek Kesiapan Bisnis', desc: 'Sistem menilai kesiapan investasi' },
    { id: 3, title: 'Penilaian Terbuka', desc: 'Skor dan catatan tersedia' },
    { id: 4, title: 'Edukasi Risiko', desc: 'UMKM memahami risiko bisnis' },
    { id: 5, title: 'Investor Menilai', desc: 'Investor melihat data terbuka' },
    { id: 6, title: 'Kesepakatan Mandiri', desc: 'Pihak sepakat di luar platform' }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Alur Sistem Platform</h2>
        <p style={styles.subtitle}>Transparansi dari awal hingga akhir</p>
        
        <div style={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.id} style={styles.stepContainer}>
              <div style={styles.step}>
                <div style={styles.stepNumber}>{step.id}</div>
                <div style={styles.stepContent}>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div style={styles.arrow}>→</div>
              )}
            </div>
          ))}
        </div>
        
        <div style={styles.note}>
          <p><strong>Catatan:</strong> Setiap tahap harus diselesaikan sebelum melanjutkan ke tahap berikutnya.</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 1rem',
    backgroundColor: '#f9fafb'
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
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  timeline: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  stepContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    minWidth: '150px'
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1'
  },
  stepNumber: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: '#2563eb',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    marginBottom: '1rem'
  },
  stepContent: {
    flex: '1'
  },
  stepTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  stepDesc: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  arrow: {
    fontSize: '1.5rem',
    color: '#9ca3af',
    padding: '0 0.5rem'
  },
  note: {
    marginTop: '3rem',
    padding: '1rem',
    backgroundColor: '#e0f2fe',
    borderRadius: '0.5rem',
    textAlign: 'center'
  }
}

export default VisualAlur