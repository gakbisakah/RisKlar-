import React from 'react'

const ChecklistTidakDijanjikan = () => {
  const checklistItems = [
    {
      id: 1,
      text: 'Tidak menjanjikan ROI (Return on Investment)',
      description: 'Platform tidak memberikan proyeksi keuntungan investasi'
    },
    {
      id: 2,
      text: 'Tidak menjamin balik modal',
      description: 'Investor menanggung risiko penuh atas investasi'
    },
    {
      id: 3,
      text: 'Tidak ada rekomendasi investasi',
      description: 'Semua keputusan investasi dibuat secara mandiri'
    },
    {
      id: 4,
      text: 'Tidak memverifikasi data keuangan',
      description: 'Validitas data menjadi tanggung jawab masing-masing pihak'
    }
  ]

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Apa yang Tidak Dijanjikan Platform</h3>
      <p style={styles.subtitle}>
        Transparansi tentang batasan platform untuk menghindari ekspektasi yang tidak realistis
      </p>
      
      <div style={styles.checklist}>
        {checklistItems.map((item) => (
          <div key={item.id} style={styles.checklistItem}>
            <div style={styles.checkbox}>❌</div>
            <div style={styles.checklistContent}>
              <div style={styles.checklistText}>{item.text}</div>
              <div style={styles.checklistDesc}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.note}>
        <p>
          <strong>Platform fokus pada:</strong> Penyaringan risiko, transparansi data, 
          dan edukasi kesiapan investasi — bukan sebagai penjamin kesuksesan investasi.
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#fef2f2',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    marginBottom: '2rem',
    border: '1px solid #fecaca'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#92400e',
    fontSize: '0.875rem',
    marginBottom: '1.5rem'
  },
  checklist: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  checklistItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  },
  checkbox: {
    fontSize: '1.5rem',
    flexShrink: 0
  },
  checklistContent: {
    flex: 1
  },
  checklistText: {
    fontWeight: '600',
    color: '#991b1b',
    marginBottom: '0.25rem'
  },
  checklistDesc: {
    fontSize: '0.875rem',
    color: '#7f1d1d'
  },
  note: {
    marginTop: '1.5rem',
    paddingTop: '1rem',
    borderTop: '1px solid #fecaca'
  }
}

export default ChecklistTidakDijanjikan