import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.section}>
            <h3 style={styles.heading}>Platform Penyaring UMKM</h3>
            <p style={styles.description}>
              Kami tidak menjanjikan keuntungan. Kami menyaring risiko dan membuka data secara jujur.
            </p>
          </div>
          
          <div style={styles.section}>
            <h4 style={styles.subheading}>Navigasi</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="/" style={styles.link}>Tentang Platform</a></li>
              <li style={styles.listItem}><a href="/penilaian" style={styles.link}>Prinsip Transparansi</a></li>
              <li style={styles.listItem}><a href="/penilaian" style={styles.link}>Disclaimer Hukum</a></li>
              <li style={styles.listItem}><a href="/penilaian" style={styles.link}>Kebijakan Privasi</a></li>
            </ul>
          </div>
          
          <div style={styles.section}>
            <h4 style={styles.subheading}>Kontak</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>Email: info@umkminvest.demo</li>
              <li style={styles.listItem}>Telepon: (021) 1234-5678</li>
              <li style={styles.listItem}>Jam Operasional: Senin-Jumat, 09:00-17:00</li>
            </ul>
          </div>
        </div>
        
        <div style={styles.disclaimer}>
          <p style={styles.disclaimerText}>
            <strong>Peringatan Penting:</strong> Platform tidak memverifikasi kebenaran hukum di luar data yang diunggah pengguna. 
            Platform tidak melakukan penilaian profit, valuasi, atau rekomendasi investasi. 
            Platform tidak terlibat dalam perjanjian hukum antara UMKM dan Investor.
          </p>
          <p style={styles.antiConflict}>
            <strong>Anti Konflik Kepentingan:</strong> Setiap peran dalam platform dipisahkan untuk mencegah 
            konflik kepentingan dalam penilaian dan pengambilan keputusan.
          </p>
        </div>
        
        <div style={styles.copyright}>
          <p>© 2024 Platform Penyaring UMKM. Mode demonstrasi.</p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '3rem 0 1.5rem',
    marginTop: 'auto'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  section: {
    marginBottom: '1.5rem'
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#f3f4f6'
  },
  subheading: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#d1d5db'
  },
  description: {
    color: '#9ca3af',
    lineHeight: '1.6'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    marginBottom: '0.5rem'
  },
  link: {
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.2s'
  },
  disclaimer: {
    borderTop: '1px solid #374151',
    paddingTop: '1.5rem',
    marginBottom: '1.5rem'
  },
  disclaimerText: {
    color: '#9ca3af',
    fontSize: '0.875rem',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  antiConflict: {
    color: '#60a5fa',
    fontSize: '0.875rem',
    fontStyle: 'italic'
  },
  copyright: {
    borderTop: '1px solid #374151',
    paddingTop: '1.5rem',
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '0.875rem'
  }
}

export default Footer